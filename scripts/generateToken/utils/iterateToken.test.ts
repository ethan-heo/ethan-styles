import { expect, it } from "vitest";
import iterateToken from "./iterateToken";

it(`토큰을 순회한다.`, () => {
	const TOKEN = {
		color: {
			red: {
				$type: "color",
				$value: "#ff0000",
			},
			blue: {
				$type: "color",
				$value: "#0000ff",
			},
		},
	};
	const expected = {
		"color.red": {
			$type: "color",
			$value: "#ff0000",
		},
		"color.blue": {
			$type: "color",
			$value: "#0000ff",
		},
	};
	const mapToToken = iterateToken({
		data: {},
		foundTokenObjCallback: (tokenNames, token, data) => {
			data[tokenNames.join(".")] = token;
		},
	});

	expect(mapToToken(TOKEN)).toStrictEqual(expected);
});
