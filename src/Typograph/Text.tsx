import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import "./Typograph.styles.css";
import "./Text.styles.css";
import createTypographClassnames from "./utils/createTypographClassnames";

interface TextProps
	extends HTMLAttributes<HTMLSpanElement>,
		TypographCommonProps {}

const Text: React.FC<TextProps> = ({
	strong,
	italic,
	underline,
	del,
	mark,
	variant,
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
