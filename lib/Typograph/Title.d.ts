import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import "./Title.styles.css";
import "./Typograph.styles.css";
type Level = 1 | 2 | 3;
interface TitleProps extends TypographCommonProps, HTMLAttributes<HTMLHeadingElement> {
    level?: Level;
}
declare const Title: React.FC<TitleProps>;
export default Title;
