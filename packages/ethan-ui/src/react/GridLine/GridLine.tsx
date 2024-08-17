import { useEffect, useMemo, useRef } from "react";
import "./GridLine.styles.css";
import useMediaQuery from "../hooks/useMediaQuery";
import createBEMSelector from "../../utils/createBEMSelector";
import { GRID_LINE_BLOCK } from "./constants";
import useCssVariables from "../hooks/useCssVariables";

function GridLine() {
	const el = useRef<HTMLDivElement>(null);
	const platform = useMediaQuery();
	const variables = useCssVariables();
	const gradient = useMemo(() => {
		if (!Array.from(variables.keys()).length) return "";

		let columns;
		let gutter;
		let margin;
		const columnColor = variables.get("--color-primary");
		const gutterColor = variables.get("--color-accent");

		switch (platform) {
			case "mobile-portrait":
				columns = variables.get("--grid-mobile-portrait-columns");
				gutter = variables.get("--grid-mobile-portrait-gutter");
				margin = variables.get("--grid-mobile-portrait-margin");
				break;
			case "mobile-landscape":
				columns = variables.get("--grid-mobile-landscape-columns");
				gutter = variables.get("--grid-mobile-landscape-gutter");
				margin = variables.get("--grid-mobile-landscape-margin");
				break;
			case "tablet-portrait":
				columns = variables.get("--grid-tablet-portrait-columns");
				gutter = variables.get("--grid-tablet-portrait-gutter");
				margin = variables.get("--grid-tablet-portrait-margin");
				break;
			case "tablet-landscape":
				columns = variables.get("--grid-tablet-landscape-columns");
				gutter = variables.get("--grid-tablet-landscape-gutter");
				margin = variables.get("--grid-tablet-landscape-margin");
				break;
			default:
				columns = variables.get("--grid-desktop-columns");
				gutter = variables.get("--grid-desktop-gutter");
				margin = variables.get("--grid-desktop-margin");
		}

		if (!columns || !gutter || !margin) {
			throw new Error(`grid 속성이 정의되지 않았습니다.`);
		}

		columns = parseInt(columns);

		const columnWidth = `calc((100% - (${gutter} * (${columns} - 1))) / ${columns})`;
		const gradientColors = Array.from({ length: columns * 2 - 1 }).map(
			(_, idx) =>
				idx % 2 === 0
					? `${columnColor} calc((${columnWidth} + ${gutter}) * ${Math.floor(idx / 2)}), ${columnColor} calc((${columnWidth} + ${gutter}) * ${Math.floor(idx / 2)} + ${columnWidth})`
					: `${gutterColor} calc((${columnWidth} + ${gutter}) * ${Math.floor(idx / 2)} + ${columnWidth}), ${gutterColor} calc((${columnWidth} + ${gutter}) * ${Math.floor(idx / 2) + 1})`,
		);
		return `linear-gradient(to right, ${gradientColors.join(",")})`;
	}, [variables, platform]);

	useEffect(() => {
		const parentEl = el.current?.parentElement;

		if (parentEl) {
			parentEl.style.position = "relative";
		}
	}, []);

	return (
		<div
			ref={el}
			style={{
				background: gradient,
			}}
			className={createBEMSelector({
				block: GRID_LINE_BLOCK,
			})}
		/>
	);
}

export default GridLine;
