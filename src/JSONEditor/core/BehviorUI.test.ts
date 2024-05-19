import { expect, it } from "vitest";
import JSONEditorBehaviorUI from "./BehaviorUI";

const DEPTH_DOM_STR = `<div>2depth</div>`;
const LINE_DOM_STR = `<div>line</div>`;

const behaviorUI = new JSONEditorBehaviorUI({
	depth: DEPTH_DOM_STR,
	line: LINE_DOM_STR,
});

it.each([
	["<div>hello world</div>", 5, "<div>hello</div><div><div> world</div></div>"],
	["hello world", 5, "hello<div> world</div>"],
	[
		"<div>hello <span>world</span></div>",
		5,
		"<div>hello</div><div><div> <span>world</span></div></div>",
	],
	["<div>hello world</div>", 0, "<div></div><div><div>hello world</div></div>"],
	[
		"<div>hello <span>world</span></div>",
		7,
		"<div>hello <span>w</span></div><div><div><span>orld</span></div></div>",
	],
	[
		"<div>hello <span>world</span></div> hello <div>world</div>",
		5,
		"<div>hello</div><div><div> <span>world</span></div> hello <div>world</div></div>",
	],
])(`JSONEditorBehaviorUI.enter(%s, %s)`, (domStr, startIndex, expected) => {
	expect(behaviorUI.enter(domStr, startIndex)).toBe(expected);
});
it.each([["<div>hello world</div>", "<div></div><div>hello world</div>"]])(
	`JSONEditorBehaviorUI.tab(%s)`,
	(value, expected) => {
		expect(behaviorUI.tab(value)).toBe(expected);
	},
);
it(`JSONEditorBehaviorUI.space()`, () => {});
