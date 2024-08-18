import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import "./Text.styles.css";
import "./Typograph.styles.css";
export interface TextProps extends HTMLAttributes<HTMLSpanElement>, TypographCommonProps {
}
declare const Text: React.FC<TextProps>;
export default Text;
