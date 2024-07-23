import createBEMSelector from "../../../utils/createBEMSelector";
import { TypographCommonProps } from "../Typograph.types";
import {
	TYPOGRAPH_BLOCK,
	TYPOGRAPH_MODIFIER_COLOR,
	TYPOGRAPH_MODIFIER_STYLE,
} from "../constants";

const createTypographClassnames = (
	component: string,
	{ variant = "default", ...styles }: TypographCommonProps,
	...classNames: (string | undefined)[]
) => {
	const block = createBEMSelector({
		block: [TYPOGRAPH_BLOCK],
		element: component,
	});
	const createVariant = () =>
		createBEMSelector({
			block: TYPOGRAPH_BLOCK,
			modifier: [TYPOGRAPH_MODIFIER_COLOR, variant],
		});
	const createStyles = () => {
		let result: string[] = [];

		for (const [name, value] of Object.entries(styles)) {
			if (!value) {
				continue;
			}

			result.push(
				createBEMSelector({
					block: TYPOGRAPH_BLOCK,
					modifier: [TYPOGRAPH_MODIFIER_STYLE, name],
				}),
			);
		}

		return result.join(" ");
	};

	return [block, createVariant(), createStyles(), ...classNames]
		.filter(Boolean)
		.join(" ");
};

export default createTypographClassnames;
