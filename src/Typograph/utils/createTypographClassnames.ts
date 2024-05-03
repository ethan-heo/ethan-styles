import { TypographCommonProps } from "../Typograph.types";
import { TYPOGRAPH_CLASSNAME } from "../constants";
import transformClassnamesToProps from "./transformClassnamesToProps";

const createTypographClassnames = (
	component: string,
	{ variant, ...props }: TypographCommonProps,
	...classNames: (string | undefined)[]
) => {
	return [
		TYPOGRAPH_CLASSNAME,
		component,
		variant,
		...transformClassnamesToProps(props),
		...classNames,
	]
		.filter(Boolean)
		.join(" ");
};

export default createTypographClassnames;
