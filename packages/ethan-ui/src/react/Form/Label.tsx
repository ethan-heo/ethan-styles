import React from "react";
import { FormCommonProps } from "./Form.types";
import createFormClassnames from "./utils/createFormClassnames";

export interface LabelProps
	extends React.LabelHTMLAttributes<HTMLElement>,
		FormCommonProps {}

const Label = ({ fontSize, invalid, className, ...props }: LabelProps) => {
	const _className = createFormClassnames(
		"label",
		{ fontSize, invalid },
		className,
	);
	return (
		<label {...props} className={_className}>
			{props.children}
		</label>
	);
};

export default Label;
