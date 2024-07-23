import React from "react";
import "./Title.styles.css";
import "./Typograph.styles.css";
import createTypographClassnames from "./utils/createTypographClassnames";
const Title = ({ level = 1, italic, underline, del, mark, strong, variant = "default", className, children, ...props }) => {
    const classNames = createTypographClassnames(`heading${level}`, {
        italic,
        underline,
        del,
        mark,
        strong,
        variant,
    }, className);
    switch (level) {
        case 2:
            return (React.createElement("h2", { className: classNames, ...props }, children));
        case 3:
            return (React.createElement("h3", { className: classNames, ...props }, children));
        default:
            return (React.createElement("h1", { className: classNames, ...props }, children));
    }
};
export default Title;
