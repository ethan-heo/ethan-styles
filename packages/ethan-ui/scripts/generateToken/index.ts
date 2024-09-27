import path from "path";
import { GlobSync } from "glob";
import { readFile, writeFile } from "fs/promises";
import globalToken from "../../design-token/global.token.json";
import mapper from "./mapper";
import generateDesignToken from "generate-design-token";
import ejs from "ejs";
import prettier from "prettier";
import { Token } from "./generateToken.token";

const PATH = {
	TOKEN_DIR: path.resolve(__dirname, "../../design-token/tokens"),
	CSS_THEME_TEMPLATE: path.resolve(
		__dirname,
		"../../design-token/templates/css-theme.ejs",
	),
	GLOBAL_THEME_VARIABLES_TEMPLATE: path.resolve(
		__dirname,
		"../../design-token/templates/global-theme-postcss-var.ejs",
	),
	CREATE_THEME_TEMPLATE: path.resolve(
		__dirname,
		"../../design-token/templates/create-theme.ejs",
	),
	THEME_INTERFACE_TEMPLATE: path.resolve(
		__dirname,
		"../../design-token/templates/theme-interface.ejs",
	),
	THEME_CONSTANTS_TEMPLATE: path.resolve(
		__dirname,
		"../../design-token/templates/theme-constants.ejs",
	),
	THEME_OUTPUT: path.resolve(__dirname, "../../src/styles/theme.css"),

	GLOBAL_THEME_VARIABLES_OUTPUT: path.resolve(
		__dirname,
		"../../src/styles/global-theme-var.css",
	),
	THEME_INTERFACE_OUTPUT: path.resolve(
		__dirname,
		"../../src/types/css-variables.ts",
	),
	THEME_CONSTANTS_OUTPUT: path.resolve(
		__dirname,
		"../../src/constants/theme.constants.ts",
	),
};

interface Theme {
	name: string;
	token: Token;
}

async function generateToken(themes: Theme[]) {
	const themeContents: string[] = [];

	for (const theme of themes) {
		const content = await ejs.renderFile(PATH.CSS_THEME_TEMPLATE, {
			name: theme.name,
			variables: Object.entries(
				mapper(generateDesignToken(theme.token, [globalToken, theme.token])),
			),
		});

		themeContents.push(content);
	}
	const formattedTheme = await prettier.format(themeContents.join("\n"), {
		parser: "css",
	});

	await writeFile(PATH.THEME_OUTPUT, formattedTheme, "utf-8");
}

async function generateGlobalThemeVariables() {
	const contents = await ejs.renderFile(PATH.GLOBAL_THEME_VARIABLES_TEMPLATE, {
		variables: Object.entries(
			mapper(generateDesignToken(globalToken, [globalToken])),
		),
	});
	const formattedTheme = await prettier.format(contents, {
		parser: "css",
	});
	await writeFile(PATH.GLOBAL_THEME_VARIABLES_OUTPUT, formattedTheme, "utf-8");
}

async function generateThemeVariablesInterface(anyThemeToken: Token) {
	const emptyContent = await ejs.renderFile(PATH.THEME_INTERFACE_TEMPLATE, {
		variables: Object.entries(
			mapper(generateDesignToken(anyThemeToken, [globalToken, anyThemeToken])),
		),
	});

	const formattedTheme = await prettier.format(emptyContent, {
		parser: "typescript",
	});
	await writeFile(PATH.THEME_INTERFACE_OUTPUT, formattedTheme, "utf-8");
}

async function generateThemeConstants(anyThemeToken: Token) {
	const constantsContent = await ejs.renderFile(PATH.THEME_CONSTANTS_TEMPLATE, {
		variables: Object.entries(
			mapper(generateDesignToken(anyThemeToken, [globalToken, anyThemeToken])),
		),
	});

	const formattedTheme = await prettier.format(constantsContent, {
		parser: "typescript",
	});
	await writeFile(PATH.THEME_CONSTANTS_OUTPUT, formattedTheme, "utf-8");
}

async function generate() {
	const themes = await getThemes();

	if (themes.length === 0) throw new Error(`테마를 찾을 수 없습니다.`);

	await generateToken(themes);
	await generateThemeVariablesInterface(themes[0].token);
	await generateThemeConstants(themes[0].token);
	await generateGlobalThemeVariables();
}

generate();

async function getThemes() {
	const { found: tokenFilePaths } = new GlobSync(
		PATH.TOKEN_DIR + `/**/*.token.json`,
	);
	const tokens = await Promise.all(
		tokenFilePaths.map((path) => readFile(path, { encoding: "utf-8" })),
	);
	const themes: Theme[] = [];

	for (const stringifiedToken of tokens) {
		themes.push(JSON.parse(stringifiedToken));
	}

	return themes;
}
