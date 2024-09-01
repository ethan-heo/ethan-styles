import { jsx } from 'react/jsx-runtime';
import { useState, useRef, useLayoutEffect, useEffect, useMemo, useReducer } from 'react';

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}
typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

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

const Button = (_a) => {
    var { variant = "default", size = "medium", danger, children, className } = _a, props = __rest(_a, ["variant", "size", "danger", "children", "className"]);
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
    if (danger && !props.disabled) {
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
    return (jsx("button", Object.assign({ className: classNames.filter(Boolean).join(" ") }, props, { children: children })));
};

const useMediaQuery = () => {
    const [platform, setPlatform] = useState("desktop");
    const media_queries = useRef(new Map()).current;
    useLayoutEffect(() => {
        const MEDIA_QUERIES = [
            "(max-width: 428px)",
            "(min-width: 429px) and (max-width: 768px)",
            "(min-width: 769px) and (max-width: 1024px)",
            "(min-width: 1025px) and (max-width: 1280px)",
            "(min-width: 1281px)",
        ];
        const MATCHER = {
            0: "mobile-portrait",
            1: "mobile-landscape",
            2: "tablet-portrait",
            3: "tablet-landscape",
            4: "desktop",
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

function useCssVariables(el) {
    const cssVariables = useRef(new CssVariables()).current;
    const [variables, setVariables] = useState(new Map());
    useEffect(() => {
        const subscribeCallback = (variables) => {
            setVariables(variables);
        };
        cssVariables.subscribe(subscribeCallback);
        cssVariables.update(el);
        return () => {
            cssVariables.unsubscribe(subscribeCallback);
        };
    }, [el]);
    return variables;
}
class CssVariables {
    constructor() {
        this.callbacks = [];
    }
    subscribe(callback) {
        this.callbacks.push(callback);
    }
    publish() {
        const variables = this.variables;
        if (!variables)
            return;
        this.callbacks.forEach((callback) => {
            callback(variables);
        });
    }
    unsubscribe(callback) {
        const self = this;
        self.callbacks = self.callbacks.filter((_callback) => callback !== _callback);
    }
    update(el) {
        const self = this;
        let style;
        if (el) {
            style = getComputedStyle(el);
        }
        else {
            const cssStyleRule = Array.from(document.styleSheets)
                .map((styleSheet) => Array.from(styleSheet.cssRules))
                .flat()
                .find((cssRule) => cssRule.selectorText === ":root");
            style = cssStyleRule === null || cssStyleRule === void 0 ? void 0 : cssStyleRule.style;
        }
        if (!style)
            return;
        self.variables = new Map();
        for (const key of style) {
            if (key.startsWith("--")) {
                self.variables.set(key, style.getPropertyValue(key).trim());
            }
        }
        self.publish();
    }
}

function GridLine() {
    const el = useRef(null);
    const platform = useMediaQuery();
    const variables = useCssVariables();
    const gradient = useMemo(() => {
        if (!Array.from(variables.keys()).length)
            return "";
        let columns;
        let gutter;
        let margin;
        const columnColor = variables.get("--color-primary");
        const gutterColor = variables.get("--color-accent");
        switch (platform) {
            case "mobile-portrait":
                columns = variables.get("--grid-mobile-portrait-columns");
                gutter = variables.get("--grid-mobile-portrait-gutter");
                margin = variables.get("--grid-mobile-portrait-margin");
                break;
            case "mobile-landscape":
                columns = variables.get("--grid-mobile-landscape-columns");
                gutter = variables.get("--grid-mobile-landscape-gutter");
                margin = variables.get("--grid-mobile-landscape-margin");
                break;
            case "tablet-portrait":
                columns = variables.get("--grid-tablet-portrait-columns");
                gutter = variables.get("--grid-tablet-portrait-gutter");
                margin = variables.get("--grid-tablet-portrait-margin");
                break;
            case "tablet-landscape":
                columns = variables.get("--grid-tablet-landscape-columns");
                gutter = variables.get("--grid-tablet-landscape-gutter");
                margin = variables.get("--grid-tablet-landscape-margin");
                break;
            default:
                columns = variables.get("--grid-desktop-columns");
                gutter = variables.get("--grid-desktop-gutter");
                margin = variables.get("--grid-desktop-margin");
        }
        if (!columns || !gutter || !margin) {
            throw new Error(`grid 속성이 정의되지 않았습니다.`);
        }
        columns = parseInt(columns);
        const columnWidth = `calc((100% - (${gutter} * (${columns} - 1))) / ${columns})`;
        const gradientColors = Array.from({ length: columns * 2 - 1 }).map((_, idx) => idx % 2 === 0
            ? `${columnColor} calc((${columnWidth} + ${gutter}) * ${Math.floor(idx / 2)}), ${columnColor} calc((${columnWidth} + ${gutter}) * ${Math.floor(idx / 2)} + ${columnWidth})`
            : `${gutterColor} calc((${columnWidth} + ${gutter}) * ${Math.floor(idx / 2)} + ${columnWidth}), ${gutterColor} calc((${columnWidth} + ${gutter}) * ${Math.floor(idx / 2) + 1})`);
        return `linear-gradient(to right, ${gradientColors.join(",")})`;
    }, [variables, platform]);
    useEffect(() => {
        var _a;
        const parentEl = (_a = el.current) === null || _a === void 0 ? void 0 : _a.parentElement;
        if (parentEl) {
            parentEl.style.position = "relative";
        }
    }, []);
    return (jsx("div", { ref: el, style: {
            background: gradient,
        }, className: createBEMSelector({
            block: GRID_LINE_BLOCK,
        }) }));
}

const TYPOGRAPH_BLOCK = "typograph";
const TYPOGRAPH_MODIFIER_COLOR = "color";
const TYPOGRAPH_MODIFIER_STYLE = "style";

const createTypographClassnames = (component, _a, ...classNames) => {
    var { variant = "default" } = _a, styles = __rest(_a, ["variant"]);
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

const Title = (_a) => {
    var { level = 1, italic, underline, del, mark, strong, variant = "default", className, children } = _a, props = __rest(_a, ["level", "italic", "underline", "del", "mark", "strong", "variant", "className", "children"]);
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
            return (jsx("h2", Object.assign({ className: classNames }, props, { children: children })));
        case 3:
            return (jsx("h3", Object.assign({ className: classNames }, props, { children: children })));
        default:
            return (jsx("h1", Object.assign({ className: classNames }, props, { children: children })));
    }
};

const Paragraph = (_a) => {
    var { strong, italic, underline, del, mark, variant = "default", children, className } = _a, props = __rest(_a, ["strong", "italic", "underline", "del", "mark", "variant", "children", "className"]);
    const classNames = createTypographClassnames("paragraph", {
        italic,
        underline,
        del,
        mark,
        strong,
        variant,
    }, className);
    return (jsx("p", Object.assign({ className: classNames }, props, { children: children })));
};

const Text = (_a) => {
    var { strong, italic, underline, del, mark, variant = "default", children, className } = _a, props = __rest(_a, ["strong", "italic", "underline", "del", "mark", "variant", "children", "className"]);
    const classNames = createTypographClassnames("text", {
        italic,
        underline,
        del,
        mark,
        strong,
        variant,
    }, className);
    return (jsx("span", Object.assign({ className: classNames }, props, { children: children })));
};

const Link = (_a) => {
    var { italic, underline, strong, del, mark, variant = "default", className, children } = _a, props = __rest(_a, ["italic", "underline", "strong", "del", "mark", "variant", "className", "children"]);
    const classNames = createTypographClassnames("link", {
        italic,
        underline,
        del,
        mark,
        strong,
        variant,
    }, className);
    return (jsx("a", Object.assign({ className: classNames }, props, { children: children })));
};

const Flex = (_a) => {
    var { justify = "flex-start", align = "flex-start", vertical, reverse, gap, wrap, children, className, as, column = "col-12" } = _a, props = __rest(_a, ["justify", "align", "vertical", "reverse", "gap", "wrap", "children", "className", "as", "column"]);
    const Component = as || "div";
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
    let columnClassName;
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
            modifier: ["gap"],
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
    if (column) {
        columnClassName = Array.isArray(column) ? column.join(" ") : column;
    }
    const classNames = [
        blockClassName,
        justifyClassName,
        alignClassName,
        columnClassName,
        reverseClassname,
        gapClassname,
        wrapClassname,
        verticalClassname,
        className,
    ];
    return (jsx(Component, Object.assign({ className: classNames.filter(Boolean).join(" ") }, props, { children: children })));
};

const FORM_BLOCK = "form";

const toKebabCase = (str) => {
    return str.replace(/[A-Z]/g, (matcher) => `-${matcher.toLowerCase()}`);
};
const createFormClassnames = (component, props, ...classNames) => {
    const block = createBEMSelector({
        block: FORM_BLOCK,
        element: component,
    });
    const createStyles = () => {
        let result = [];
        for (const [name, value] of Object.entries(props)) {
            if (!value) {
                continue;
            }
            result.push(createBEMSelector({
                block: FORM_BLOCK,
                modifier: [toKebabCase(name), value].filter((value) => typeof value === "string"),
            }));
        }
        return result.join(" ");
    };
    return [block, createStyles(), ...classNames].filter(Boolean).join(" ");
};

const Input = (_a) => {
    var { className, fontSize = "medium", invalid } = _a, props = __rest(_a, ["className", "fontSize", "invalid"]);
    const _className = createFormClassnames("input", { fontSize, invalid }, className);
    return jsx("input", Object.assign({}, props, { className: _className }));
};

const createAction = (type) => (payload) => ({ type, payload });
const CHANGE_VALUE_ACTION_TYPE = "@FORM_STATE/CHANGE_VALUE";
const changeValueAction = (createAction(CHANGE_VALUE_ACTION_TYPE));
const useFormState = (prop, initializedState = {}) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case CHANGE_VALUE_ACTION_TYPE:
                const { name, value, error } = action.payload;
                return Object.assign(Object.assign({}, state), { form: Object.assign(Object.assign({}, state.form), { [name]: Object.assign(Object.assign({}, state.form[name]), { value,
                            error }) }) });
            default:
                return state;
        }
    }, initializedState, (state) => {
        for (const key in prop.form) {
            const _p = prop.form[key];
            state.form = {
                [key]: {
                    name: key,
                    id: _p.id,
                    value: _p.defaultValue,
                    event: _p.event,
                },
            };
        }
        return state;
    });
    const handlers = {
        change: {
            onChange: (e) => {
                var _a, _b;
                const { value, name } = e.target;
                dispatch(changeValueAction({
                    name,
                    value,
                    error: (_b = (_a = prop.form[name]).validate) === null || _b === void 0 ? void 0 : _b.call(_a, value),
                }));
            },
        },
        blur: {
            onBlur: (e) => {
                var _a, _b;
                const { value, name } = e.target;
                dispatch(changeValueAction({
                    name,
                    value,
                    error: (_b = (_a = prop.form[name]).validate) === null || _b === void 0 ? void 0 : _b.call(_a, value),
                }));
            },
        },
    };
    const handleSubmit = (e) => {
        var _a;
        e.preventDefault();
        const formData = new FormData();
        const _state = state;
        for (const name in _state.form) {
            formData.append(name, _state.form[name].value);
        }
        (_a = prop.submit) === null || _a === void 0 ? void 0 : _a.call(prop, formData);
    };
    const result = Object.assign({}, state);
    // assign handlers
    for (const key in result.form) {
        const _handlers = handlers[prop.form[key].event];
        if (_handlers) {
            Object.assign(result.form[key], _handlers);
        }
    }
    // assign submit
    result.onSubmit = handleSubmit;
    return state;
};

const LIGHT_THEME = {
    GRID_MOBILE_PORTRAIT_COLUMNS: "4",
    GRID_MOBILE_PORTRAIT_GUTTER: "8px",
    GRID_MOBILE_PORTRAIT_MARGIN: "14px",
    GRID_MOBILE_LANDSCAPE_COLUMNS: "6",
    GRID_MOBILE_LANDSCAPE_GUTTER: "10px",
    GRID_MOBILE_LANDSCAPE_MARGIN: "18px",
    GRID_TABLET_PORTRAIT_COLUMNS: "8",
    GRID_TABLET_PORTRAIT_GUTTER: "12px",
    GRID_TABLET_PORTRAIT_MARGIN: "22px",
    GRID_TABLET_LANDSCAPE_COLUMNS: "12",
    GRID_TABLET_LANDSCAPE_GUTTER: "14px",
    GRID_TABLET_LANDSCAPE_MARGIN: "26px",
    GRID_DESKTOP_COLUMNS: "12",
    GRID_DESKTOP_GUTTER: "16px",
    GRID_DESKTOP_MARGIN: "auto",
    RESPONSIVE_MOBILE_PORTRAIT_MAX: "428px",
    RESPONSIVE_MOBILE_LANDSCAPE_MIN: "429px",
    RESPONSIVE_MOBILE_LANDSCAPE_MAX: "768px",
    RESPONSIVE_TABLET_PORTRAIT_MIN: "769px",
    RESPONSIVE_TABLET_PORTRAIT_MAX: "1024px",
    RESPONSIVE_TABLET_LANDSCAPE_MIN: "1025px",
    RESPONSIVE_TABLET_LANDSCAPE_MAX: "1280px",
    RESPONSIVE_DESKTOP_MIN: "1281px",
    FONT_SIZE_EXTRA_LARGE: "2rem",
    FONT_SIZE_LARGE: "1.5rem",
    FONT_SIZE_MEDIUM: "1rem",
    FONT_SIZE_SMALL: "0.875rem",
    FONT_SIZE_EXTRA_SMALL: "0.625rem",
    FONT_WEIGHT_THIN: "100",
    FONT_WEIGHT_EXTRA_LIGHT: "200",
    FONT_WEIGHT_LIGHT: "300",
    FONT_WEIGHT_NORMAL: "400",
    FONT_WEIGHT_MEDIUM: "500",
    FONT_WEIGHT_SEMI_BOLD: "600",
    FONT_WEIGHT_BOLD: "700",
    FONT_WEIGHT_EXTRA_BOLD: "800",
    FONT_WEIGHT_BLACK: "900",
    LINE_HEIGHT_EXTRA_LARGE: "2",
    LINE_HEIGHT_LARGE: "1.5",
    LINE_HEIGHT_MEDIUM: "1",
    LINE_HEIGHT_SMALL: "0.875",
    LINE_HEIGHT_EXTRA_SMALL: "0.625",
    COLOR_PRIMARY: "#ffa500",
    COLOR_SECONDARY: "#ffffff",
    COLOR_ACCENT: "#ffb733",
    COLOR_SUCCESS: "#bcf5bc",
    COLOR_WARNING: "#ffd700",
    COLOR_ERROR: "#ff3333",
    COLOR_TEXT: "#333333",
    COLOR_BACKGROUND: "#ffffff",
    BORDER_HIDDEN_THIN: "1px hidden",
    BORDER_HIDDEN_MEDIUM: "2px hidden",
    BORDER_HIDDEN_BOLD: "3px hidden",
    BORDER_HIDDEN_BLACK: "4px hidden",
    BORDER_DOTTED_THIN: "1px dotted",
    BORDER_DOTTED_MEDIUM: "2px dotted",
    BORDER_DOTTED_BOLD: "3px dotted",
    BORDER_DOTTED_BLACK: "4px dotted",
    BORDER_DASHED_THIN: "1px dashed",
    BORDER_DASHED_MEDIUM: "2px dashed",
    BORDER_DASHED_BOLD: "3px dashed",
    BORDER_DASHED_BLACK: "4px dashed",
    BORDER_DOUBLE_THIN: "1px double",
    BORDER_DOUBLE_MEDIUM: "2px double",
    BORDER_DOUBLE_BOLD: "3px double",
    BORDER_DOUBLE_BLACK: "4px double",
    BORDER_GROOVE_THIN: "1px groove",
    BORDER_GROOVE_MEDIUM: "2px groove",
    BORDER_GROOVE_BOLD: "3px groove",
    BORDER_GROOVE_BLACK: "4px groove",
    BORDER_RIDGE_THIN: "1px ridge",
    BORDER_RIDGE_MEDIUM: "2px ridge",
    BORDER_RIDGE_BOLD: "3px ridge",
    BORDER_RIDGE_BLACK: "4px ridge",
    BORDER_INSET_THIN: "1px inset",
    BORDER_INSET_MEDIUM: "2px inset",
    BORDER_INSET_BOLD: "3px inset",
    BORDER_INSET_BLACK: "4px inset",
    BORDER_OUTSET_THIN: "1px outset",
    BORDER_OUTSET_MEDIUM: "2px outset",
    BORDER_OUTSET_BOLD: "3px outset",
    BORDER_OUTSET_BLACK: "4px outset",
    BORDER_SOLID_THIN: "1px solid",
    BORDER_SOLID_MEDIUM: "2px solid",
    BORDER_SOLID_BOLD: "3px solid",
    BORDER_SOLID_BLACK: "4px solid",
    BORDER_RADIUS_EXTRA_LARGE: "20px",
    BORDER_RADIUS_LARGE: "16px",
    BORDER_RADIUS_MEDIUM: "12px",
    BORDER_RADIUS_SMALL: "8px",
    BORDER_RADIUS_EXTRA_SMALL: "4px",
    BORDER_RADIUS_FULL: "100%",
    SPACING_EXTRA_LARGE: "24px",
    SPACING_LARGE: "20px",
    SPACING_MEDIUM: "16px",
    SPACING_SMALL: "12px",
    SPACING_EXTRA_SMALL: "8px",
    SHADOW_TOP_LEFT_LARGE: "-12px -12px 20px 2px",
    SHADOW_TOP_LEFT_MEDIUM: "-8px -8px 14px 2px",
    SHADOW_TOP_LEFT_SMALL: "-2px -2px 10px 2px",
    SHADOW_TOP_RIGHT_LARGE: "12px -12px 20px 2px",
    SHADOW_TOP_RIGHT_MEDIUM: "8px -8px 14px 2px",
    SHADOW_TOP_RIGHT_SMALL: "2px -2px 10px 2px",
    SHADOW_BOTTOM_LEFT_LARGE: "-12px 12px 20px 2px",
    SHADOW_BOTTOM_LEFT_MEDIUM: "-8px 8px 14px 2px",
    SHADOW_BOTTOM_LEFT_SMALL: "-2px 2px 10px 2px",
    SHADOW_BOTTOM_RIGHT_LARGE: "12px 12px 20px 2px",
    SHADOW_BOTTOM_RIGHT_MEDIUM: "8px 8px 14px 2px",
    SHADOW_BOTTOM_RIGHT_SMALL: "2px 2px 10px 2px",
    FONT_FAMILY: "맑은 고딕, malgun gothic, AppleGothicNeoSD, Apple SD 산돌고딕 Neo, Microsoft NeoGothic,  Droid sans, sans-serif;",
};

export { Button, Flex, GridLine, Input, LIGHT_THEME, Link, Paragraph, Text, Title, useFormState, useMediaQuery };
//# sourceMappingURL=index.js.map
