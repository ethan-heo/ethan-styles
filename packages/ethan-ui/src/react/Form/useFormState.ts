import { useReducer } from "react";

const createAction =
	<T extends string>(type: T) =>
	<P extends object>(payload: P) => ({ type, payload });

const CHANGE_VALUE_ACTION_TYPE = "@FORM_STATE/CHANGE_VALUE";
const changeValueAction = createAction("@FORM_STATE/CHANGE_VALUE")<{
	name: string;
	value: any;
}>;

const useFormState = <
	Prop extends UseFormStateProp<string>,
	State extends UseFormState<Prop>,
>(
	prop: Prop,
	initializedState = {} as State,
) => {
	const [state, dispatch] = useReducer(
		useFormReducer,
		initializedState,
		initializeState,
	);

	const handlers: BehaviorEventHandler = {
		change: {
			onChange: (e: React.FormEvent<HTMLElement>) => {
				const { value, name } = e.target as any;
				dispatch(changeValueAction({ name, value }));
			},
		},
	};

	const result = { ...state };

	for (const key in state) {
		const _handlers = handlers[prop[key].event];

		if (_handlers) {
			Object.assign(result[key], _handlers);
		}
	}

	return result;

	/**
	 * internal functions =====================
	 */
	function useFormReducer(state: State, action: UseFormStateAction) {
		switch (action.type) {
			case CHANGE_VALUE_ACTION_TYPE:
				const { name, value } = action.payload;
				const validator = prop[name].onValidate ?? ((_: any) => undefined);
				const error = validator(value);

				return {
					...state,
					[name]: {
						...state[name],
						value,
						error,
					},
				};
			default:
				return state;
		}
	}
	function initializeState(state: State) {
		for (const key in prop) {
			const _p = prop[key];

			state[key] = {} as State[typeof key];
			state[key]["id"] = _p.id;
			state[key]["name"] = key;
			state[key]["value"] = _p.defaultValue;
		}

		return state;
	}
};

export default useFormState;

/**
 * Props, State ================================
 */
type BehaviorEvent = "change";
type UseFormStateProp<Name extends string, Value = any> = Record<
	Name,
	{
		id: string;
		defaultValue: Value;
		event: BehaviorEvent;
		onValidate?: UseFormStateValidate<Value>;
	}
>;
type UseFormState<Prop extends UseFormStateProp<string>> = {
	[K in keyof Prop]: {
		name: K;
		id: Prop[keyof Prop]["id"];
		value: Prop[keyof Prop]["defaultValue"];
		error: Prop[keyof Prop]["onValidate"] extends UseFormStateValidate<any>
			? ReturnType<Prop[keyof Prop]["onValidate"]>
			: undefined;
	} & BehaviorEventHandler[Prop[keyof Prop]["event"]];
};
type BehaviorEventHandler = {
	change: {
		onChange: (e: React.ChangeEvent<HTMLElement>) => void;
	};
};

/**
 * Return Type ================================
 */

/**
 * Validate ================================
 */
type UseFormStateValidateResult = {};
/**
 * [Todo]
 *  UseFormStateValidateResult 값을 정의해야 함
 */
type UseFormStateValidate<V> = (value: V) => UseFormStateValidateResult;

/**
 * Actions ================================
 */
type UseFormStateAction = ReturnType<typeof changeValueAction>;
