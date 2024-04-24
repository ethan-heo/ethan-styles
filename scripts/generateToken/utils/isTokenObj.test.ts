import { expect, it } from "vitest";
import isTokenObj from "./isTokenObj";

it.each([
	[
		{
			$type: "color",
			$value: "#0000ff",
		},
		true,
	],
	[
		{
			blue: {
				1: {
					$type: "color",
					$value: "#0000ff",
				},
			},
		},
		false,
	],
])(`isTokenObj(%o) => %s`, (value, expected) => {
	expect(isTokenObj(value)).toBe(expected);
});
