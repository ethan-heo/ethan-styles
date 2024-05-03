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
	className,
	...props
}) => {
	const prefix = "button";
	const classNames: (string | null | undefined)[] = [prefix, size, variant];

	if (!props.disabled) {
		classNames.push(danger ? "danger" : null);
	}

	classNames.push(className);

	return (
		<button className={classNames.filter(Boolean).join(" ")} {...props}>
			{children}
		</button>
	);
};

export default Button;
