import { describe, expect, it } from "vitest";
import parseRule from "./ruler.mjs";

const TOKEN = {
	BASE: {
		color: {
			white: {
				$type: "color",
				$value: "#ffffff",
			},
			black: {
				$type: "color",
				$value: "#000000",
			},
		},
	},
};

describe(`토큰 이름이 참조 형식이면 내부 값들이 참조 형식의 값들로 구성된다.`, () => {
	it(`$type이 composition이 아닐 떄`, () => {
		const value = [
			"{color}",
			{
				thin: {
					$type: "string",
					$value: "1px solid {color}",
				},
				medium: {
					$type: "string",
					$value: "2px solid {color}",
				},
			},
		];
		const expected = {
			white: {
				thin: {
					$type: "string",
					$value: "1px solid {color.white}",
				},
				medium: {
					$type: "string",
					$value: "2px solid {color.white}",
				},
			},
			black: {
				thin: {
					$type: "string",
					$value: "1px solid {color.black}",
				},
				medium: {
					$type: "string",
					$value: "2px solid {color.black}",
				},
			},
		};

		expect(parseRule(TOKEN.BASE)(...value)).toStrictEqual(expected);

		const value2 = [
			"{color.white}",
			{
				thin: {
					$type: "string",
					$value: "1px solid {color.white}",
				},
				medium: {
					$type: "string",
					$value: "2px solid {color.white}",
				},
			},
		];
		const expected2 = {
			white: {
				thin: {
					$type: "string",
					$value: "1px solid {color.white}",
				},
				medium: {
					$type: "string",
					$value: "2px solid {color.white}",
				},
			},
		};

		expect(parseRule(TOKEN.BASE)(...value2)).toStrictEqual(expected2);
	});

	it(`$type이 composition일 떄`, () => {
		const value = [
			"{color}",
			{
				thin: {
					$type: "composition",
					$value: {
						border: "1px solid {color}",
						"border-radius": "2px",
					},
				},
				medium: {
					$type: "composition",
					$value: {
						border: "2px solid {color}",
						"border-radius": "4px",
					},
				},
			},
		];
		const expected = {
			white: {
				thin: {
					$type: "composition",
					$value: {
						border: "1px solid {color.white}",
						"border-radius": "2px",
					},
				},
				medium: {
					$type: "composition",
					$value: {
						border: "2px solid {color.white}",
						"border-radius": "4px",
					},
				},
			},
			black: {
				thin: {
					$type: "composition",
					$value: {
						border: "1px solid {color.black}",
						"border-radius": "2px",
					},
				},
				medium: {
					$type: "composition",
					$value: {
						border: "2px solid {color.black}",
						"border-radius": "4px",
					},
				},
			},
		};

		expect(parseRule(TOKEN.BASE)(...value)).toStrictEqual(expected);

		const value2 = [
			"{color.white}",
			{
				thin: {
					$type: "composition",
					$value: {
						border: "1px solid {color.white}",
						"border-radius": "2px",
					},
				},
				medium: {
					$type: "composition",
					$value: {
						border: "2px solid {color.white}",
						"border-radius": "4px",
					},
				},
			},
		];
		const expected2 = {
			white: {
				thin: {
					$type: "composition",
					$value: {
						border: "1px solid {color.white}",
						"border-radius": "2px",
					},
				},
				medium: {
					$type: "composition",
					$value: {
						border: "2px solid {color.white}",
						"border-radius": "4px",
					},
				},
			},
		};

		expect(parseRule(TOKEN.BASE)(...value2)).toStrictEqual(expected2);
	});
});
