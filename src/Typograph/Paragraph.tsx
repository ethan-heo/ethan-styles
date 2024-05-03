import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import "./Typograph.styles.css";
import "./Paragraph.styles.css";
import createTypographClassnames from "./utils/createTypographClassnames";

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
