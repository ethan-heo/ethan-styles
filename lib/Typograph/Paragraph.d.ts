import React, { HTMLAttributes } from "react";
import { TypographCommonProps } from "./Typograph.types";
import "./Paragraph.styles.css";
import "./Typograph.styles.css";
interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, TypographCommonProps {
}
declare const Paragraph: React.FC<ParagraphProps>;
export default Paragraph;
