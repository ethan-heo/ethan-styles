import { jsx } from 'react/jsx-runtime';
import { useState, useRef, useLayoutEffect, useMemo, useEffect, useReducer } from 'react';

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

const getCSSVariablesInDocument = () => {
    const result = new Map();
    const cssStyleRule = Array.from(document.styleSheets)
        .map((styleSheet) => Array.from(styleSheet.cssRules))
        .flat()
        .find((cssRule) => cssRule.selectorText === ":root");
    if (!cssStyleRule)
        return result;
    const style = cssStyleRule.style;
    for (const key of style) {
        if (key.startsWith("--")) {
            result.set(key, style.getPropertyValue(key).trim());
        }
    }
    return result;
};

const useMediaQuery = () => {
    const [platform, setPlatform] = useState("desktop");
    const variables = useRef(getCSSVariablesInDocument()).current;
    const match_medias = useRef(new Map()).current;
    useLayoutEffect(() => {
        const MEDIA_QUERIES = [
            `(max-width: ${variables.get("--responsive-desktop")})`,
            `(max-width: ${variables.get("--responsive-tablet")})`,
            `(max-width: ${variables.get("--responsive-mobile")})`,
        ];
        const MATCHER = {
            0: "desktop",
            1: "tablet",
            2: "mobile",
        };
        MEDIA_QUERIES.forEach((media_query_str, index) => {
            const match_media = window.matchMedia(media_query_str);
            const platform = MATCHER[index];
            match_media.addEventListener("change", matchPlatform);
            match_medias.set(platform, match_media);
        });
        matchPlatform();
        return () => { };
    }, []);
    function matchPlatform() {
        match_medias.forEach((match_media, platform) => {
            if (match_media.matches) {
                setPlatform(platform);
            }
        });
    }
    return platform;
};

const GRID_LINE_BLOCK = "grid-line";

function GridLine() {
    const el = useRef(null);
    const platform = useMediaQuery();
    const variables = useRef(getCSSVariablesInDocument()).current;
    const gradient = useMemo(() => {
        if (!Array.from(variables.keys()).length)
            return "";
        let columns;
        let gutter;
        let margin;
        const columnColor = `${variables.get("--color-primary-default")}60`;
        const gutterColor = `${variables.get("--color-primary-on-default")}60`;
        switch (platform) {
            case "mobile":
                columns = variables.get("--grid-mobile-columns");
                gutter = variables.get("--grid-mobile-gutter");
                margin = variables.get("--grid-mobile-margin");
                break;
            case "tablet":
                columns = variables.get("--grid-tablet-columns");
                gutter = variables.get("--grid-tablet-gutter");
                margin = variables.get("--grid-tablet-margin");
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

const withLayout = (WrappedComponent) => (_a) => {
    var { column, className } = _a, props = __rest(_a, ["column", "className"]);
    const columnClassName = Array.isArray(column) ? column.join(" ") : column;
    return (jsx(WrappedComponent, Object.assign({}, props, { className: [columnClassName, className].join(" ") })));
};

const Flex = (_a) => {
    var { justify = "flex-start", align = "flex-start", vertical, reverse, gap, wrap, children, className, as } = _a, props = __rest(_a, ["justify", "align", "vertical", "reverse", "gap", "wrap", "children", "className", "as"]);
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
var Flex$1 = withLayout(Flex);

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

const Label = (_a) => {
    var { fontSize, invalid, className } = _a, props = __rest(_a, ["fontSize", "invalid", "className"]);
    const _className = createFormClassnames("label", { fontSize, invalid }, className);
    return (jsx("label", Object.assign({}, props, { className: _className, children: props.children })));
};

const Input = (_a) => {
    var { className, fontSize = "medium", invalid } = _a, props = __rest(_a, ["className", "fontSize", "invalid"]);
    const _className = createFormClassnames("input", { fontSize, invalid }, className);
    return jsx("input", Object.assign({}, props, { className: _className }));
};

const Form = (_a) => {
    var { children } = _a, props = __rest(_a, ["children"]);
    return jsx("form", Object.assign({}, props, { children: children }));
};

const createAction = (type) => (payload) => ({ type, payload });
const CHANGE_VALUE_ACTION_TYPE = "@FORM_STATE/CHANGE_VALUE";
const changeValueAction = (createAction(CHANGE_VALUE_ACTION_TYPE));
const CHANGE_ERROR_ACTION_TYPE = "@FORM_STATE/CHANGE_ERROR";
const changeErrorAction = (createAction(CHANGE_ERROR_ACTION_TYPE));
const RESET_VALUE_ACTION_TYPE = "@FORM_STATE/RESET_VALUE";
const resetValueAction = (createAction(RESET_VALUE_ACTION_TYPE));

const resetValue = (value, defaultValue) => {
    if (typeof value === "string") {
        return defaultValue !== null && defaultValue !== void 0 ? defaultValue : "";
    }
    else {
        return defaultValue !== null && defaultValue !== void 0 ? defaultValue : false;
    }
};
const initialUseFormReducerState = (prop) => (state) => {
    var _a;
    for (const key in prop.form) {
        const _p = prop.form[key];
        state.form = Object.assign(Object.assign({}, ((_a = state.form) !== null && _a !== void 0 ? _a : {})), { [key]: {
                element: {
                    name: key,
                    id: _p.id,
                    value: _p.defaultValue,
                },
                error: {
                    valid: true,
                },
                validationEvent: _p.validationEvent,
            } });
    }
    return state;
};
const useFormReducer = (state, action) => {
    switch (action.type) {
        case CHANGE_VALUE_ACTION_TYPE: {
            const { name, value, error } = action.payload;
            return Object.assign(Object.assign({}, state), { form: Object.assign(Object.assign({}, state.form), { [name]: Object.assign(Object.assign({}, state.form[name]), { element: Object.assign(Object.assign({}, state.form[name].element), { value }), error }) }) });
        }
        case RESET_VALUE_ACTION_TYPE: {
            const { name, defaultValue } = action.payload;
            return Object.assign(Object.assign({}, state), { form: Object.assign(Object.assign({}, state.form), { [name]: Object.assign(Object.assign({}, state.form[name]), { element: Object.assign(Object.assign({}, state.form[name].element), { value: resetValue(state.form[name].element.value, defaultValue) }), error: undefined }) }) });
        }
        case CHANGE_ERROR_ACTION_TYPE: {
            const { name, error } = action.payload;
            return Object.assign(Object.assign({}, state), { form: Object.assign(Object.assign({}, state.form), { [name]: Object.assign(Object.assign({}, state.form[name]), { error }) }) });
        }
        default:
            return state;
    }
};

const useFormState = (prop, initializedState = {}) => {
    const [state, dispatch] = useReducer((useFormReducer), initializedState, initialUseFormReducerState(prop));
    const handleValidateAll = () => {
        var _a, _b, _c;
        let isValid = true;
        for (const name in state.form) {
            const form = state.form[name];
            const result = (_c = (_b = (_a = prop.form[name]).validate) === null || _b === void 0 ? void 0 : _b.call(_a, form.element.value)) !== null && _c !== void 0 ? _c : {
                valid: true,
            };
            if (!result.valid) {
                dispatch(changeValueAction({
                    name,
                    value: form.element.value,
                    error: result,
                }));
                isValid = false;
            }
        }
        return isValid;
    };
    const handleChangeValue = (options) => (e) => {
        var _a, _b;
        const { value, name } = e.target;
        let error;
        if (options.useValidate) {
            error = (_b = (_a = prop.form[name]).validate) === null || _b === void 0 ? void 0 : _b.call(_a, value);
        }
        dispatch(changeValueAction({
            name,
            value,
            error,
        }));
    };
    const handleBlurWithValidation = (options) => (e) => {
        var _a, _b;
        if (!options.useValidate) {
            return;
        }
        const { value, name } = e.target;
        dispatch(changeErrorAction({
            name,
            error: (_b = (_a = prop.form[name]).validate) === null || _b === void 0 ? void 0 : _b.call(_a, value),
        }));
    };
    const handleSubmit = (e) => {
        var _a;
        e.preventDefault();
        if (prop.submitWithValidation && !handleValidateAll()) {
            return;
        }
        /**
         * [TODO]
         * 에러를 해결하기 위한 임시 작업으로 any를 사용한 부분을 고친다.
         */
        (_a = prop.submit) === null || _a === void 0 ? void 0 : _a.call(prop, state.form);
    };
    const handleReset = (name) => (defaultValue) => {
        dispatch(resetValueAction({ name: name, defaultValue }));
    };
    const handleChange = (name) => (value) => {
        dispatch(changeValueAction({ name: name, value }));
    };
    const result = Object.assign({}, state);
    for (const key in result.form) {
        const stateFormField = result.form[key];
        stateFormField.element.onBlur = handleBlurWithValidation({
            useValidate: stateFormField.validationEvent === "blur",
        });
        stateFormField.element.onChange = handleChangeValue({
            useValidate: stateFormField.validationEvent === "change",
        });
        stateFormField.reset = handleReset(key);
        stateFormField.change = handleChange(key);
    }
    // assign submit
    result.onSubmit = handleSubmit;
    return result;
};

const LIGHT_THEME = {
    GRID_MOBILE_COLUMNS: "4",
    GRID_MOBILE_GUTTER: "8px",
    GRID_MOBILE_MARGIN: "14px",
    GRID_TABLET_COLUMNS: "8",
    GRID_TABLET_GUTTER: "12px",
    GRID_TABLET_MARGIN: "22px",
    GRID_DESKTOP_COLUMNS: "12",
    GRID_DESKTOP_GUTTER: "16px",
    GRID_DESKTOP_MARGIN: "auto",
    RESPONSIVE_MOBILE: "768px",
    RESPONSIVE_TABLET: "1024px",
    RESPONSIVE_DESKTOP: "1280px",
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
    COLOR_PRIMARY_DEFAULT: "#6750A4",
    COLOR_PRIMARY_ON_DEFAULT: "#FFFFFF",
    COLOR_PRIMARY_CONTAINER: "#EADDFF",
    COLOR_PRIMARY_ON_CONTAINER: "#21005D",
    COLOR_SECONDARY_DEFAULT: "#625B71",
    COLOR_SECONDARY_ON_DEFAULT: "#FFFFFF",
    COLOR_SECONDARY_CONTAINER: "#E8DEF8",
    COLOR_SECONDARY_ON_CONTAINER: "#1D192B",
    COLOR_TERTIARY_DEFAULT: "#7D5260",
    COLOR_TERTIARY_ON_DEFAULT: "#FFFFFF",
    COLOR_TERTIARY_CONTAINER: "#FFD8E4",
    COLOR_TERTIARY_ON_CONTAINER: "#31111D",
    COLOR_ERROR_DEFAULT: "#B3261E",
    COLOR_ERROR_ON_DEFAULT: "#FFFFFF",
    COLOR_ERROR_CONTAINER: "#F9DEDC",
    COLOR_ERROR_ON_CONTAINER: "#410E0B",
    COLOR_BACKGROUND_DEFAULT: "#FFFFFF",
    COLOR_BACKGROUND_ON_DEFAULT: "#1C1B1F",
    COLOR_SURFACE_DEFAULT: "#FFFFFF",
    COLOR_SURFACE_ON_DEFAULT: "#1C1B1F",
    COLOR_SURFACE_VARIANT: "#E7E0EC",
    COLOR_SURFACE_ON_VARIANT: "#49454F",
    COLOR_OUTLINE_DEFAULT: "#79747E",
    COLOR_SUCCESS_DEFAULT: "#388E3C",
    COLOR_SUCCESS_ON_DEFAULT: "#FFFFFF",
    COLOR_SUCCESS_CONTAINER: "#C8E6C9",
    COLOR_SUCCESS_ON_CONTAINER: "#1B5E20",
    COLOR_WARNING_DEFAULT: "#F57C00",
    COLOR_WARNING_ON_DEFAULT: "#FFFFFF",
    COLOR_WARNING_CONTAINER: "#FFE0B2",
    COLOR_WARNING_ON_CONTAINER: "#E65100",
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

export { Button, Flex$1 as Flex, Form, GridLine, Input, LIGHT_THEME, Label, Link, Paragraph, Text, Title, useFormState, useMediaQuery };
//# sourceMappingURL=index.js.map
