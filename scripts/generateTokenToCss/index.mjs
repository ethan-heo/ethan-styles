import baseToken from "../../design-token/design.token.json" assert { type: "json" };
import lightThemeToken from "../../design-token/light.theme.token.json" assert { type: "json" };
import fs from "fs/promises";
import path from "../../configs/path.config.mjs";
import parseToken from "./parser.mjs";
import { validateTokenObj, validateTokenValue } from "./utils/validators.mjs";

const themes = [
	{
		title: "base",
		token: baseToken,
	},
	{
		title: "light-theme",
		token: lightThemeToken,
	},
];

const OUTPUT_PATH = path.token;

themes.forEach(async (theme) => {
	const { title, token } = theme;

	const tokenList = Object.entries(token);
	const tokenMap = new Map();

	tokenList.forEach(([tokenName, tokenValue]) => {
		const stack = Object.entries(tokenValue);
		const tokenNames = [tokenName];
		let currentTarget = stack[stack.length - 1];

		while (stack.length) {
			const [_tokenName, _tokenValue] = currentTarget;

			if (!validateTokenObj(_tokenValue)) {
				if (tokenNames.length > 1) {
					tokenNames.pop();
				}
				tokenNames.push(stack.pop()[0]);
				stack.push(...Object.entries(_tokenValue));
			} else {
				if (!validateTokenValue(_tokenValue)) {
					throw new TypeError(
						`유효하지 않은 토큰 오브젝트입니다.\n${JSON.stringify(_tokenValue, null, 2)}`,
					);
				}

				tokenMap.set(
					`${tokenNames.join("-")}-${_tokenName}`,
					parseToken(_tokenValue, baseToken),
				);
				stack.pop();
			}

			currentTarget = stack[stack.length - 1];
		}
	});

	let contents = ``;

	tokenMap.forEach((value, name) => {
		contents += `.${name}{${value}}`;
	});

	await fs.mkdir(OUTPUT_PATH, { recursive: true });
	await fs.writeFile(`${OUTPUT_PATH}/${title}.css`, contents, "utf-8");
});
