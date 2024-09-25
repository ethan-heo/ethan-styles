import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
export interface TextProps extends HTMLAttributes<HTMLSpanElement>, TypographCommonProps {
}
declare const Text: React.FC<TextProps>;
export default Text;
