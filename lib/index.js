import React from 'react';

const Button = ({ variant = "default", size = "medium", danger, children, ...props }) => {
    const prefix = "button";
    const classNames = [prefix, size];
    if (!props.disabled) {
        classNames.push(...[variant, danger ? "danger" : null]);
    }
    else {
        classNames.push(variant);
    }
    return (React.createElement("button", { className: classNames.join(" "), ...props }, children));
};

const TYPOGRAPH_CLASSNAME = "typograph";

const Title = ({ level = 1, italic, underline, del, mark, variant = "text", ...props }) => {
    const classNames = [
        TYPOGRAPH_CLASSNAME,
        "title",
        variant,
        ...createStylesClassNames({
            italic,
            underline,
            del,
            mark,
        }),
        props.className,
    ]
        .filter(Boolean)
        .join(" ");
    switch (level) {
        case 2:
            return React.createElement("h2", { className: classNames }, props.children);
        case 3:
            return React.createElement("h3", { className: classNames }, props.children);
        default:
            return React.createElement("h1", { className: classNames }, props.children);
    }
};
const createStylesClassNames = (styles) => {
    return Object.entries(styles)
        .filter(([_, value]) => Boolean(value))
        .map(([key]) => key);
};

export { Button, Title };
//# sourceMappingURL=index.js.map
