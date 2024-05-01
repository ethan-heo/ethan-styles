import React, { HTMLAttributes } from "react";
import "./Button.styles.css";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "default" | "text";
    danger?: boolean;
    disabled?: boolean;
    size?: "x-large" | "large" | "medium" | "small" | "x-small";
}
declare const Button: React.FC<ButtonProps>;
export default Button;
