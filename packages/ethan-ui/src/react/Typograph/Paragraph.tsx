import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import "./Typograph.styles.css";
import "./Paragraph.styles.css";
import createTypographClassnames from "./utils/createTypographClassnames";

export interface ParagraphProps
	extends HTMLAttributes<HTMLParagraphElement>,
		TypographCommonProps {}

const Paragraph: React.FC<ParagraphProps> = ({
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
		"paragraph",
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
		<p className={classNames} {...props}>
			{children}
		</p>
	);
};

export default Paragraph;
