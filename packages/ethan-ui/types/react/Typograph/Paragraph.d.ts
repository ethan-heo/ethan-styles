import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, TypographCommonProps {
}
declare const Paragraph: React.FC<ParagraphProps>;
export default Paragraph;
