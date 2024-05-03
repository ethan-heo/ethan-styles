import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import "./Typograph.styles.css";
import "./Title.styles.css";
import createTypographClassnames from "./utils/createTypographClassnames";

type Level = 1 | 2 | 3;
type EnhancedTypographCommonProps = Omit<TypographCommonProps, "string">;

interface TitleProps
	extends EnhancedTypographCommonProps,
		HTMLAttributes<HTMLHeadingElement> {
	level?: Level;
}

const Title: React.FC<TitleProps> = ({
	level = 1,
	italic,
	underline,
	del,
	mark,
	variant = "text",
	className,
	children,
	...props
}) => {
	const classNames = createTypographClassnames(
		"title",
		{
			italic,
			underline,
			del,
			mark,
			variant,
		},
		className,
	);

	switch (level) {
		case 2:
			return (
				<h2 className={classNames} {...props}>
					{children}
				</h2>
			);
		case 3:
			return (
				<h3 className={classNames} {...props}>
					{children}
				</h3>
			);
		default:
			return (
				<h1 className={classNames} {...props}>
					{children}
				</h1>
			);
	}
};

export default Title;
