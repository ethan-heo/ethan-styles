export type ValidationEvent = "change" | "blur";
export type ParamsFormField<T = any> = {
    id: string;
    defaultValue: T;
    validationEvent?: ValidationEvent;
    validate?: (value: T) => FormStateValidateResult;
};
export type ParamsForm<T = any> = {
    [K in keyof T]: ParamsFormField<T[K]>;
};
export type Params<T> = {
    form: ParamsForm<T>;
    submitWithValidation?: boolean;
    submit?: (stateForm: State<Params<T>["form"]>["form"]) => void;
};
export type State<T extends Params<any>["form"]> = {
    form: {
        [K in keyof T]: {
            element: {
                name: K;
                id: T[K]["id"];
                value: T[K]["defaultValue"];
                onChange: (e: React.ChangeEvent<HTMLElement>) => void;
                onBlur: (e: React.ChangeEvent<HTMLElement>) => void;
            };
            validationEvent: ValidationEvent;
            error?: T[K]["validate"] extends (args: any[]) => void ? ReturnType<T[K]["validate"]> : undefined;
            reset: (value?: T[K]["defaultValue"]) => void;
            change: (value: T[K]["defaultValue"]) => void;
        };
    };
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
export interface FormStateValidateResult {
    msg?: string;
    valid: boolean;
}
export interface FormStateHandlerOptions {
    useValidate: boolean;
}
