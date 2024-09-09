import {
	CHANGE_VALUE_ACTION_TYPE,
	FormStateAction,
	RESET_VALUE_ACTION_TYPE,
} from "./formActions";
import { Params, State } from "./useFormState.types";

const resetValue = <T extends string | boolean>(value: T, defaultValue?: T) => {
	if (typeof value === "string") {
		return defaultValue ?? "";
	} else {
		return defaultValue ?? false;
	}
};

export const initialUseFormReducerState =
	<P extends Params<any>, S extends State<P["form"]>>(prop: P) =>
	(state: S) => {
		for (const key in prop.form) {
			const _p = prop.form[key];

			state.form = {
				[key]: {
					element: {
						name: key,
						id: _p.id,
						value: _p.defaultValue,
					},
				},
			} as S["form"];
		}

		return state;
	};

const useFormReducer = <P extends Params<any>, S extends State<P["form"]>>(
	state: S,
	action: FormStateAction,
) => {
	switch (action.type) {
		case CHANGE_VALUE_ACTION_TYPE: {
			const { name, value } = action.payload;

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
							value: resetValue(state.form[name].element.value, defaultValue),
						},
						error: undefined,
					},
				},
			};
		}
		default:
			return state;
	}
};

export default useFormReducer;
