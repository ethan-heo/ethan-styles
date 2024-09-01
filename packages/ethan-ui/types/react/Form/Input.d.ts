/**
 * [Requirement]
 * 1. 텍스트 크기 조절
 * [Design]
 * 1. 에러
 * 2. 기본 스타일
 */
import React from "react";
import { FormCommonProps } from "./Form.types";
import "./Input.styles.css";
import "./Form.styles.css";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, FormCommonProps {
}
declare const Input: React.FC<InputProps>;
export default Input;
