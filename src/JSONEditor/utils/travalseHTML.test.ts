import { expect, it } from "vitest";
import travalseHTML, { ParsedHTMLType } from "./travalseHTML";

it(`travalseHTML(%s, () => void)`, () => {
	const html =
		"<div><div>hello <span>world</span></div> hello <div>world</div></div>";
	const stack1: string[] = [];
	const expected1: string[] = [
		"<div>",
		"<div>",
		"hello ",
		"<span>",
		"world",
		"</span>",
		"</div>",
		" hello ",
		"<div>",
		"world",
		"</div>",
		"</div>",
	];

	travalseHTML(html, (_, contents) => {
		stack1.push(contents);
	});

	expect(stack1).toStrictEqual(expected1);

	const stack2: ParsedHTMLType[] = [];
	const expected2: ParsedHTMLType[] = [
		"OpenTag",
		"OpenTag",
		"Text",
		"OpenTag",
		"Text",
		"CloseTag",
		"CloseTag",
		"Text",
		"OpenTag",
		"Text",
		"CloseTag",
		"CloseTag",
	];

	travalseHTML(html, (type) => {
		stack2.push(type);
	});

	expect(stack2).toStrictEqual(expected2);
});
