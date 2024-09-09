import { FormStateValidateResult } from "./useFormState.types";
export declare const CHANGE_VALUE_ACTION_TYPE = "@FORM_STATE/CHANGE_VALUE";
export declare const changeValueAction: (payload: {
    name: string;
    value: any;
    error?: FormStateValidateResult;
}) => {
    type: "@FORM_STATE/CHANGE_VALUE";
    payload: {
        name: string;
        value: any;
        error?: FormStateValidateResult;
    };
};
export declare const CHANGE_ERROR_ACTION_TYPE = "@FORM_STATE/CHANGE_ERROR";
export declare const changeErrorAction: (payload: {
    name: string;
    error?: FormStateValidateResult;
}) => {
    type: "@FORM_STATE/CHANGE_ERROR";
    payload: {
        name: string;
        error?: FormStateValidateResult;
    };
};
export declare const RESET_VALUE_ACTION_TYPE = "@FORM_STATE/RESET_VALUE";
export declare const resetValueAction: (payload: {
    name: string;
    defaultValue?: string | boolean;
}) => {
    type: "@FORM_STATE/RESET_VALUE";
    payload: {
        name: string;
        defaultValue?: string | boolean;
    };
};
export type FormStateAction = ReturnType<typeof changeValueAction> | ReturnType<typeof resetValueAction> | ReturnType<typeof changeErrorAction>;
