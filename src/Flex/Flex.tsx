import React from "react";
import "./Flex.styles.css";

interface FlexProps extends React.HTMLAttributes<HTMLElement> {
	justify?: PickCSSProperty<
		"justifyContent",
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "space-evenly"
	>;
	align?: PickCSSProperty<"alignItems", "flex-start" | "center" | "flex-end">;
	vertical?: boolean;
	reverse?: boolean;
	wrap?: boolean;
	gap?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const Flex: React.FC<FlexProps> = ({
	justify = "flex-start",
	align = "flex-start",
	vertical,
	reverse,
	gap,
	wrap,
	children,
	className,
	...props
}) => {
	const classNames = [
		"flex",
		"justify",
		"align",
		justify,
		align,
		gap ? `gap-${gap}` : null,
		vertical ? "vertical" : null,
		wrap ? "wrap" : null,
		reverse ? "reverse" : null,
		className,
	].filter(Boolean);

	return (
		<div className={classNames.join(" ")} {...props}>
			{children}
		</div>
	);
};

export default Flex;
