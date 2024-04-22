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
};

describe(`토큰 $value 파싱`, () => {
	const parser = parseToken(TOKEN.BASE);

	it(`토큰의 $value가 문자열 형식이고 참조 형식일 때 baseToken에서 값을 찾아 변환한다.`, () => {
		const value1 = {
			$type: "color",
			$value: "{color.white}",
		};
		const expected1 = {
			$type: "color",
			$value: "#ffffff",
		};

		expect(parser(value1)).toStrictEqual(expected1);

		const value2 = {
			$type: "color",
			$value: "{color.black}",
		};
		const expected2 = {
			$type: "color",
			$value: "#000000",
		};
		expect(parser(value2)).toStrictEqual(expected2);
	});

	it(`토큰의 $value가 문자열 형식일 때 값을 그대로 반환한다.`, () => {
		const value1 = {
			$type: "color",
			$value: "#ffffff",
		};
		const expected1 = {
			$type: "color",
			$value: "#ffffff",
		};

		expect(parser(value1)).toStrictEqual(expected1);

		const value2 = {
			$type: "color",
			$value: "#000000",
		};
		const expected2 = {
			$type: "color",
			$value: "#000000",
		};
		expect(parser(value2)).toStrictEqual(expected2);
	});

	it(`토큰의 $value가 객체 형식일 때 값이 참조 형식이면 baseToken에서 값을 찾아 변환한다.`, () => {
		const value = {
			$type: "composition",
			$value: {
				"background-color": "{color.white}",
				color: "{color.black}",
			},
		};
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
		const value = {
			$type: "composition",
			$value: {
				"background-color": "#ffffff",
				color: "#000000",
			},
		};
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
		const value = {
			$type: "composition",
			$value: {
				"background-color": {},
				color: 1,
			},
		};

		expect(() => parser(value)).toThrowError("값이 문자열이 아닙니다.");
	});

	it(`토큰의 $value의 값이 문자열이 참조 형식이고 baseToken에서 값을 찾지 못하면 에러를 내뱉는다. `, () => {
		const value = {
			$type: "composition",
			$value: {
				"background-color": "{color.DO_NOT_HAVE}",
				color: "{color.DO_NOT_HAVE}",
			},
		};

		expect(() => parser(value)).toThrowError("토큰값이 존재하지 않습니다.");
	});
});
