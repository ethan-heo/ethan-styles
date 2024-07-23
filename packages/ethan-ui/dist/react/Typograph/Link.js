import React from "react";
import createTypographClassnames from "./utils/createTypographClassnames";
import "./Link.styles.css";
import "./Typograph.styles.css";
const Link = ({ italic, underline, strong, del, mark, variant = "default", className, children, ...props }) => {
    const classNames = createTypographClassnames("link", {
        italic,
        underline,
        del,
        mark,
        strong,
        variant,
    }, className);
    return (React.createElement("a", { className: classNames, ...props }, children));
};
export default Link;
