import React from "react";
import ReactDOM from "react-dom";
import "./GridLine.styles.css";
import useMediaQuery from "../hooks/useMediaQuery";
import GridLineColumn from "./GridLineColumn";
import GridLineGutter from "./GridLineGutter";
import createBEMSelector from "../../utils/createBEMSelector";
import { GRID_LINE_BLOCK } from "./constants";
const GRID_COMPONENTS = {
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
const GRID_LAYOUT = {
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
    const blockClassname = createBEMSelector({
        block: GRID_LINE_BLOCK,
    });
    const contentsClassname = createBEMSelector({
        block: GRID_LINE_BLOCK,
        element: "contents",
    });
    return ReactDOM.createPortal(React.createElement("div", { style: GRID_COMPONENTS[platform], className: blockClassname },
        React.createElement("div", { className: contentsClassname }, layouts.map((layout, index) => {
            if (layout === "column") {
                return React.createElement(GridLineColumn, { key: `column-${index}` });
            }
            else {
                return React.createElement(GridLineGutter, { key: `gutter-${index}` });
            }
        }))), document.body);
}
export default GridLine;
