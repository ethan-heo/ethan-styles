import React from "react";
import "./Typograph.styles.css";
import "./Paragraph.styles.css";
import createTypographClassnames from "./utils/createTypographClassnames";
const Paragraph = ({ strong, italic, underline, del, mark, variant = "default", children, className, ...props }) => {
    const classNames = createTypographClassnames("paragraph", {
        italic,
        underline,
        del,
        mark,
        strong,
        variant,
    }, className);
    return (React.createElement("p", { className: classNames, ...props }, children));
};
export default Paragraph;
