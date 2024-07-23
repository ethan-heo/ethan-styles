import React from "react";
import "./Button.styles.css";
import createBEMSelector from "../utils/createBEMSelector";
const Button = ({ variant = "default", size = "medium", danger, children, className, ...props }) => {
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
    if (danger && !props.disabled) {
        dangerClassname = createBEMSelector({
            block,
            modifier: "danger",
        });
    }
    const classNames = [
        buttonClassname,
        variantClassname,
        sizeClassname,
        dangerClassname,
        className,
    ];
    return (React.createElement("button", { className: classNames.filter(Boolean).join(" "), ...props }, children));
};
export default Button;
