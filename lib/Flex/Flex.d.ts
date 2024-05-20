import React from "react";
import "./Flex.styles.css";
import { PickCSSProperty } from "../types/utils";
interface FlexProps extends React.HTMLAttributes<HTMLElement> {
    justify?: PickCSSProperty<"justifyContent", "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly">;
    align?: PickCSSProperty<"alignItems", "flex-start" | "center" | "flex-end">;
    vertical?: boolean;
    reverse?: boolean;
    wrap?: boolean;
    gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}
declare const Flex: React.FC<FlexProps>;
export default Flex;
