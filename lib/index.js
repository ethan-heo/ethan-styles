import React from 'react';

const Button = ({ variant = "default", size = "medium", danger, children, className, ...props }) => {
    const prefix = "button";
    const classNames = [prefix, size, variant];
    if (!props.disabled) {
        classNames.push(danger ? "danger" : null);
    }
    classNames.push(className);
    return (React.createElement("button", { className: classNames.filter(Boolean).join(" "), ...props }, children));
};

const TYPOGRAPH_CLASSNAME = "typograph";

const transformClassnamesToProps = (styles) => {
    return Object.entries(styles)
        .filter(([_, value]) => Boolean(value))
        .map(([key]) => key);
};

const createTypographClassnames = (component, { variant, ...props }, ...classNames) => {
    return [
        TYPOGRAPH_CLASSNAME,
        component,
        variant,
        ...transformClassnamesToProps(props),
        ...classNames,
    ]
        .filter(Boolean)
        .join(" ");
};

const Title = ({ level = 1, italic, underline, del, mark, variant = "default", className, children, ...props }) => {
    const classNames = createTypographClassnames("title", {
        italic,
        underline,
        del,
        mark,
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

const Paragraph = ({ strong, italic, underline, del, mark, variant = "default", children, className, ...props }) => {
    const classNames = createTypographClassnames("paragraph", {
        italic,
        underline,
        del,
        mark,
        variant,
    }, className);
    return (React.createElement("p", { className: classNames, ...props }, children));
};

const Text = ({ strong, italic, underline, del, mark, variant = "default", children, className, ...props }) => {
    const classNames = createTypographClassnames("text", {
        italic,
        underline,
        del,
        mark,
        variant,
    }, className);
    return (React.createElement("span", { className: classNames, ...props }, children));
};

const Link = ({ italic, underline, strong, del, mark, variant = "default", className, children, ...props }) => {
    const classNames = createTypographClassnames("link", {
        italic,
        underline,
        del,
        mark,
        variant,
    }, className);
    return (React.createElement("a", { className: classNames, ...props }, children));
};

export { Button, Link, Paragraph, Text, Title };
//# sourceMappingURL=index.js.map
