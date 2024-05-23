import React, { useState, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

const createBEMSelector = ({ block, element, modifier, }) => {
    let _block = block;
    let _element = element;
    let _modifier = modifier;
    const NAMING_SEPARATOR = "-";
    if (Array.isArray(_block)) {
        _block = _block.join(NAMING_SEPARATOR);
    }
    if (Array.isArray(_element)) {
        _element = _element.join(NAMING_SEPARATOR);
    }
    if (Array.isArray(_modifier)) {
        _modifier = _modifier.join(NAMING_SEPARATOR);
    }
    if (!_element && !_modifier) {
        return _block;
    }
    if (_element && !_modifier) {
        return `${_block}__${_element}`;
    }
    if (!_element && _modifier) {
        return `${_block}--${_modifier}`;
    }
    return `${_block}__${_element}--${_modifier}`;
};

const Button = ({ variant = "default", size = "medium", danger, children, className, ...props }) => {
    const block = "button";
    const buttonClassname = createBEMSelector({
        block,
    });
    const variantClassname = createBEMSelector({
        block,
        modifier: ["variant", variant],
    });
    const sizeClassname = createBEMSelector({
        block,
        modifier: ["size", size],
    });
    let dangerClassname;
    if (!!danger) {
        dangerClassname = createBEMSelector({
            block,
            modifier: "danger",
        });
    }
    const classNames = [
        buttonClassname,
        variantClassname,
        sizeClassname,
        dangerClassname,
        className,
    ];
    return (React.createElement("button", { className: classNames.filter(Boolean).join(" "), ...props }, children));
};

const TYPOGRAPH_BLOCK = "typograph";
const TYPOGRAPH_MODIFIER_COLOR = "color";
const TYPOGRAPH_MODIFIER_STYLE = "style";

const createTypographClassnames = (component, { variant = "default", ...styles }, ...classNames) => {
    const block = createBEMSelector({
        block: [TYPOGRAPH_BLOCK],
        element: component,
    });
    const createVariant = () => createBEMSelector({
        block: TYPOGRAPH_BLOCK,
        modifier: [TYPOGRAPH_MODIFIER_COLOR, variant],
    });
    const createStyles = () => {
        let result = [];
        for (const [name, value] of Object.entries(styles)) {
            if (!value) {
                continue;
            }
            result.push(createBEMSelector({
                block: TYPOGRAPH_BLOCK,
                modifier: [TYPOGRAPH_MODIFIER_STYLE, name],
            }));
        }
        return result.join(" ");
    };
    return [block, createVariant(), createStyles(), ...classNames]
        .filter(Boolean)
        .join(" ");
};

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

const Paragraph = ({ strong, italic, underline, del, mark, variant = "default", children, className, ...props }) => {
    const classNames = createTypographClassnames("paragraph", {
        italic,
        underline,
        del,
        mark,
        strong,
        variant,
        strong,
    }, className);
    return (React.createElement("p", { className: classNames, ...props }, children));
};

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

const GRID_LINE_BLOCK = "grid-line";

const GridLineColumn = () => {
    return (React.createElement("div", { className: createBEMSelector({
            block: GRID_LINE_BLOCK,
            element: "column",
        }) }));
};

const GridLineGutter = () => {
    return (React.createElement("div", { className: createBEMSelector({
            block: GRID_LINE_BLOCK,
            element: "gutter",
        }) }));
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
    const blockClassname = createBEMSelector({
        block: GRID_LINE_BLOCK,
    });
    const contentsClassname = createBEMSelector({
        block: GRID_LINE_BLOCK,
        element: "contents",
    });
    return ReactDOM.createPortal(React.createElement("div", { style: GRID_COMPONENTS[platform], className: blockClassname },
        React.createElement("div", { className: contentsClassname }, layouts.map((layout, index) => {
            if (layout === "column") {
                return React.createElement(GridLineColumn, { key: `column-${index}` });
            }
            else {
                return React.createElement(GridLineGutter, { key: `gutter-${index}` });
            }
        }))), document.body);
}

const Flex = ({ justify = "flex-start", align = "flex-start", vertical, reverse, gap, wrap, children, className, ...props }) => {
    const block = "flex";
    const blockClassName = createBEMSelector({
        block,
    });
    const justifyClassName = createBEMSelector({
        block,
        modifier: ["justify", justify],
    });
    const alignClassName = createBEMSelector({
        block,
        modifier: ["align", align],
    });
    let reverseClassname;
    let gapClassname;
    let wrapClassname;
    let verticalClassname;
    if (reverse) {
        reverseClassname = createBEMSelector({
            block,
            modifier: ["reverse"],
        });
    }
    if (gap) {
        gapClassname = createBEMSelector({
            block,
            modifier: ["gap", `${gap}`],
        });
    }
    if (wrap) {
        wrapClassname = createBEMSelector({
            block,
            modifier: ["wrap"],
        });
    }
    if (vertical) {
        verticalClassname = createBEMSelector({
            block,
            modifier: ["vertical"],
        });
    }
    const classNames = [
        blockClassName,
        justifyClassName,
        alignClassName,
        reverseClassname,
        gapClassname,
        wrapClassname,
        verticalClassname,
        className,
    ];
    return (React.createElement("div", { className: classNames.filter(Boolean).join(" "), ...props }, children));
};

export { Button, Flex, GridLine, Link, Paragraph, Text, Title, useMediaQuery };
//# sourceMappingURL=index.js.map
