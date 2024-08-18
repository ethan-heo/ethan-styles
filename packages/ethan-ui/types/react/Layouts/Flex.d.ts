import React from "react";
import { PickCSSProperty } from "../../types/utils";
import { LayoutProps } from "./Layouts.types";
import "./Flex.styles.css";
import "./Layouts.styles.css";
export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    justify?: PickCSSProperty<"justifyContent", "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
    align?: PickCSSProperty<"alignItems", "flex-start" | "center" | "flex-end">;
    vertical?: boolean;
    reverse?: boolean;
    wrap?: boolean;
    gap?: boolean;
}
declare const Flex: <Tag extends React.ElementType>({ justify, align, vertical, reverse, gap, wrap, children, className, as, column, ...props }: LayoutProps<Tag, FlexProps>) => import("react/jsx-runtime").JSX.Element;
export default Flex;
