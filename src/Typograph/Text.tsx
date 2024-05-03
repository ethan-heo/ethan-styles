import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import { TYPOGRAPH_CLASSNAME } from "./constants";
import transformClassnamesToProps from "./utils/transformClassnamesToProps";
import "./Typograph.styles.css";
import "./Text.styles.css";

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
	const classNames = [
		TYPOGRAPH_CLASSNAME,
		"text",
		variant,
		...transformClassnamesToProps({
			strong,
			italic,
			underline,
			del,
			mark,
		}),
		className,
	]
		.filter(Boolean)
		.join(" ");

	return (
		<span className={classNames} {...props}>
			{children}
		</span>
	);
};

export default Text;
