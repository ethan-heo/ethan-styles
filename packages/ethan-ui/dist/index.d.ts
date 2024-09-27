import React$1, { HTMLAttributes } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "default" | "text";
    danger?: boolean;
    disabled?: boolean;
    size?: "x-large" | "large" | "medium" | "small" | "x-small";
}
declare const Button: React$1.FC<ButtonProps>;

declare function GridLine(): react_jsx_runtime.JSX.Element;

interface TypographCommonProps {
    strong?: boolean;
    italic?: boolean;
    underline?: boolean;
    del?: boolean;
    mark?: boolean;
    variant?: "primary" | "secondary" | "tertiary" | "success" | "warning" | "error" | "default";
}

type Level = 1 | 2 | 3;
interface TitleProps extends TypographCommonProps, HTMLAttributes<HTMLHeadingElement> {
    level?: Level;
}
declare const Title: React$1.FC<TitleProps>;

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, TypographCommonProps {
}
declare const Paragraph: React$1.FC<ParagraphProps>;

interface TextProps extends HTMLAttributes<HTMLSpanElement>, TypographCommonProps {
}
declare const Text: React$1.FC<TextProps>;

interface LinkProps extends HTMLAttributes<HTMLAnchorElement>, TypographCommonProps {
    /**
     * HTMLAnchorElement가 global.d.ts를 바라보고 있는데 lib.dom.d.ts를 참조하지 않아 문제가 발생하고 있어 임의의로 아래 속성을 정의함.
     */
    rel?: string;
    href?: string;
    target?: string;
}
declare const Link: React$1.FC<LinkProps>;

interface CSSVariables {
    "--grid-mobile-columns": string;
    "--grid-mobile-gutter": string;
    "--grid-mobile-margin": string;
    "--grid-tablet-columns": string;
    "--grid-tablet-gutter": string;
    "--grid-tablet-margin": string;
    "--grid-desktop-columns": string;
    "--grid-desktop-gutter": string;
    "--grid-desktop-margin": string;
    "--responsive-mobile": string;
    "--responsive-tablet": string;
    "--responsive-desktop": string;
    "--font-size-extra-large": string;
    "--font-size-large": string;
    "--font-size-medium": string;
    "--font-size-small": string;
    "--font-size-extra-small": string;
    "--font-weight-thin": string;
    "--font-weight-extra-light": string;
    "--font-weight-light": string;
    "--font-weight-normal": string;
    "--font-weight-medium": string;
    "--font-weight-semi-bold": string;
    "--font-weight-bold": string;
    "--font-weight-extra-bold": string;
    "--font-weight-black": string;
    "--line-height-extra-large": string;
    "--line-height-large": string;
    "--line-height-medium": string;
    "--line-height-small": string;
    "--line-height-extra-small": string;
    "--color-primary-default": string;
    "--color-primary-on-default": string;
    "--color-primary-container": string;
    "--color-primary-on-container": string;
    "--color-secondary-default": string;
    "--color-secondary-on-default": string;
    "--color-secondary-container": string;
    "--color-secondary-on-container": string;
    "--color-tertiary-default": string;
    "--color-tertiary-on-default": string;
    "--color-tertiary-container": string;
    "--color-tertiary-on-container": string;
    "--color-error-default": string;
    "--color-error-on-default": string;
    "--color-error-container": string;
    "--color-error-on-container": string;
    "--color-background-default": string;
    "--color-background-on-default": string;
    "--color-surface-default": string;
    "--color-surface-on-default": string;
    "--color-surface-variant": string;
    "--color-surface-on-variant": string;
    "--color-outline-default": string;
    "--color-success-default": string;
    "--color-success-on-default": string;
    "--color-success-container": string;
    "--color-success-on-container": string;
    "--color-warning-default": string;
    "--color-warning-on-default": string;
    "--color-warning-container": string;
    "--color-warning-on-container": string;
    "--border-hidden-thin": string;
    "--border-hidden-medium": string;
    "--border-hidden-bold": string;
    "--border-hidden-black": string;
    "--border-dotted-thin": string;
    "--border-dotted-medium": string;
    "--border-dotted-bold": string;
    "--border-dotted-black": string;
    "--border-dashed-thin": string;
    "--border-dashed-medium": string;
    "--border-dashed-bold": string;
    "--border-dashed-black": string;
    "--border-double-thin": string;
    "--border-double-medium": string;
    "--border-double-bold": string;
    "--border-double-black": string;
    "--border-groove-thin": string;
    "--border-groove-medium": string;
    "--border-groove-bold": string;
    "--border-groove-black": string;
    "--border-ridge-thin": string;
    "--border-ridge-medium": string;
    "--border-ridge-bold": string;
    "--border-ridge-black": string;
    "--border-inset-thin": string;
    "--border-inset-medium": string;
    "--border-inset-bold": string;
    "--border-inset-black": string;
    "--border-outset-thin": string;
    "--border-outset-medium": string;
    "--border-outset-bold": string;
    "--border-outset-black": string;
    "--border-solid-thin": string;
    "--border-solid-medium": string;
    "--border-solid-bold": string;
    "--border-solid-black": string;
    "--border-radius-extra-large": string;
    "--border-radius-large": string;
    "--border-radius-medium": string;
    "--border-radius-small": string;
    "--border-radius-extra-small": string;
    "--border-radius-full": string;
    "--spacing-extra-large": string;
    "--spacing-large": string;
    "--spacing-medium": string;
    "--spacing-small": string;
    "--spacing-extra-small": string;
    "--shadow-top-left-large": string;
    "--shadow-top-left-medium": string;
    "--shadow-top-left-small": string;
    "--shadow-top-right-large": string;
    "--shadow-top-right-medium": string;
    "--shadow-top-right-small": string;
    "--shadow-bottom-left-large": string;
    "--shadow-bottom-left-medium": string;
    "--shadow-bottom-left-small": string;
    "--shadow-bottom-right-large": string;
    "--shadow-bottom-right-medium": string;
    "--shadow-bottom-right-small": string;
    "--font-family": string;
}

type ResponsivePlatform = "mobile" | "tablet" | "desktop";

type PickCSSProperty<P extends keyof React.CSSProperties, V = React.CSSProperties[P]> = Extract<React.CSSProperties[P], V>;

declare const useMediaQuery: () => ResponsivePlatform;

type ThemeType = "dark" | "light";

declare function useThemeSwitcher(themeType?: ThemeType): {
    change: (themeType: ThemeType) => void;
};

type LayoutColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type LayoutColumns = `col-${"m" | "t"}-${LayoutColumnNumber}` | `col-${LayoutColumnNumber}`;

interface FlexProps extends React$1.HTMLAttributes<HTMLElement> {
    justify?: PickCSSProperty<"justifyContent", "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
    align?: PickCSSProperty<"alignItems", "flex-start" | "center" | "flex-end">;
    vertical?: boolean;
    reverse?: boolean;
    wrap?: boolean;
    gap?: boolean;
}
declare const _default: ({ column, className, ...props }: {
    as?: React$1.ElementType<any, keyof React$1.JSX.IntrinsicElements> | undefined;
} & Omit<any, "ref"> & {
    column?: LayoutColumns | LayoutColumns[];
    className?: string;
}) => react_jsx_runtime.JSX.Element;

type FormFontSize = "x-large" | "large" | "medium" | "small" | "x-small";
interface FormCommonProps {
    fontSize?: FormFontSize;
    invalid?: boolean;
}

interface LabelProps extends React$1.LabelHTMLAttributes<HTMLElement>, FormCommonProps {
}
declare const Label: ({ fontSize, invalid, className, ...props }: LabelProps) => react_jsx_runtime.JSX.Element;

/**
 * [Requirement]
 * 1. 텍스트 크기 조절
 * [Design]
 * 1. 에러
 * 2. 기본 스타일
 */

interface InputProps extends React$1.InputHTMLAttributes<HTMLInputElement>, FormCommonProps {
}
declare const Input: React$1.FC<InputProps>;

/**
 * [Requirements]
 * 1. submit 관리 method[get, post], preventDefault
 */

interface FormProps extends React$1.FormHTMLAttributes<HTMLFormElement> {
}
declare const Form: React$1.FC<FormProps>;

type ValidationEvent = "change" | "blur";
type ParamsFormField<T = any> = {
    id: string;
    defaultValue: T;
    validationEvent?: ValidationEvent;
    validate?: (value: T) => FormStateValidateResult;
};
type ParamsForm<T = any> = {
    [K in keyof T]: ParamsFormField<T[K]>;
};
type Params<T> = {
    form: ParamsForm<T>;
    submitWithValidation?: boolean;
    submit?: (stateForm: State<Params<T>["form"]>["form"]) => void;
};
type State<T extends Params<any>["form"]> = {
    form: {
        [K in keyof T]: {
            element: {
                name: K;
                id: T[K]["id"];
                value: T[K]["defaultValue"];
                onChange: (e: React.ChangeEvent<HTMLElement>) => void;
                onBlur: (e: React.ChangeEvent<HTMLElement>) => void;
            };
            validationEvent: ValidationEvent;
            error?: T[K]["validate"] extends (args: any[]) => void ? ReturnType<T[K]["validate"]> : undefined;
            reset: (value?: T[K]["defaultValue"]) => void;
            change: (value: T[K]["defaultValue"]) => void;
        };
    };
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
interface FormStateValidateResult {
    msg?: string;
    valid: boolean;
}

declare const useFormState: <P extends Params<any>, S extends State<P["form"]>>(prop: P, initializedState?: S) => S;

declare const THEME: {
    readonly GRID_MOBILE_COLUMNS: "var(--grid-mobile-columns)";
    readonly GRID_MOBILE_GUTTER: "var(--grid-mobile-gutter)";
    readonly GRID_MOBILE_MARGIN: "var(--grid-mobile-margin)";
    readonly GRID_TABLET_COLUMNS: "var(--grid-tablet-columns)";
    readonly GRID_TABLET_GUTTER: "var(--grid-tablet-gutter)";
    readonly GRID_TABLET_MARGIN: "var(--grid-tablet-margin)";
    readonly GRID_DESKTOP_COLUMNS: "var(--grid-desktop-columns)";
    readonly GRID_DESKTOP_GUTTER: "var(--grid-desktop-gutter)";
    readonly GRID_DESKTOP_MARGIN: "var(--grid-desktop-margin)";
    readonly RESPONSIVE_MOBILE: "var(--responsive-mobile)";
    readonly RESPONSIVE_TABLET: "var(--responsive-tablet)";
    readonly RESPONSIVE_DESKTOP: "var(--responsive-desktop)";
    readonly FONT_SIZE_EXTRA_LARGE: "var(--font-size-extra-large)";
    readonly FONT_SIZE_LARGE: "var(--font-size-large)";
    readonly FONT_SIZE_MEDIUM: "var(--font-size-medium)";
    readonly FONT_SIZE_SMALL: "var(--font-size-small)";
    readonly FONT_SIZE_EXTRA_SMALL: "var(--font-size-extra-small)";
    readonly FONT_WEIGHT_THIN: "var(--font-weight-thin)";
    readonly FONT_WEIGHT_EXTRA_LIGHT: "var(--font-weight-extra-light)";
    readonly FONT_WEIGHT_LIGHT: "var(--font-weight-light)";
    readonly FONT_WEIGHT_NORMAL: "var(--font-weight-normal)";
    readonly FONT_WEIGHT_MEDIUM: "var(--font-weight-medium)";
    readonly FONT_WEIGHT_SEMI_BOLD: "var(--font-weight-semi-bold)";
    readonly FONT_WEIGHT_BOLD: "var(--font-weight-bold)";
    readonly FONT_WEIGHT_EXTRA_BOLD: "var(--font-weight-extra-bold)";
    readonly FONT_WEIGHT_BLACK: "var(--font-weight-black)";
    readonly LINE_HEIGHT_EXTRA_LARGE: "var(--line-height-extra-large)";
    readonly LINE_HEIGHT_LARGE: "var(--line-height-large)";
    readonly LINE_HEIGHT_MEDIUM: "var(--line-height-medium)";
    readonly LINE_HEIGHT_SMALL: "var(--line-height-small)";
    readonly LINE_HEIGHT_EXTRA_SMALL: "var(--line-height-extra-small)";
    readonly COLOR_PRIMARY_DEFAULT: "var(--color-primary-default)";
    readonly COLOR_PRIMARY_ON_DEFAULT: "var(--color-primary-on-default)";
    readonly COLOR_PRIMARY_CONTAINER: "var(--color-primary-container)";
    readonly COLOR_PRIMARY_ON_CONTAINER: "var(--color-primary-on-container)";
    readonly COLOR_SECONDARY_DEFAULT: "var(--color-secondary-default)";
    readonly COLOR_SECONDARY_ON_DEFAULT: "var(--color-secondary-on-default)";
    readonly COLOR_SECONDARY_CONTAINER: "var(--color-secondary-container)";
    readonly COLOR_SECONDARY_ON_CONTAINER: "var(--color-secondary-on-container)";
    readonly COLOR_TERTIARY_DEFAULT: "var(--color-tertiary-default)";
    readonly COLOR_TERTIARY_ON_DEFAULT: "var(--color-tertiary-on-default)";
    readonly COLOR_TERTIARY_CONTAINER: "var(--color-tertiary-container)";
    readonly COLOR_TERTIARY_ON_CONTAINER: "var(--color-tertiary-on-container)";
    readonly COLOR_ERROR_DEFAULT: "var(--color-error-default)";
    readonly COLOR_ERROR_ON_DEFAULT: "var(--color-error-on-default)";
    readonly COLOR_ERROR_CONTAINER: "var(--color-error-container)";
    readonly COLOR_ERROR_ON_CONTAINER: "var(--color-error-on-container)";
    readonly COLOR_BACKGROUND_DEFAULT: "var(--color-background-default)";
    readonly COLOR_BACKGROUND_ON_DEFAULT: "var(--color-background-on-default)";
    readonly COLOR_SURFACE_DEFAULT: "var(--color-surface-default)";
    readonly COLOR_SURFACE_ON_DEFAULT: "var(--color-surface-on-default)";
    readonly COLOR_SURFACE_VARIANT: "var(--color-surface-variant)";
    readonly COLOR_SURFACE_ON_VARIANT: "var(--color-surface-on-variant)";
    readonly COLOR_OUTLINE_DEFAULT: "var(--color-outline-default)";
    readonly COLOR_SUCCESS_DEFAULT: "var(--color-success-default)";
    readonly COLOR_SUCCESS_ON_DEFAULT: "var(--color-success-on-default)";
    readonly COLOR_SUCCESS_CONTAINER: "var(--color-success-container)";
    readonly COLOR_SUCCESS_ON_CONTAINER: "var(--color-success-on-container)";
    readonly COLOR_WARNING_DEFAULT: "var(--color-warning-default)";
    readonly COLOR_WARNING_ON_DEFAULT: "var(--color-warning-on-default)";
    readonly COLOR_WARNING_CONTAINER: "var(--color-warning-container)";
    readonly COLOR_WARNING_ON_CONTAINER: "var(--color-warning-on-container)";
    readonly BORDER_HIDDEN_THIN: "var(--border-hidden-thin)";
    readonly BORDER_HIDDEN_MEDIUM: "var(--border-hidden-medium)";
    readonly BORDER_HIDDEN_BOLD: "var(--border-hidden-bold)";
    readonly BORDER_HIDDEN_BLACK: "var(--border-hidden-black)";
    readonly BORDER_DOTTED_THIN: "var(--border-dotted-thin)";
    readonly BORDER_DOTTED_MEDIUM: "var(--border-dotted-medium)";
    readonly BORDER_DOTTED_BOLD: "var(--border-dotted-bold)";
    readonly BORDER_DOTTED_BLACK: "var(--border-dotted-black)";
    readonly BORDER_DASHED_THIN: "var(--border-dashed-thin)";
    readonly BORDER_DASHED_MEDIUM: "var(--border-dashed-medium)";
    readonly BORDER_DASHED_BOLD: "var(--border-dashed-bold)";
    readonly BORDER_DASHED_BLACK: "var(--border-dashed-black)";
    readonly BORDER_DOUBLE_THIN: "var(--border-double-thin)";
    readonly BORDER_DOUBLE_MEDIUM: "var(--border-double-medium)";
    readonly BORDER_DOUBLE_BOLD: "var(--border-double-bold)";
    readonly BORDER_DOUBLE_BLACK: "var(--border-double-black)";
    readonly BORDER_GROOVE_THIN: "var(--border-groove-thin)";
    readonly BORDER_GROOVE_MEDIUM: "var(--border-groove-medium)";
    readonly BORDER_GROOVE_BOLD: "var(--border-groove-bold)";
    readonly BORDER_GROOVE_BLACK: "var(--border-groove-black)";
    readonly BORDER_RIDGE_THIN: "var(--border-ridge-thin)";
    readonly BORDER_RIDGE_MEDIUM: "var(--border-ridge-medium)";
    readonly BORDER_RIDGE_BOLD: "var(--border-ridge-bold)";
    readonly BORDER_RIDGE_BLACK: "var(--border-ridge-black)";
    readonly BORDER_INSET_THIN: "var(--border-inset-thin)";
    readonly BORDER_INSET_MEDIUM: "var(--border-inset-medium)";
    readonly BORDER_INSET_BOLD: "var(--border-inset-bold)";
    readonly BORDER_INSET_BLACK: "var(--border-inset-black)";
    readonly BORDER_OUTSET_THIN: "var(--border-outset-thin)";
    readonly BORDER_OUTSET_MEDIUM: "var(--border-outset-medium)";
    readonly BORDER_OUTSET_BOLD: "var(--border-outset-bold)";
    readonly BORDER_OUTSET_BLACK: "var(--border-outset-black)";
    readonly BORDER_SOLID_THIN: "var(--border-solid-thin)";
    readonly BORDER_SOLID_MEDIUM: "var(--border-solid-medium)";
    readonly BORDER_SOLID_BOLD: "var(--border-solid-bold)";
    readonly BORDER_SOLID_BLACK: "var(--border-solid-black)";
    readonly BORDER_RADIUS_EXTRA_LARGE: "var(--border-radius-extra-large)";
    readonly BORDER_RADIUS_LARGE: "var(--border-radius-large)";
    readonly BORDER_RADIUS_MEDIUM: "var(--border-radius-medium)";
    readonly BORDER_RADIUS_SMALL: "var(--border-radius-small)";
    readonly BORDER_RADIUS_EXTRA_SMALL: "var(--border-radius-extra-small)";
    readonly BORDER_RADIUS_FULL: "var(--border-radius-full)";
    readonly SPACING_EXTRA_LARGE: "var(--spacing-extra-large)";
    readonly SPACING_LARGE: "var(--spacing-large)";
    readonly SPACING_MEDIUM: "var(--spacing-medium)";
    readonly SPACING_SMALL: "var(--spacing-small)";
    readonly SPACING_EXTRA_SMALL: "var(--spacing-extra-small)";
    readonly SHADOW_TOP_LEFT_LARGE: "var(--shadow-top-left-large)";
    readonly SHADOW_TOP_LEFT_MEDIUM: "var(--shadow-top-left-medium)";
    readonly SHADOW_TOP_LEFT_SMALL: "var(--shadow-top-left-small)";
    readonly SHADOW_TOP_RIGHT_LARGE: "var(--shadow-top-right-large)";
    readonly SHADOW_TOP_RIGHT_MEDIUM: "var(--shadow-top-right-medium)";
    readonly SHADOW_TOP_RIGHT_SMALL: "var(--shadow-top-right-small)";
    readonly SHADOW_BOTTOM_LEFT_LARGE: "var(--shadow-bottom-left-large)";
    readonly SHADOW_BOTTOM_LEFT_MEDIUM: "var(--shadow-bottom-left-medium)";
    readonly SHADOW_BOTTOM_LEFT_SMALL: "var(--shadow-bottom-left-small)";
    readonly SHADOW_BOTTOM_RIGHT_LARGE: "var(--shadow-bottom-right-large)";
    readonly SHADOW_BOTTOM_RIGHT_MEDIUM: "var(--shadow-bottom-right-medium)";
    readonly SHADOW_BOTTOM_RIGHT_SMALL: "var(--shadow-bottom-right-small)";
    readonly FONT_FAMILY: "var(--font-family)";
};

export { Button, type ButtonProps, type CSSVariables, _default as Flex, type FlexProps, Form, type FormProps, GridLine, Input, type InputProps, Label, type LabelProps, Link, type LinkProps, Paragraph, type ParagraphProps, type PickCSSProperty, type ResponsivePlatform, THEME, Text, type TextProps, Title, type TitleProps, useFormState, useMediaQuery, useThemeSwitcher };
