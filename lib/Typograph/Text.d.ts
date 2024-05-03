import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import "./Typograph.styles.css";
import "./Text.styles.css";
interface TextProps extends HTMLAttributes<HTMLSpanElement>, TypographCommonProps {
}
declare const Text: React.FC<TextProps>;
export default Text;
