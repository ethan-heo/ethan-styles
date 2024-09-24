import { FormStateAction } from "./formActions";
import { Params, State } from "./useFormState.types";
export declare const initialUseFormReducerState: <P extends Params<any>, S extends State<P["form"]>>(prop: P) => (state: S) => S;
declare const useFormReducer: <P extends Params<any>, S extends State<P["form"]>>(state: S, action: FormStateAction) => S;
export default useFormReducer;
