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

const useFormState = <P extends Params<any>, S extends State<P["form"]>>(
	prop: P,
	initializedState = {} as S,
) => {
	const [state, dispatch] = useReducer(
		(state: S, action: FormStateAction) => {
			switch (action.type) {
				case CHANGE_VALUE_ACTION_TYPE:
					const { name, value, error } = action.payload;

					return {
						...state,
						form: {
							...state.form,
							[name]: {
								...state.form[name],
								value,
								error,
							},
						},
					};
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
						name: key,
						id: _p.id,
						value: _p.defaultValue,
						event: _p.event,
					},
				} as S["form"];
			}

			return state;
		},
	);
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

		const formData = new FormData();
		const _state = state as S;

		for (const name in _state.form) {
			formData.append(name, _state.form[name].value as string);
		}

		prop.submit?.(formData);
	};

	const result = {
		...state,
	};

	// assign handlers
	for (const key in result.form) {
		const _handlers = handlers[prop.form[key].event];

		if (_handlers) {
			Object.assign(result.form[key], _handlers);
		}
	}
	// assign submit
	result.onSubmit = handleSubmit;

	return state;
};

export default useFormState;

type BehaviorEvent = "change" | "blur";

type ParamsFormField<T = any> = {
	id: string;
	defaultValue: T;
	event: BehaviorEvent;
	validate?: (value: T) => FormStateValidateResult;
};

// 타입스크립트에서 엄격함, 엄격하지 않음을 어떻게 구분할까?
type Params<T> = {
	form: {
		[K in keyof T]: ParamsFormField<T[K]>;
	};
	submit?: (formData: FormData) => void;
};

type State<T extends Params<any>["form"]> = {
	form: {
		[K in keyof T]: {
			name: K;
			id: T[K]["id"];
			value: T[K]["defaultValue"];
			event: T[K]["event"];
			error?: T[K]["validate"] extends (args: any[]) => void
				? ReturnType<T[K]["validate"]>
				: undefined;
		} & FormEventMap[T[K]["event"]];
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

type FormStateAction = ReturnType<typeof changeValueAction>;
