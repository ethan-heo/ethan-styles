import React from "react";
import "./GridLineGutter.styles.css";
import createBEMSelector from "../utils/createBEMSelector";
import { GRID_LINE_BLOCK } from "./constants";
const GridLineGutter = () => {
    return (React.createElement("div", { className: createBEMSelector({
            block: GRID_LINE_BLOCK,
            element: "gutter",
        }) }));
};
export default GridLineGutter;
