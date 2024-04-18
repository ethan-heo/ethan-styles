import fs from "fs/promises";
import * as prettier from "prettier";
import baseToken from "../../design-token/design.token.json" assert { type: "json" };
import lightThemeToken from "../../design-token/light.theme.token.json" assert { type: "json" };
import path from "../../configs/path.config.mjs";
import parseToken from "./parser.mjs";
import formatToken from "./formatter.mjs";
import { validateTokenObj, validateTokenValue } from "./utils/validators.mjs";

const generateTokenToCss = (
	token,
	formatter,
	options = {
		use: "variables", // variable, class
	},
) => {
	const tokenList = [];

	for (const [startTokenName, startTokenValue] of Object.entries(token)) {
		const tokenNames = [startTokenName];
		let stack = Object.entries(startTokenValue);
		let currentToken = stack[0];

		while (stack.length) {
			const [tokenName, tokenValue] = currentToken;

			if (validateTokenObj(tokenValue)) {
				if (!validateTokenValue(tokenValue)) {
					throw new TypeError(
						`유효하지 않은 토큰 오브젝트입니다.\n${JSON.stringify(_tokenValue, null, 2)}`,
					);
				}

				tokenList.push(
					formatter({
						name: `${tokenNames.join("-")}-${tokenName}`,
						use: options.use,
						token: tokenValue,
					}),
				);
			} else {
				if (tokenNames.length > 1) {
					tokenNames.pop();
				}
				tokenNames.push(tokenName);
				stack = [...Object.entries(tokenValue), ...stack];
			}

			currentToken = stack.shift();
		}
	}

	if (options.use === "variables") {
		return `:root{${tokenList.join("")}}`;
	}

	return tokenList.join("");
};

const parser = parseToken(baseToken);
const formatter = (options) => {
	return formatToken({
		...options,
		token: parser(options.token),
	});
};

const tokens = [
	{
		fileName: "base",
		css: generateTokenToCss(baseToken, formatter),
	},
	{
		fileName: "light-theme",
		css: generateTokenToCss(lightThemeToken, formatter),
	},
];
const OUTPUT_PATH = path.token;

for (const { fileName, css } of tokens) {
	const formattedCss = await prettier.format(css, {
		parser: "css",
	});

	await fs.mkdir(OUTPUT_PATH, { recursive: true });
	await fs.writeFile(`${OUTPUT_PATH}/${fileName}.css`, formattedCss, "utf-8");
}
