import React from "react";
import "./Flex.styles.css";
import { PickCSSProperty } from "../../types/utils";
import createBEMSelector from "../../utils/createBEMSelector";

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
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
	gap?: "extra-large" | "large" | "medium" | "small" | "extra-small";
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
	const block = "flex";
	const blockClassName = createBEMSelector({
		block,
	});
	const justifyClassName = createBEMSelector({
		block,
		modifier: ["justify", justify],
	});
	const alignClassName = createBEMSelector({
		block,
		modifier: ["align", align],
	});
	let reverseClassname;
	let gapClassname;
	let wrapClassname;
	let verticalClassname;

	if (reverse) {
		reverseClassname = createBEMSelector({
			block,
			modifier: ["reverse"],
		});
	}
	if (gap) {
		gapClassname = createBEMSelector({
			block,
			modifier: ["gap", gap],
		});
	}
	if (wrap) {
		wrapClassname = createBEMSelector({
			block,
			modifier: ["wrap"],
		});
	}
	if (vertical) {
		verticalClassname = createBEMSelector({
			block,
			modifier: ["vertical"],
		});
	}

	const classNames = [
		blockClassName,
		justifyClassName,
		alignClassName,
		reverseClassname,
		gapClassname,
		wrapClassname,
		verticalClassname,
		className,
	];

	return (
		<div className={classNames.filter(Boolean).join(" ")} {...props}>
			{children}
		</div>
	);
};

export default Flex;
