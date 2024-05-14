import { expect, it } from "vitest";
import JSONEditorBehaviorUI from "./BehaviorUI";

const DEPTH_DOM_STR = `<div>2depth</div>`;
const LINE_DOM_STR = `<div>line</div>`;

const behaviorUI = new JSONEditorBehaviorUI({
	depth: DEPTH_DOM_STR,
	line: LINE_DOM_STR,
});

it.each([
	// ["<div>hello world</div>", 5, "<div><div>hello</div><div> world</div></div>"],
	// ["<div>hello world</div>", 0, "<div><div></div><div>hello world</div></div>"],
	// [
	// 	"<div>hello <span>world</span></div>",
	// 	7,
	// 	"<div><div>hello <span>w</span></div><div><span>orld</span></div></div>",
	// ],
	[
		"<div>hello <span>world</span></div> hello <div>world</div>",
		5,

		"<div><div>hello <div><span>world</span></div></div> hello <div>world</div><div>",
	],
])(`JSONEditorBehaviorUI.lineFeed()`, (domStr, startIndex, expected) => {
	expect(behaviorUI.enter(domStr, startIndex)).toBe(expected);
});
it(`JSONEditorBehaviorUI.tab()`, () => {});
it(`JSONEditorBehaviorUI.space()`, () => {});
