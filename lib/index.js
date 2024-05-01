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

export { Button };
//# sourceMappingURL=index.js.map
