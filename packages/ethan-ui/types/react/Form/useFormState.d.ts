declare const useFormState: <P extends Params<any>, S extends State<P["form"]>>(prop: P, initializedState?: S) => S;
export default useFormState;
type BehaviorEvent = "change" | "blur";
type ParamsFormField<T = any> = {
    id: string;
    defaultValue: T;
    event: BehaviorEvent;
    validate?: (value: T) => FormStateValidateResult;
};
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
            error?: T[K]["validate"] extends (args: any[]) => void ? ReturnType<T[K]["validate"]> : undefined;
            reset: (value?: T[K]["defaultValue"]) => void;
            change: (value: T[K]["defaultValue"]) => void;
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
