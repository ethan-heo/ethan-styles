import React from "react";
import "./GridLineColumn.styles.css";
import createBEMSelector from "../utils/createBEMSelector";
import { GRID_LINE_BLOCK } from "./constants";

const GridLineColumn = () => {
	return (
		<div
			className={createBEMSelector({
				block: GRID_LINE_BLOCK,
				element: "column",
			})}
		/>
	);
};

export default GridLineColumn;
