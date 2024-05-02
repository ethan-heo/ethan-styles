import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import { TYPOGRAPH_CLASSNAME } from "./constants";
import transformClassnamesToProps from "./utils/transformClassnamesToProps";
import "./Typograph.styles.css";
import "./Paragraph.styles.css";

interface ParagraphProps
	extends HTMLAttributes<HTMLParagraphElement>,
		TypographCommonProps {}

const Paragraph: React.FC<ParagraphProps> = ({
	strong,
	italic,
	underline,
	del,
	mark,
	variant,
	...props
}) => {
	const classNames = [
		TYPOGRAPH_CLASSNAME,
		"paragraph",
		variant,
		...transformClassnamesToProps({
			strong,
			italic,
			underline,
			del,
			mark,
		}),
		props.className,
	]
		.filter(Boolean)
		.join(" ");
	return <p className={classNames}>{props.children}</p>;
};

export default Paragraph;
