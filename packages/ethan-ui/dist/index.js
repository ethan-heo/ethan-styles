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
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
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

var _ThemeStorage_themeType, _ThemeStorage_STORAGE_THEME_KEY;
class ThemeStorage {
    constructor(themeType) {
        _ThemeStorage_themeType.set(this, void 0);
        _ThemeStorage_STORAGE_THEME_KEY.set(this, "theme");
        __classPrivateFieldSet(this, _ThemeStorage_themeType, themeType !== null && themeType !== void 0 ? themeType : this.read(), "f");
    }
    getThemeType() {
        return __classPrivateFieldGet(this, _ThemeStorage_themeType, "f");
    }
    setThemeType(themeType) {
        this.write(themeType);
    }
    write(themeType) {
        localStorage.setItem(__classPrivateFieldGet(this, _ThemeStorage_STORAGE_THEME_KEY, "f"), themeType);
        __classPrivateFieldSet(this, _ThemeStorage_themeType, themeType, "f");
    }
    read() {
        return this.readStorageTheme() || this.readSystemTheme();
    }
    readStorageTheme() {
        return localStorage.getItem(__classPrivateFieldGet(this, _ThemeStorage_STORAGE_THEME_KEY, "f"));
    }
    readSystemTheme() {
        if (window.matchMedia("(prefers-color-scheme: dark)")) {
            return "dark";
        }
        else {
            return "light";
        }
    }
}
_ThemeStorage_themeType = new WeakMap(), _ThemeStorage_STORAGE_THEME_KEY = new WeakMap();

var _ThemeSwitcher_el, _ThemeSwitcher_storage;
class ThemeSwitcher {
    constructor(options) {
        var _a;
        _ThemeSwitcher_el.set(this, void 0);
        _ThemeSwitcher_storage.set(this, void 0);
        __classPrivateFieldSet(this, _ThemeSwitcher_storage, new ThemeStorage(options === null || options === void 0 ? void 0 : options.themeType), "f");
        __classPrivateFieldSet(this, _ThemeSwitcher_el, (_a = options === null || options === void 0 ? void 0 : options.el) !== null && _a !== void 0 ? _a : document.body, "f");
        __classPrivateFieldGet(this, _ThemeSwitcher_el, "f").classList.add(this.transformThemeType(__classPrivateFieldGet(this, _ThemeSwitcher_storage, "f").getThemeType()));
    }
    change(themeType) {
        __classPrivateFieldGet(this, _ThemeSwitcher_el, "f").classList.remove(this.transformThemeType(__classPrivateFieldGet(this, _ThemeSwitcher_storage, "f").getThemeType()));
        __classPrivateFieldGet(this, _ThemeSwitcher_el, "f").classList.add(this.transformThemeType(themeType));
        __classPrivateFieldGet(this, _ThemeSwitcher_storage, "f").setThemeType(themeType);
    }
    transformThemeType(themeType) {
        return `theme--${themeType}`;
    }
}
_ThemeSwitcher_el = new WeakMap(), _ThemeSwitcher_storage = new WeakMap();

function useThemeSwitcher(themeType = "light") {
    const themeSwitcher = useRef(new ThemeSwitcher({ themeType })).current;
    return {
        change: (themeType) => {
            themeSwitcher.change(themeType);
        },
    };
}

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

const THEME = {
    GRID_MOBILE_COLUMNS: "var(--grid-mobile-columns)",
    GRID_MOBILE_GUTTER: "var(--grid-mobile-gutter)",
    GRID_MOBILE_MARGIN: "var(--grid-mobile-margin)",
    GRID_TABLET_COLUMNS: "var(--grid-tablet-columns)",
    GRID_TABLET_GUTTER: "var(--grid-tablet-gutter)",
    GRID_TABLET_MARGIN: "var(--grid-tablet-margin)",
    GRID_DESKTOP_COLUMNS: "var(--grid-desktop-columns)",
    GRID_DESKTOP_GUTTER: "var(--grid-desktop-gutter)",
    GRID_DESKTOP_MARGIN: "var(--grid-desktop-margin)",
    RESPONSIVE_MOBILE: "var(--responsive-mobile)",
    RESPONSIVE_TABLET: "var(--responsive-tablet)",
    RESPONSIVE_DESKTOP: "var(--responsive-desktop)",
    FONT_SIZE_EXTRA_LARGE: "var(--font-size-extra-large)",
    FONT_SIZE_LARGE: "var(--font-size-large)",
    FONT_SIZE_MEDIUM: "var(--font-size-medium)",
    FONT_SIZE_SMALL: "var(--font-size-small)",
    FONT_SIZE_EXTRA_SMALL: "var(--font-size-extra-small)",
    FONT_WEIGHT_THIN: "var(--font-weight-thin)",
    FONT_WEIGHT_EXTRA_LIGHT: "var(--font-weight-extra-light)",
    FONT_WEIGHT_LIGHT: "var(--font-weight-light)",
    FONT_WEIGHT_NORMAL: "var(--font-weight-normal)",
    FONT_WEIGHT_MEDIUM: "var(--font-weight-medium)",
    FONT_WEIGHT_SEMI_BOLD: "var(--font-weight-semi-bold)",
    FONT_WEIGHT_BOLD: "var(--font-weight-bold)",
    FONT_WEIGHT_EXTRA_BOLD: "var(--font-weight-extra-bold)",
    FONT_WEIGHT_BLACK: "var(--font-weight-black)",
    LINE_HEIGHT_EXTRA_LARGE: "var(--line-height-extra-large)",
    LINE_HEIGHT_LARGE: "var(--line-height-large)",
    LINE_HEIGHT_MEDIUM: "var(--line-height-medium)",
    LINE_HEIGHT_SMALL: "var(--line-height-small)",
    LINE_HEIGHT_EXTRA_SMALL: "var(--line-height-extra-small)",
    COLOR_PRIMARY_DEFAULT: "var(--color-primary-default)",
    COLOR_PRIMARY_ON_DEFAULT: "var(--color-primary-on-default)",
    COLOR_PRIMARY_CONTAINER: "var(--color-primary-container)",
    COLOR_PRIMARY_ON_CONTAINER: "var(--color-primary-on-container)",
    COLOR_SECONDARY_DEFAULT: "var(--color-secondary-default)",
    COLOR_SECONDARY_ON_DEFAULT: "var(--color-secondary-on-default)",
    COLOR_SECONDARY_CONTAINER: "var(--color-secondary-container)",
    COLOR_SECONDARY_ON_CONTAINER: "var(--color-secondary-on-container)",
    COLOR_TERTIARY_DEFAULT: "var(--color-tertiary-default)",
    COLOR_TERTIARY_ON_DEFAULT: "var(--color-tertiary-on-default)",
    COLOR_TERTIARY_CONTAINER: "var(--color-tertiary-container)",
    COLOR_TERTIARY_ON_CONTAINER: "var(--color-tertiary-on-container)",
    COLOR_ERROR_DEFAULT: "var(--color-error-default)",
    COLOR_ERROR_ON_DEFAULT: "var(--color-error-on-default)",
    COLOR_ERROR_CONTAINER: "var(--color-error-container)",
    COLOR_ERROR_ON_CONTAINER: "var(--color-error-on-container)",
    COLOR_BACKGROUND_DEFAULT: "var(--color-background-default)",
    COLOR_BACKGROUND_ON_DEFAULT: "var(--color-background-on-default)",
    COLOR_SURFACE_DEFAULT: "var(--color-surface-default)",
    COLOR_SURFACE_ON_DEFAULT: "var(--color-surface-on-default)",
    COLOR_SURFACE_VARIANT: "var(--color-surface-variant)",
    COLOR_SURFACE_ON_VARIANT: "var(--color-surface-on-variant)",
    COLOR_OUTLINE_DEFAULT: "var(--color-outline-default)",
    COLOR_SUCCESS_DEFAULT: "var(--color-success-default)",
    COLOR_SUCCESS_ON_DEFAULT: "var(--color-success-on-default)",
    COLOR_SUCCESS_CONTAINER: "var(--color-success-container)",
    COLOR_SUCCESS_ON_CONTAINER: "var(--color-success-on-container)",
    COLOR_WARNING_DEFAULT: "var(--color-warning-default)",
    COLOR_WARNING_ON_DEFAULT: "var(--color-warning-on-default)",
    COLOR_WARNING_CONTAINER: "var(--color-warning-container)",
    COLOR_WARNING_ON_CONTAINER: "var(--color-warning-on-container)",
    BORDER_HIDDEN_THIN: "var(--border-hidden-thin)",
    BORDER_HIDDEN_MEDIUM: "var(--border-hidden-medium)",
    BORDER_HIDDEN_BOLD: "var(--border-hidden-bold)",
    BORDER_HIDDEN_BLACK: "var(--border-hidden-black)",
    BORDER_DOTTED_THIN: "var(--border-dotted-thin)",
    BORDER_DOTTED_MEDIUM: "var(--border-dotted-medium)",
    BORDER_DOTTED_BOLD: "var(--border-dotted-bold)",
    BORDER_DOTTED_BLACK: "var(--border-dotted-black)",
    BORDER_DASHED_THIN: "var(--border-dashed-thin)",
    BORDER_DASHED_MEDIUM: "var(--border-dashed-medium)",
    BORDER_DASHED_BOLD: "var(--border-dashed-bold)",
    BORDER_DASHED_BLACK: "var(--border-dashed-black)",
    BORDER_DOUBLE_THIN: "var(--border-double-thin)",
    BORDER_DOUBLE_MEDIUM: "var(--border-double-medium)",
    BORDER_DOUBLE_BOLD: "var(--border-double-bold)",
    BORDER_DOUBLE_BLACK: "var(--border-double-black)",
    BORDER_GROOVE_THIN: "var(--border-groove-thin)",
    BORDER_GROOVE_MEDIUM: "var(--border-groove-medium)",
    BORDER_GROOVE_BOLD: "var(--border-groove-bold)",
    BORDER_GROOVE_BLACK: "var(--border-groove-black)",
    BORDER_RIDGE_THIN: "var(--border-ridge-thin)",
    BORDER_RIDGE_MEDIUM: "var(--border-ridge-medium)",
    BORDER_RIDGE_BOLD: "var(--border-ridge-bold)",
    BORDER_RIDGE_BLACK: "var(--border-ridge-black)",
    BORDER_INSET_THIN: "var(--border-inset-thin)",
    BORDER_INSET_MEDIUM: "var(--border-inset-medium)",
    BORDER_INSET_BOLD: "var(--border-inset-bold)",
    BORDER_INSET_BLACK: "var(--border-inset-black)",
    BORDER_OUTSET_THIN: "var(--border-outset-thin)",
    BORDER_OUTSET_MEDIUM: "var(--border-outset-medium)",
    BORDER_OUTSET_BOLD: "var(--border-outset-bold)",
    BORDER_OUTSET_BLACK: "var(--border-outset-black)",
    BORDER_SOLID_THIN: "var(--border-solid-thin)",
    BORDER_SOLID_MEDIUM: "var(--border-solid-medium)",
    BORDER_SOLID_BOLD: "var(--border-solid-bold)",
    BORDER_SOLID_BLACK: "var(--border-solid-black)",
    BORDER_RADIUS_EXTRA_LARGE: "var(--border-radius-extra-large)",
    BORDER_RADIUS_LARGE: "var(--border-radius-large)",
    BORDER_RADIUS_MEDIUM: "var(--border-radius-medium)",
    BORDER_RADIUS_SMALL: "var(--border-radius-small)",
    BORDER_RADIUS_EXTRA_SMALL: "var(--border-radius-extra-small)",
    BORDER_RADIUS_FULL: "var(--border-radius-full)",
    SPACING_EXTRA_LARGE: "var(--spacing-extra-large)",
    SPACING_LARGE: "var(--spacing-large)",
    SPACING_MEDIUM: "var(--spacing-medium)",
    SPACING_SMALL: "var(--spacing-small)",
    SPACING_EXTRA_SMALL: "var(--spacing-extra-small)",
    SHADOW_TOP_LEFT_LARGE: "var(--shadow-top-left-large)",
    SHADOW_TOP_LEFT_MEDIUM: "var(--shadow-top-left-medium)",
    SHADOW_TOP_LEFT_SMALL: "var(--shadow-top-left-small)",
    SHADOW_TOP_RIGHT_LARGE: "var(--shadow-top-right-large)",
    SHADOW_TOP_RIGHT_MEDIUM: "var(--shadow-top-right-medium)",
    SHADOW_TOP_RIGHT_SMALL: "var(--shadow-top-right-small)",
    SHADOW_BOTTOM_LEFT_LARGE: "var(--shadow-bottom-left-large)",
    SHADOW_BOTTOM_LEFT_MEDIUM: "var(--shadow-bottom-left-medium)",
    SHADOW_BOTTOM_LEFT_SMALL: "var(--shadow-bottom-left-small)",
    SHADOW_BOTTOM_RIGHT_LARGE: "var(--shadow-bottom-right-large)",
    SHADOW_BOTTOM_RIGHT_MEDIUM: "var(--shadow-bottom-right-medium)",
    SHADOW_BOTTOM_RIGHT_SMALL: "var(--shadow-bottom-right-small)",
    FONT_FAMILY: "var(--font-family)",
};

export { Button, Flex$1 as Flex, Form, GridLine, Input, Label, Link, Paragraph, THEME, Text, Title, useFormState, useMediaQuery, useThemeSwitcher };
//# sourceMappingURL=index.js.map
