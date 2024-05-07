import React, { useState, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

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

const useMediaQuery = () => {
    const [platform, setPlatform] = useState("desktop");
    const media_queries = useRef(new Map()).current;
    useLayoutEffect(() => {
        const MEDIA_QUERIES = [
            "(orientation: portrait) and (max-width: 575px)",
            "(orientation: landscape) and (min-width: 576px) and (max-width: 767px)",
            "(min-width: 768px) and (max-width: 991px)",
            "(min-width: 992px)",
        ];
        const MATCHER = {
            0: "mobile-portrait",
            1: "mobile-landscape",
            2: "tablet",
            3: "desktop",
        };
        MEDIA_QUERIES.forEach((media_query_str, index) => {
            const media_query = window.matchMedia(media_query_str);
            media_query.addEventListener("change", matchPlatform);
            media_queries.set(MATCHER[index], media_query);
        });
        matchPlatform();
    }, []);
    function matchPlatform() {
        media_queries.forEach((media_query, platform) => {
            if (media_query.matches) {
                setPlatform(platform);
            }
        });
    }
    return platform;
};

const GridLineColumn = () => {
    return React.createElement("div", { className: "grid-line-column" });
};

const GridLineGutter = () => {
    return React.createElement("div", { className: "grid-line-gutter" });
};

const GRID_COMPONENTS = {
    desktop: {
        "--column": "var(--grid-desktop-column)",
        "--row": "var(--grid-desktop-row)",
        "--gutter": "var(--grid-desktop-gutter)",
    },
    "mobile-landscape": {
        "--column": "var(--grid-mobile-landscape-column)",
        "--row": "var(--grid-mobile-landscape-row)",
        "--gutter": "var(--grid-mobile-landscape-gutter)",
    },
    "mobile-portrait": {
        "--column": "var(--grid-mobile-portrait-column)",
        "--row": "var(--grid-mobile-portrait-row)",
        "--gutter": "var(--grid-mobile-portrait-gutter)",
    },
    tablet: {
        "--column": "var(--grid-tablet-column)",
        "--row": "var(--grid-tablet-row)",
        "--gutter": "var(--grid-tablet-gutter)",
    },
};
const GRID_LAYOUT = {
    desktop: [
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
    ],
    tablet: [
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
    ],
    "mobile-landscape": [
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
    ],
    "mobile-portrait": [
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
        "gutter",
        "column",
    ],
};
function GridLine() {
    const platform = useMediaQuery();
    const layouts = GRID_LAYOUT[platform];
    return ReactDOM.createPortal(React.createElement("div", { style: GRID_COMPONENTS[platform], className: `grid-line` },
        React.createElement("div", { className: "grid-line-contents" }, layouts.map((layout, index) => {
            if (layout === "column") {
                return React.createElement(GridLineColumn, { key: `column-${index}` });
            }
            else {
                return React.createElement(GridLineGutter, { key: `gutter-${index}` });
            }
        }))), document.body);
}

const Flex = ({ justify = "flex-start", align = "flex-start", vertical, reverse, gap, wrap, children, className, ...props }) => {
    const classNames = [
        "flex",
        "justify",
        "align",
        justify,
        align,
        gap ? `gap-${gap}` : null,
        vertical ? "vertical" : null,
        wrap ? "wrap" : null,
        reverse ? "reverse" : null,
        className,
    ].filter(Boolean);
    return (React.createElement("div", { className: classNames.join(" "), ...props }, children));
};

export { Button, Flex, GridLine, Link, Paragraph, Text, Title, useMediaQuery };
//# sourceMappingURL=index.js.map
