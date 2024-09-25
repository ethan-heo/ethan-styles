import { Params, State } from "./useFormState.types";
declare const useFormState: <P extends Params<any>, S extends State<P["form"]>>(prop: P, initializedState?: S) => S;
export default useFormState;
