import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import "./Typograph.styles.css";
import "./Title.styles.css";
type Level = 1 | 2 | 3;
type EnhancedTypographCommonProps = Omit<TypographCommonProps, "string">;
interface TitleProps extends EnhancedTypographCommonProps, HTMLAttributes<HTMLHeadingElement> {
    level?: Level;
}
declare const Title: React.FC<TitleProps>;
export default Title;
