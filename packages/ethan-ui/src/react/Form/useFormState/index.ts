import { useReducer } from "react";
import { FormStateHandlerOptions, Params, State } from "./useFormState.types";
import useFormReducer, { initialUseFormReducerState } from "./formReducer";
import {
	changeErrorAction,
	changeValueAction,
	resetValueAction,
} from "./formActions";

const useFormState = <P extends Params<any>, S extends State<P["form"]>>(
	prop: P,
	initializedState = {} as S,
) => {
	const [state, dispatch] = useReducer(
		useFormReducer<P, S>,
		initializedState,
		initialUseFormReducerState<P, S>(prop),
	);
	const handleValidateAll = () => {
		let isValid = true;

		for (const name in state.form) {
			const form = state.form[name];
			const result = prop.form[name].validate?.(form.element.value) ?? {
				valid: true,
			};

			if (!result.valid) {
				dispatch(
					changeValueAction({
						name,
						value: form.element.value,
						error: result,
					}),
				);
				isValid = false;
			}
		}

		return isValid;
	};
	const handleChangeValue =
		(options: FormStateHandlerOptions) =>
		(e: React.ChangeEvent<HTMLElement>) => {
			const { value, name } = e.target as any;
			let error;

			if (options.useValidate) {
				error = prop.form[name].validate?.(value);
			}

			dispatch(
				changeValueAction({
					name,
					value,
					error,
				}),
			);
		};
	const handleBlurWithValidation =
		(options: FormStateHandlerOptions) =>
		(e: React.ChangeEvent<HTMLElement>) => {
			if (!options.useValidate) {
				return;
			}
			const { value, name } = e.target as any;

			dispatch(
				changeErrorAction({
					name,
					error: prop.form[name].validate?.(value),
				}),
			);
		};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (prop.submitWithValidation && !handleValidateAll()) {
			return;
		}

		/**
		 * [TODO]
		 * 에러를 해결하기 위한 임시 작업으로 any를 사용한 부분을 고친다.
		 */
		prop.submit?.(state.form as State<Params<any>["form"]>["form"]);
	};
	const handleReset =
		(name: keyof S["form"]) => (defaultValue?: string | boolean) => {
			dispatch(resetValueAction({ name: name as string, defaultValue }));
		};
	const handleChange =
		<N extends keyof S["form"]>(name: N) =>
		(value: string | boolean) => {
			dispatch(changeValueAction({ name: name as string, value }));
		};

	const result = {
		...state,
	};

	for (const key in result.form) {
		const stateFormField = result.form[key];

		stateFormField.element.onBlur = handleBlurWithValidation({
			useValidate: stateFormField.validationEvent === "blur",
		});
		stateFormField.element.onChange = handleChangeValue({
			useValidate: stateFormField.validationEvent === "change",
		});
		stateFormField.reset = handleReset(key);
		stateFormField.change = handleChange(key);
	}
	// assign submit
	result.onSubmit = handleSubmit;

	return result;
};

export default useFormState;
