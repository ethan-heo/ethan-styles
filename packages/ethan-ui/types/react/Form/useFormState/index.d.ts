import { Params, State } from "./useFormState.types";
declare const useFormState: <P extends Params<any>, S extends State<P["form"]>>(prop: P, initializedState?: S) => {
    form: {
        [x: string]: {
            element: {
                name: string;
                id: string;
                value: any;
                onChange: (e: React.ChangeEvent<HTMLElement>) => void;
                onBlur: (e: React.ChangeEvent<HTMLElement>) => void;
            };
            validationEvent: import("./useFormState.types").ValidationEvent;
            error?: undefined;
            reset: (value?: any) => void;
            change: (value: any) => void;
        };
    };
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
export default useFormState;
