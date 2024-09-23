import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import createTypographClassnames from "./utils/createTypographClassnames";

export interface TextProps
	extends HTMLAttributes<HTMLSpanElement>,
		TypographCommonProps {}

const Text: React.FC<TextProps> = ({
	strong,
	italic,
	underline,
	del,
	mark,
	variant = "default",
	children,
	className,
	...props
}) => {
	const classNames = createTypographClassnames(
		"text",
		{
			italic,
			underline,
			del,
			mark,
			strong,
			variant,
		},
		className,
	);

	return (
		<span className={classNames} {...props}>
			{children}
		</span>
	);
};

export default Text;
