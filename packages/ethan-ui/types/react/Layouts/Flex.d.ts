import React from "react";
import "./Flex.styles.css";
export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    justify?: PickCSSProperty<"justifyContent", "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
    align?: PickCSSProperty<"alignItems", "flex-start" | "center" | "flex-end">;
    vertical?: boolean;
    reverse?: boolean;
    wrap?: boolean;
    gap?: boolean;
}
declare const _default: ({ column, className, ...props }: {
    as?: React.ElementType<any, keyof React.JSX.IntrinsicElements> | undefined;
} & Omit<any, "ref"> & {
    column?: import("./Layouts.types").LayoutColumns | import("./Layouts.types").LayoutColumns[];
    className?: string;
}) => import("react/jsx-runtime").JSX.Element;
export default _default;
