/**
 * [Requirements]
 * 1. submit 관리 method[get, post], preventDefault
 */
import React from "react";
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}
declare const Form: React.FC<FormProps>;
export default Form;
