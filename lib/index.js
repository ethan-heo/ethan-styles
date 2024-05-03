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

const transformClassnamesToProps = (styles) => {
    return Object.entries(styles)
        .filter(([_, value]) => Boolean(value))
        .map(([key]) => key);
};

const Title = ({ level = 1, italic, underline, del, mark, variant = "text", ...props }) => {
    const classNames = [
        TYPOGRAPH_CLASSNAME,
        "title",
        variant,
        ...transformClassnamesToProps({
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

const Paragraph = ({ strong, italic, underline, del, mark, variant, ...props }) => {
    const classNames = [
        TYPOGRAPH_CLASSNAME,
        "paragraph",
        variant,
        ...transformClassnamesToProps({
            strong,
            italic,
            underline,
            del,
            mark,
        }),
        props.className,
    ]
        .filter(Boolean)
        .join(" ");
    return React.createElement("p", { className: classNames }, props.children);
};

const Text = ({ strong, italic, underline, del, mark, variant, ...props }) => {
    const classNames = [
        TYPOGRAPH_CLASSNAME,
        "text",
        variant,
        ...transformClassnamesToProps({
            strong,
            italic,
            underline,
            del,
            mark,
        }),
        props.className,
    ]
        .filter(Boolean)
        .join(" ");
    return React.createElement("span", { className: classNames }, props.children);
};

export { Button, Paragraph, Text, Title };
//# sourceMappingURL=index.js.map
