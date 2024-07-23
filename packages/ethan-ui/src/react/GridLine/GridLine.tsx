import React, { CSSProperties, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import "./GridLine.styles.css";
import useMediaQuery from "../hooks/useMediaQuery";
import GridLineColumn from "./GridLineColumn";
import GridLineGutter from "./GridLineGutter";
import { Platform } from "../../types/constants";
import createBEMSelector from "../../utils/createBEMSelector";
import { GRID_LINE_BLOCK } from "./constants";

const GRID_COMPONENTS: Record<
	Platform,
	{
		"--column": string;
		"--gutter": string;
		"--margin": string;
	}
> = {
	desktop: {
		"--column": "var(--grid-desktop-columns)",
		"--gutter": "var(--grid-desktop-gutter)",
		"--margin": "var(--grid-desktop-margin)",
	},
	"mobile-landscape": {
		"--column": "var(--grid-mobile-landscape-columns)",
		"--gutter": "var(--grid-mobile-landscape-gutter)",
		"--margin": "var(--grid-mobile-landscape-margin)",
	},
	"mobile-portrait": {
		"--column": "var(--grid-mobile-portrait-columns)",
		"--gutter": "var(--grid-mobile-portrait-gutter)",
		"--margin": "var(--grid-mobile-portrait-margin)",
	},
	"tablet-landscape": {
		"--column": "var(--grid-tablet-landscape-columns)",
		"--gutter": "var(--grid-tablet-landscape-gutter)",
		"--margin": "var(--grid-tablet-landscape-margin)",
	},
	"tablet-portrait": {
		"--column": "var(--grid-tablet-portrait-columns)",
		"--gutter": "var(--grid-tablet-portrait-gutter)",
		"--margin": "var(--grid-tablet-portrait-margin)",
	},
};

const GRID_LAYOUT: Record<Platform, ("column" | "gutter")[]> = {
	desktop: [
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
	],
	"tablet-portrait": [
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
	],
	"tablet-landscape": [
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
	],
	"mobile-landscape": [
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
	],
	"mobile-portrait": [
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
		"gutter",
		"column",
	],
};

function GridLine() {
	const el = useRef<HTMLDivElement>(null);
	const platform = useMediaQuery();
	const layouts = GRID_LAYOUT[platform];
	const blockClassname = createBEMSelector({
		block: GRID_LINE_BLOCK,
	});
	const contentsClassname = createBEMSelector({
		block: GRID_LINE_BLOCK,
		element: "contents",
	});

	useEffect(() => {
		const parentEl = el.current?.parentElement;

		if (parentEl) {
			parentEl.style.position = "relative";
		}
	}, []);

	return (
		<div
			ref={el}
			style={GRID_COMPONENTS[platform] as CSSProperties}
			className={blockClassname}
		>
			<div className={`${contentsClassname} ${platform}`}>
				{layouts.map((layout, index) => {
					if (layout === "column") {
						return <GridLineColumn key={`column-${index}`} />;
					} else {
						return <GridLineGutter key={`gutter-${index}`} />;
					}
				})}
			</div>
		</div>
	);
}

export default GridLine;
