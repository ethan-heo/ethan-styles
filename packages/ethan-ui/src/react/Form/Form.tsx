/**
 * [Requirements]
 * 1. submit 관리 method[get, post], preventDefault
 */

import React from "react";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
	onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		if (onSubmit) {
			e.preventDefault();
			onSubmit(e);
		}
	};
	return (
		<form {...props} onSubmit={handleSubmit}>
			{children}
		</form>
	);
};

export default Form;
