import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
type Level = 1 | 2 | 3;
export interface TitleProps extends TypographCommonProps, HTMLAttributes<HTMLHeadingElement> {
    level?: Level;
}
declare const Title: React.FC<TitleProps>;
export default Title;
