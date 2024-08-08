import React from "react";
import withGridLayout from "../hocs/withGridLayout";

type Props<Tag extends React.ElementType> = {
	as?: Tag;
};

export type ContainerProps<Tag extends React.ElementType> = Props<Tag> &
	React.ComponentPropsWithoutRef<Tag>;

const Container = withGridLayout(
	<Tag extends React.ElementType = "div">({
		as,
		children,
		...props
	}: ContainerProps<Tag>) => {
		const Component = as || "div";
		const BLOCK = "container";

		return <Component {...props}>{children}</Component>;
	},
);

export default Container;
