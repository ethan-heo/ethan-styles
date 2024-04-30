import React from 'react';

const Button = ({ variant = "text", size = "medium", children, ...props }) => {
    const prefix = "button";
    const classNames = [prefix, variant, size];
    return (React.createElement("button", { className: classNames.join(" "), ...props }, children));
};

export { Button };
//# sourceMappingURL=index.js.map
