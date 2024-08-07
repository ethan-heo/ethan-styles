import React from "react";
import createBEMSelector from "../../utils/createBEMSelector";
import { Platform } from "../../types/constants";
import withGridLayout from "../hocs/WithGridLayout";

type Props<Tag extends React.ElementType> = {
	as?: Tag;
};

export type ContainerProps<Tag extends React.ElementType> = Props<Tag> &
	React.ComponentPropsWithoutRef<Tag>;

function Container<Tag extends React.ElementType = "div">({
	as,
	children,
	classNames,
	...props
}: ContainerProps<Tag>) {
	const Component = as || "div";
	const BLOCK = "container";

	return <Component {...props}>{children}</Component>;
}

export default withGridLayout(Container);
