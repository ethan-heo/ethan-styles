import React, { HTMLAttributes } from "react";
import "./Button.styles.css";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "accent" | "success" | "error" | "warning" | "text";
	size?: "x-large" | "large" | "medium" | "small" | "x-small";
}

const Button: React.FC<ButtonProps> = ({
	variant = "text",
	size = "medium",
	children,
	...props
}) => {
	const prefix = "button";
	const classNames = [prefix, variant, size];

	return (
		<button className={classNames.join(" ")} {...props}>
			{children}
		</button>
	);
};

export default Button;
