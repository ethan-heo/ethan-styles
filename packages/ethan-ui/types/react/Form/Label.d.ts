import React from "react";
import { FormCommonProps } from "./Form.types";
export interface LabelProps extends React.LabelHTMLAttributes<HTMLElement>, FormCommonProps {
}
declare const Label: ({ fontSize, invalid, className, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
