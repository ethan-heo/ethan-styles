/**
 * [Requirement]
 * 1. 텍스트 크기 조절
 * [Design]
 * 1. 에러
 * 2. 기본 스타일
 */

import React from "react";
import { FormCommonProps } from "./Form.types";
import createFormClassnames from "./utils/createFormClassnames";

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>,
		FormCommonProps {}

const Input: React.FC<InputProps> = ({
	className,
	fontSize = "medium",
	invalid,
	...props
}) => {
	const _className = createFormClassnames(
		"input",
		{ fontSize, invalid },
		className,
	);

	return <input {...props} className={_className} />;
};

export default Input;
