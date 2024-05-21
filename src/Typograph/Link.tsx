import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import createTypographClassnames from "./utils/createTypographClassnames";
import "./Link.styles.css";
import "./Typograph.styles.css";

interface LinkProps
	extends HTMLAttributes<HTMLAnchorElement>,
		TypographCommonProps {
	/**
	 * HTMLAnchorElement가 global.d.ts를 바라보고 있는데 lib.dom.d.ts를 참조하지 않아 문제가 발생하고 있어 임의의로 아래 속성을 정의함.
	 */
	rel?: string;
	href?: string;
	target?: string;
}

const Link: React.FC<LinkProps> = ({
	italic,
	underline,
	strong,
	del,
	mark,
	variant = "default",
	className,
	children,
	...props
}) => {
	const classNames = createTypographClassnames(
		"link",
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
		<a className={classNames} {...props}>
			{children}
		</a>
	);
};

export default Link;
