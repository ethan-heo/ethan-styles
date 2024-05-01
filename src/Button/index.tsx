import React, { HTMLAttributes } from "react";
import "./Button.styles.css";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "default" | "text";
	danger?: boolean;
	disabled?: boolean;
	size?: "x-large" | "large" | "medium" | "small" | "x-small";
}

const Button: React.FC<ButtonProps> = ({
	variant = "default",
	size = "medium",
	danger,
	children,
	...props
}) => {
	const prefix = "button";
	const classNames: (string | null)[] = [prefix, size];

	if (!props.disabled) {
		classNames.push(...[variant, danger ? "danger" : null]);
	} else {
		classNames.push(variant);
	}

	return (
		<button className={classNames.join(" ")} {...props}>
			{children}
		</button>
	);
};

export default Button;
