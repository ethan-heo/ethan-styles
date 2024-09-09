import { FormStateValidateResult } from "./useFormState.types";

const createAction =
	<T extends string>(type: T) =>
	<P extends object>(payload: P) => ({ type, payload });

export const CHANGE_VALUE_ACTION_TYPE = "@FORM_STATE/CHANGE_VALUE";
export const changeValueAction = createAction(CHANGE_VALUE_ACTION_TYPE)<{
	name: string;
	value: any;
	error?: FormStateValidateResult;
}>;
export const RESET_VALUE_ACTION_TYPE = "@FORM_STATE/RESET_VALUE";
export const resetValueAction = createAction(RESET_VALUE_ACTION_TYPE)<{
	name: string;
	defaultValue?: string | boolean;
}>;

export type FormStateAction =
	| ReturnType<typeof changeValueAction>
	| ReturnType<typeof resetValueAction>;
