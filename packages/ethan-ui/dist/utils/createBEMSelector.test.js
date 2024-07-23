import { expect, it } from "vitest";
import createBEMSelector from "./createBEMSelector";
it.each([
    ["block", "element", "modifier", "block__element--modifier"],
    ["block", undefined, "modifier", "block--modifier"],
    ["block", "element", undefined, "block__element"],
    [["block", "name1"], "element", "modifier", "block-name1__element--modifier"],
    ["block", ["element", "name1"], "modifier", "block__element-name1--modifier"],
    ["block", "element", ["modifier", "name1"], "block__element--modifier-name1"],
])(``, (block, element, modifier, expected) => {
    expect(createBEMSelector({
        block,
        element,
        modifier,
    })).toBe(expected);
});
