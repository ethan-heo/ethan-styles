/**
 * [Requirements]
 * 1. submit 관리 method[get, post], preventDefault
 */

import React from "react";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

const Form: React.FC<FormProps> = ({ children, ...props }) => {
	return <form {...props}>{children}</form>;
};

export default Form;
