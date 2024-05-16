import { expect, it } from "vitest";
import parseHTML, { HTMLToken } from "./parseHTML";

it(`parseHTML(%s) => %o`, () => {
	const html =
		"<div class='wrapper'><div data-description='greeting'>hello <span>world</span></div> hello <div>world</div></div>";
	const expected: HTMLToken[] = [
		{
			type: "OpenTag",
			contents: "div",
			attributes: {
				class: "wrapper",
			},
		},
		{
			type: "OpenTag",
			contents: "div",
			attributes: {
				"data-description": "greeting",
			},
		},
		{
			type: "Text",
			contents: "hello ",
		},
		{
			type: "OpenTag",
			contents: "span",
		},
		{
			type: "Text",
			contents: "world",
		},
		{
			type: "CloseTag",
			contents: "span",
		},
		{
			type: "CloseTag",
			contents: "div",
		},
		{
			type: "Text",
			contents: " hello ",
		},
		{
			type: "OpenTag",
			contents: "div",
		},
		{
			type: "Text",
			contents: "world",
		},
		{
			type: "CloseTag",
			contents: "div",
		},
		{
			type: "CloseTag",
			contents: "div",
		},
	];

	expect(parseHTML(html)).toStrictEqual(expected);
});
