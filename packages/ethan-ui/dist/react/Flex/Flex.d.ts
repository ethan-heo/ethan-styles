import React from "react";
import "./Flex.styles.css";
import { PickCSSProperty } from "../../types/utils";
export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    justify?: PickCSSProperty<"justifyContent", "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
    align?: PickCSSProperty<"alignItems", "flex-start" | "center" | "flex-end">;
    vertical?: boolean;
    reverse?: boolean;
    wrap?: boolean;
    gap?: "extra-large" | "large" | "medium" | "small" | "extra-small";
}
declare const Flex: React.FC<FlexProps>;
export default Flex;
