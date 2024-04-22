import fs from "fs/promises";
import * as prettier from "prettier";
import ejs from "ejs";
import baseToken from "../../design-token/design.tokens.json" assert { type: "json" };
import lightThemeToken from "../../design-token/light.themes.token.json" assert { type: "json" };
import path from "../../configs/path.config.mjs";
import parseToken from "./parser.mjs";
import { validateTokenObj, validateTokenValue } from "./utils/validators.mjs";

const parser = parseToken(baseToken);

const generateToken = (token, parser) => {
	const result = new Map();

	for (const [startTokenName, startTokenValue] of Object.entries(token)) {
		const tokenNames = [startTokenName];
		let stack = Object.entries(startTokenValue);

		while (stack.length) {
			const [tokenName, tokenValue] = stack.shift();

			if (validateTokenObj(tokenValue)) {
				if (!validateTokenValue(tokenValue)) {
					throw new TypeError(
						`유효하지 않은 토큰 오브젝트입니다.\n${JSON.stringify(_tokenValue, null, 2)}`,
					);
				}

				result.set(`${tokenNames.join("-")}-${tokenName}`, parser(tokenValue));
			} else {
				if (tokenNames.length > 1) {
					tokenNames.pop();
				}
				tokenNames.push(tokenName);
				stack = [...Object.entries(tokenValue), ...stack];
			}
		}
	}

	return result;
};

const tokens = [
	{
		fileName: "base",
		type: "variables",
		tokenMap: generateToken(baseToken, parser),
	},
	{
		fileName: "light-theme",
		type: "variables",
		tokenMap: generateToken(lightThemeToken, parser),
	},
];

const EJS_TEMPLATE_PATH = {
	VARIABLES: path.tokenTemplate + "/variables.ejs",
	CLASSES: path.tokenTemplate + "/classes.ejs",
};

const results = await Promise.all(
	tokens.map(async ({ fileName, type, tokenMap }) => {
		if (type === "variables") {
			return {
				fileName,
				contents: await ejs.renderFile(
					EJS_TEMPLATE_PATH.VARIABLES,
					{
						variables: tokenMap.entries(),
					},
					{
						async: true,
					},
				),
			};
		} else {
			return Promise.resolve("Do Not Defined");
		}
	}),
);

const OUTPUT_PATH = path.token;

for (const { fileName, contents } of results) {
	const formattedCss = await prettier.format(contents, {
		parser: "css",
	});

	await fs.mkdir(OUTPUT_PATH, { recursive: true });
	await fs.writeFile(`${OUTPUT_PATH}/${fileName}.css`, formattedCss, "utf-8");
}
