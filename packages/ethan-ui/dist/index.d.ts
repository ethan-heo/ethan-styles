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

declare const LIGHT_THEME: {
    GRID_MOBILE_COLUMNS: string;
    GRID_MOBILE_GUTTER: string;
    GRID_MOBILE_MARGIN: string;
    GRID_TABLET_COLUMNS: string;
    GRID_TABLET_GUTTER: string;
    GRID_TABLET_MARGIN: string;
    GRID_DESKTOP_COLUMNS: string;
    GRID_DESKTOP_GUTTER: string;
    GRID_DESKTOP_MARGIN: string;
    RESPONSIVE_MOBILE: string;
    RESPONSIVE_TABLET: string;
    RESPONSIVE_DESKTOP: string;
    FONT_SIZE_EXTRA_LARGE: string;
    FONT_SIZE_LARGE: string;
    FONT_SIZE_MEDIUM: string;
    FONT_SIZE_SMALL: string;
    FONT_SIZE_EXTRA_SMALL: string;
    FONT_WEIGHT_THIN: string;
    FONT_WEIGHT_EXTRA_LIGHT: string;
    FONT_WEIGHT_LIGHT: string;
    FONT_WEIGHT_NORMAL: string;
    FONT_WEIGHT_MEDIUM: string;
    FONT_WEIGHT_SEMI_BOLD: string;
    FONT_WEIGHT_BOLD: string;
    FONT_WEIGHT_EXTRA_BOLD: string;
    FONT_WEIGHT_BLACK: string;
    LINE_HEIGHT_EXTRA_LARGE: string;
    LINE_HEIGHT_LARGE: string;
    LINE_HEIGHT_MEDIUM: string;
    LINE_HEIGHT_SMALL: string;
    LINE_HEIGHT_EXTRA_SMALL: string;
    COLOR_PRIMARY_DEFAULT: string;
    COLOR_PRIMARY_ON_DEFAULT: string;
    COLOR_PRIMARY_CONTAINER: string;
    COLOR_PRIMARY_ON_CONTAINER: string;
    COLOR_SECONDARY_DEFAULT: string;
    COLOR_SECONDARY_ON_DEFAULT: string;
    COLOR_SECONDARY_CONTAINER: string;
    COLOR_SECONDARY_ON_CONTAINER: string;
    COLOR_TERTIARY_DEFAULT: string;
    COLOR_TERTIARY_ON_DEFAULT: string;
    COLOR_TERTIARY_CONTAINER: string;
    COLOR_TERTIARY_ON_CONTAINER: string;
    COLOR_ERROR_DEFAULT: string;
    COLOR_ERROR_ON_DEFAULT: string;
    COLOR_ERROR_CONTAINER: string;
    COLOR_ERROR_ON_CONTAINER: string;
    COLOR_BACKGROUND_DEFAULT: string;
    COLOR_BACKGROUND_ON_DEFAULT: string;
    COLOR_SURFACE_DEFAULT: string;
    COLOR_SURFACE_ON_DEFAULT: string;
    COLOR_SURFACE_VARIANT: string;
    COLOR_SURFACE_ON_VARIANT: string;
    COLOR_OUTLINE_DEFAULT: string;
    COLOR_SUCCESS_DEFAULT: string;
    COLOR_SUCCESS_ON_DEFAULT: string;
    COLOR_SUCCESS_CONTAINER: string;
    COLOR_SUCCESS_ON_CONTAINER: string;
    COLOR_WARNING_DEFAULT: string;
    COLOR_WARNING_ON_DEFAULT: string;
    COLOR_WARNING_CONTAINER: string;
    COLOR_WARNING_ON_CONTAINER: string;
    BORDER_HIDDEN_THIN: string;
    BORDER_HIDDEN_MEDIUM: string;
    BORDER_HIDDEN_BOLD: string;
    BORDER_HIDDEN_BLACK: string;
    BORDER_DOTTED_THIN: string;
    BORDER_DOTTED_MEDIUM: string;
    BORDER_DOTTED_BOLD: string;
    BORDER_DOTTED_BLACK: string;
    BORDER_DASHED_THIN: string;
    BORDER_DASHED_MEDIUM: string;
    BORDER_DASHED_BOLD: string;
    BORDER_DASHED_BLACK: string;
    BORDER_DOUBLE_THIN: string;
    BORDER_DOUBLE_MEDIUM: string;
    BORDER_DOUBLE_BOLD: string;
    BORDER_DOUBLE_BLACK: string;
    BORDER_GROOVE_THIN: string;
    BORDER_GROOVE_MEDIUM: string;
    BORDER_GROOVE_BOLD: string;
    BORDER_GROOVE_BLACK: string;
    BORDER_RIDGE_THIN: string;
    BORDER_RIDGE_MEDIUM: string;
    BORDER_RIDGE_BOLD: string;
    BORDER_RIDGE_BLACK: string;
    BORDER_INSET_THIN: string;
    BORDER_INSET_MEDIUM: string;
    BORDER_INSET_BOLD: string;
    BORDER_INSET_BLACK: string;
    BORDER_OUTSET_THIN: string;
    BORDER_OUTSET_MEDIUM: string;
    BORDER_OUTSET_BOLD: string;
    BORDER_OUTSET_BLACK: string;
    BORDER_SOLID_THIN: string;
    BORDER_SOLID_MEDIUM: string;
    BORDER_SOLID_BOLD: string;
    BORDER_SOLID_BLACK: string;
    BORDER_RADIUS_EXTRA_LARGE: string;
    BORDER_RADIUS_LARGE: string;
    BORDER_RADIUS_MEDIUM: string;
    BORDER_RADIUS_SMALL: string;
    BORDER_RADIUS_EXTRA_SMALL: string;
    BORDER_RADIUS_FULL: string;
    SPACING_EXTRA_LARGE: string;
    SPACING_LARGE: string;
    SPACING_MEDIUM: string;
    SPACING_SMALL: string;
    SPACING_EXTRA_SMALL: string;
    SHADOW_TOP_LEFT_LARGE: string;
    SHADOW_TOP_LEFT_MEDIUM: string;
    SHADOW_TOP_LEFT_SMALL: string;
    SHADOW_TOP_RIGHT_LARGE: string;
    SHADOW_TOP_RIGHT_MEDIUM: string;
    SHADOW_TOP_RIGHT_SMALL: string;
    SHADOW_BOTTOM_LEFT_LARGE: string;
    SHADOW_BOTTOM_LEFT_MEDIUM: string;
    SHADOW_BOTTOM_LEFT_SMALL: string;
    SHADOW_BOTTOM_RIGHT_LARGE: string;
    SHADOW_BOTTOM_RIGHT_MEDIUM: string;
    SHADOW_BOTTOM_RIGHT_SMALL: string;
    FONT_FAMILY: string;
};

export { Button, type ButtonProps, type CSSVariables, _default as Flex, type FlexProps, Form, type FormProps, GridLine, Input, type InputProps, LIGHT_THEME, Label, type LabelProps, Link, type LinkProps, Paragraph, type ParagraphProps, type PickCSSProperty, type ResponsivePlatform, Text, type TextProps, Title, type TitleProps, useFormState, useMediaQuery };
