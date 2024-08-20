import createBEMSelector from "../../../utils/createBEMSelector";
import { FORM_BLOCK } from "../constants";
import { FormCommonProps } from "../Form.types";

const toKebabCase = (str: string) => {
	return str.replace(/[A-Z]/g, (matcher) => `-${matcher.toLowerCase()}`);
};

const createFormClassnames = (
	component: string,
	props: FormCommonProps,
	...classNames: (string | undefined)[]
) => {
	const block = createBEMSelector({
		block: FORM_BLOCK,
		element: component,
	});
	const createStyles = () => {
		let result: string[] = [];

		for (const [name, value] of Object.entries(props)) {
			if (!value) {
				continue;
			}

			result.push(
				createBEMSelector({
					block: FORM_BLOCK,
					modifier: [toKebabCase(name), value].filter(
						(value) => typeof value === "string",
					),
				}),
			);
		}

		return result.join(" ");
	};

	return [block, createStyles(), ...classNames].filter(Boolean).join(" ");
};

export default createFormClassnames;
