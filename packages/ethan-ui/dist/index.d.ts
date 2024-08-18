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
    variant?: "primary" | "secondary" | "accent" | "success" | "warning" | "error" | "default";
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

type Platform = "mobile-portrait" | "mobile-landscape" | "tablet-portrait" | "tablet-landscape" | "desktop";

declare const useMediaQuery: () => Platform;

type PickCSSProperty<P extends keyof React.CSSProperties, V = React.CSSProperties[P]> = Extract<React.CSSProperties[P], V>;

type LayoutColumnNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type LayoutColumns = `col-${"mp" | "ml" | "tp" | "tl"}-${LayoutColumnNumber}` | `col-${LayoutColumnNumber}`;
type LayoutProps<Tag extends React.ElementType, Prop = {}> = {
    as?: Tag;
    column?: LayoutColumns | LayoutColumns[];
} & AliasingComponentAttributes<Tag> & Prop;
type AliasingComponentAttributes<Tag extends React.ElementType> = React.ComponentPropsWithoutRef<Tag>;

interface FlexProps extends React$1.HTMLAttributes<HTMLElement> {
    justify?: PickCSSProperty<"justifyContent", "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
    align?: PickCSSProperty<"alignItems", "flex-start" | "center" | "flex-end">;
    vertical?: boolean;
    reverse?: boolean;
    wrap?: boolean;
    gap?: boolean;
}
declare const Flex: <Tag extends React$1.ElementType>({ justify, align, vertical, reverse, gap, wrap, children, className, as, column, ...props }: LayoutProps<Tag, FlexProps>) => react_jsx_runtime.JSX.Element;

declare const LIGHT_THEME: {
    GRID_MOBILE_PORTRAIT_COLUMNS: string;
    GRID_MOBILE_PORTRAIT_GUTTER: string;
    GRID_MOBILE_PORTRAIT_MARGIN: string;
    GRID_MOBILE_LANDSCAPE_COLUMNS: string;
    GRID_MOBILE_LANDSCAPE_GUTTER: string;
    GRID_MOBILE_LANDSCAPE_MARGIN: string;
    GRID_TABLET_PORTRAIT_COLUMNS: string;
    GRID_TABLET_PORTRAIT_GUTTER: string;
    GRID_TABLET_PORTRAIT_MARGIN: string;
    GRID_TABLET_LANDSCAPE_COLUMNS: string;
    GRID_TABLET_LANDSCAPE_GUTTER: string;
    GRID_TABLET_LANDSCAPE_MARGIN: string;
    GRID_DESKTOP_COLUMNS: string;
    GRID_DESKTOP_GUTTER: string;
    GRID_DESKTOP_MARGIN: string;
    RESPONSIVE_MOBILE_PORTRAIT_MAX: string;
    RESPONSIVE_MOBILE_LANDSCAPE_MIN: string;
    RESPONSIVE_MOBILE_LANDSCAPE_MAX: string;
    RESPONSIVE_TABLET_PORTRAIT_MIN: string;
    RESPONSIVE_TABLET_PORTRAIT_MAX: string;
    RESPONSIVE_TABLET_LANDSCAPE_MIN: string;
    RESPONSIVE_TABLET_LANDSCAPE_MAX: string;
    RESPONSIVE_DESKTOP_MIN: string;
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
    COLOR_PRIMARY: string;
    COLOR_SECONDARY: string;
    COLOR_ACCENT: string;
    COLOR_SUCCESS: string;
    COLOR_WARNING: string;
    COLOR_ERROR: string;
    COLOR_TEXT: string;
    COLOR_BACKGROUND: string;
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

export { Button, type ButtonProps, Flex, type FlexProps, GridLine, LIGHT_THEME, Link, type LinkProps, Paragraph, type ParagraphProps, type PickCSSProperty, type Platform, Text, type TextProps, Title, type TitleProps, useMediaQuery };
