import { useReducer } from "react";

const createAction =
	<T extends string>(type: T) =>
	<P extends object>(payload: P) => ({ type, payload });

const CHANGE_VALUE_ACTION_TYPE = "@FORM_STATE/CHANGE_VALUE";
const changeValueAction = createAction(CHANGE_VALUE_ACTION_TYPE)<{
	name: string;
	value: any;
	error?: FormStateValidateResult;
}>;
const RESET_VALUE_ACTION_TYPE = "@FORM_STATE/RESET_VALUE";
const resetValueAction = createAction(RESET_VALUE_ACTION_TYPE)<{
	name: string;
	defaultValue?: string | boolean;
}>;

type FormStateAction =
	| ReturnType<typeof changeValueAction>
	| ReturnType<typeof resetValueAction>;

const resetValue = <T extends string | boolean>(value: T, defaultValue?: T) => {
	if (typeof value === "string") {
		return defaultValue ?? "";
	} else {
		return defaultValue ?? false;
	}
};

const useFormState = <P extends Params<any>, S extends State<P["form"]>>(
	prop: P,
	initializedState = {} as S,
) => {
	const [state, dispatch] = useReducer(
		(state: S, action: FormStateAction) => {
			switch (action.type) {
				case CHANGE_VALUE_ACTION_TYPE: {
					const { name, value, error } = action.payload;

					return {
						...state,
						form: {
							...state.form,
							[name]: {
								...state.form[name],
								element: {
									...state.form[name].element,
									value,
								},
								error,
							},
						},
					};
				}
				case RESET_VALUE_ACTION_TYPE: {
					const { name, defaultValue } = action.payload;
					return {
						...state,
						form: {
							...state.form,
							[name]: {
								...state.form[name],
								element: {
									...state.form[name].element,
									value: resetValue(
										state.form[name].element.value,
										defaultValue,
									),
								},
							},
						},
					};
				}
				default:
					return state;
			}
		},
		initializedState,
		(state) => {
			for (const key in prop.form) {
				const _p = prop.form[key];

				state.form = {
					[key]: {
						element: {
							name: key,
							id: _p.id,
							value: _p.defaultValue,
						},
						event: _p.event,
					},
				} as S["form"];
			}

			return state;
		},
	);
	const handleValidateAll = () => {
		let isValid = true;

		for (const name in state.form) {
			const form = state.form[name];
			const result = prop.form[name].validate?.(form.element.value) ?? {
				valid: true,
			};

			if (!result.valid) {
				dispatch(
					changeValueAction({
						name,
						value: form.element.value,
						error: result,
					}),
				);
				isValid = false;
			}
		}

		return isValid;
	};
	const handlers = {
		change: {
			onChange: (e: React.ChangeEvent<HTMLElement>) => {
				const { value, name } = e.target as any;
				dispatch(
					changeValueAction({
						name,
						value,
						error: prop.form[name].validate?.(value),
					}),
				);
			},
		},
		blur: {
			onBlur: (e: React.ChangeEvent<HTMLElement>) => {
				const { value, name } = e.target as any;
				dispatch(
					changeValueAction({
						name,
						value,
						error: prop.form[name].validate?.(value),
					}),
				);
			},
		},
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!handleValidateAll()) {
			return;
		}

		/**
		 * [TODO]
		 * 에러를 해결하기 위한 임시 작업으로 any를 사용한 부분을 고친다.
		 */
		prop.submit?.(state.form as State<Params<any>["form"]>["form"]);
	};
	const handleReset =
		(name: keyof S["form"]) => (defaultValue?: string | boolean) => {
			dispatch(resetValueAction({ name: name as string, defaultValue }));
		};
	const handleChange =
		<N extends keyof S["form"]>(name: N) =>
		(value: string | boolean) => {
			dispatch(changeValueAction({ name: name as string, value }));
		};

	const result = {
		...state,
	};

	for (const key in result.form) {
		const propFormField = prop.form[key];
		const stateFormField = result.form[key];
		const _handlers = handlers[propFormField.event];

		// assign handlers
		if (_handlers) {
			Object.assign(stateFormField.element, _handlers);
		}

		stateFormField.reset = handleReset(key);
		stateFormField.change = handleChange(key);
	}
	// assign submit
	result.onSubmit = handleSubmit;

	return result;
};

export default useFormState;

type BehaviorEvent = "change" | "blur";

type ParamsFormField<T = any> = {
	id: string;
	defaultValue: T;
	event: BehaviorEvent;
	validate?: (value: T) => FormStateValidateResult;
};

type ParamsForm<T = any> = {
	[K in keyof T]: ParamsFormField<T[K]>;
};

// 타입스크립트에서 엄격함, 엄격하지 않음을 어떻게 구분할까?
type Params<T> = {
	form: ParamsForm<T>;
	submit?: (stateForm: State<Params<T>["form"]>["form"]) => void;
};

type State<T extends Params<any>["form"]> = {
	form: {
		[K in keyof T]: {
			element: {
				name: K;
				id: T[K]["id"];
				value: T[K]["defaultValue"];
			} & FormEventMap[T[K]["event"]];
			event: T[K]["event"];
			error?: T[K]["validate"] extends (args: any[]) => void
				? ReturnType<T[K]["validate"]>
				: undefined;
			reset: (value?: T[K]["defaultValue"]) => void;
			change: (value: T[K]["defaultValue"]) => void;
		};
	};
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

type FormEventMap = {
	change: {
		onChange: (e: React.ChangeEvent<HTMLElement>) => void;
	};
	blur: {
		onBlur: (e: React.ChangeEvent<HTMLElement>) => void;
	};
};

type FormStateValidateResult = {
	msg?: string;
	valid: boolean;
};
