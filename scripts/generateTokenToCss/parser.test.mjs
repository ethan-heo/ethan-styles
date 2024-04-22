import { describe, expect, it } from "vitest";
import parseToken from "./parser.mjs";

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
	값_형식이_문자열_형태: {
		"color-primary": {
			$type: "color",
			$value: "#ffffff",
		},
		"color-text": {
			$type: "color",
			$value: "#000000",
		},
	},
	값_형식이_참조_형태: {
		"color-primary": {
			$type: "color",
			$value: "{color.white}",
		},
		"color-text": {
			$type: "color",
			$value: "{color.black}",
		},
	},
	값_형식이_객체이고_문자열_형태: {
		"primary-button": {
			$type: "composition",
			$value: {
				"background-color": "#ffffff",
				color: "#000000",
			},
		},
	},
	값_형식이_객체이고_참조_형태: {
		"primary-button": {
			$type: "composition",
			$value: {
				"background-color": "{color.white}",
				color: "{color.black}",
			},
		},
	},
	값_형식이_객체이고_존재하지_않는_값: {
		"primary-button": {
			$type: "composition",
			$value: {
				"background-color": "{color.DO_NOT_HAVE}",
				color: "{color.DO_NOT_HAVE}",
			},
		},
	},
	값_형식이_객체이고_값이_문자열이_아닌_형태: {
		"primary-button": {
			$type: "composition",
			$value: {
				"background-color": {},
				color: 1,
			},
		},
	},
};

describe(`토큰 $value 파싱`, () => {
	const parser = parseToken(TOKEN.BASE);

	it(`토큰의 $value가 문자열 형식이고 참조 형식일 때 baseToken에서 값을 찾아 변환한다.`, () => {
		const value1 = TOKEN.값_형식이_참조_형태["color-primary"];
		const expected1 = {
			$type: "color",
			$value: "#ffffff",
		};

		expect(parser(value1)).toStrictEqual(expected1);

		const value2 = TOKEN.값_형식이_참조_형태["color-text"];
		const expected2 = {
			$type: "color",
			$value: "#000000",
		};
		expect(parser(value2)).toStrictEqual(expected2);
	});

	it(`토큰의 $value가 문자열 형식일 때 값을 그대로 반환한다.`, () => {
		const value1 = TOKEN.값_형식이_문자열_형태["color-primary"];
		const expected1 = {
			$type: "color",
			$value: "#ffffff",
		};

		expect(parser(value1)).toStrictEqual(expected1);

		const value2 = TOKEN.값_형식이_문자열_형태["color-text"];
		const expected2 = {
			$type: "color",
			$value: "#000000",
		};
		expect(parser(value2)).toStrictEqual(expected2);
	});

	it(`토큰의 $value가 객체 형식일 때 값이 참조 형식이면 baseToken에서 값을 찾아 변환한다.`, () => {
		const value = TOKEN.값_형식이_객체이고_참조_형태["primary-button"];
		const expected = {
			$type: "composition",
			$value: {
				"background-color": "#ffffff",
				color: "#000000",
			},
		};

		expect(parser(value)).toStrictEqual(expected);
	});

	it(`토큰의 $value가 객체 형식일 때 값이 문자열 형식이면 값을 그대로 반환한다.`, () => {
		const value = TOKEN.값_형식이_객체이고_문자열_형태["primary-button"];
		const expected = {
			$type: "composition",
			$value: {
				"background-color": "#ffffff",
				color: "#000000",
			},
		};

		expect(parser(value)).toStrictEqual(expected);
	});

	it(`토큰의 $value가 객체 형식이고 값이 문자열이 아니면 에러를 내뱉는다.`, () => {
		const value =
			TOKEN.값_형식이_객체이고_값이_문자열이_아닌_형태["primary-button"];

		expect(() => parser(value)).toThrowError("값이 문자열이 아닙니다.");
	});

	it(`토큰의 $value의 값이 문자열이 참조 형식이고 baseToken에서 값을 찾지 못하면 에러를 내뱉는다. `, () => {
		const value = TOKEN.값_형식이_객체이고_존재하지_않는_값["primary-button"];

		expect(() => parser(value)).toThrowError("토큰값이 존재하지 않습니다.");
	});
});
