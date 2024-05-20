import React, { CSSProperties } from "react";
import ReactDOM from "react-dom";
import "./GridLine.styles.css";
import useMediaQuery from "../hooks/useMediaQuery";
import GridLineColumn from "./GridLineColumn";
import GridLineGutter from "./GridLineGutter";
import { Platform } from "../types/constants";

const GRID_COMPONENTS: Record<
	Platform,
	{
		"--column": string;
		"--row": string;
		"--gutter": string;
	}
> = {
	desktop: {
		"--column": "var(--grid-desktop-column)",
		"--row": "var(--grid-desktop-row)",
		"--gutter": "var(--grid-desktop-gutter)",
	},
	"mobile-landscape": {
		"--column": "var(--grid-mobile-landscape-column)",
		"--row": "var(--grid-mobile-landscape-row)",
		"--gutter": "var(--grid-mobile-landscape-gutter)",
	},
	"mobile-portrait": {
		"--column": "var(--grid-mobile-portrait-column)",
		"--row": "var(--grid-mobile-portrait-row)",
		"--gutter": "var(--grid-mobile-portrait-gutter)",
	},
	tablet: {
		"--column": "var(--grid-tablet-column)",
		"--row": "var(--grid-tablet-row)",
		"--gutter": "var(--grid-tablet-gutter)",
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
	tablet: [
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
	const platform = useMediaQuery();
	const layouts = GRID_LAYOUT[platform];

	return ReactDOM.createPortal(
		<div
			style={GRID_COMPONENTS[platform] as CSSProperties}
			className={`grid-line`}
		>
			<div className="grid-line-contents">
				{layouts.map((layout, index) => {
					if (layout === "column") {
						return <GridLineColumn key={`column-${index}`} />;
					} else {
						return <GridLineGutter key={`gutter-${index}`} />;
					}
				})}
			</div>
		</div>,
		document.body,
	);
}

export default GridLine;
