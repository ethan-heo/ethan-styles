import React, { HTMLAttributes } from "react";
import "./Button.styles.css";
import createBEMSelector from "../utils/createBEMSelector";

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
	const block = "button";
	const buttonClassname = createBEMSelector({
		block,
	});
	const variantClassname = createBEMSelector({
		block,
		modifier: ["variant", variant],
	});
	const sizeClassname = createBEMSelector({
		block,
		modifier: ["size", size],
	});
	let dangerClassname;

	if (!!danger) {
		dangerClassname = createBEMSelector({
			block,
			modifier: "danger",
		});
	}

	const classNames: (string | null | undefined)[] = [
		buttonClassname,
		variantClassname,
		sizeClassname,
		dangerClassname,
		className,
	];

	return (
		<button className={classNames.filter(Boolean).join(" ")} {...props}>
			{children}
		</button>
	);
};

export default Button;
