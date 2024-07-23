import React from "react";
import "./Text.styles.css";
import "./Typograph.styles.css";
import createTypographClassnames from "./utils/createTypographClassnames";
const Text = ({ strong, italic, underline, del, mark, variant = "default", children, className, ...props }) => {
    const classNames = createTypographClassnames("text", {
        italic,
        underline,
        del,
        mark,
        strong,
        variant,
    }, className);
    return (React.createElement("span", { className: classNames, ...props }, children));
};
export default Text;
