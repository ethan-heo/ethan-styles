import React, { HTMLAttributes } from "react";
import "./Button.styles.css";
export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "accent" | "success" | "error" | "warning" | "text";
    size?: "x-large" | "large" | "medium" | "small" | "x-small";
}
declare const Button: React.FC<ButtonProps>;
export default Button;
