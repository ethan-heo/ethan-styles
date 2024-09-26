import path from "path";
import { GlobSync } from "glob";
import { readFile, writeFile } from "fs/promises";
import globalToken from "../../design-token/global.token.json";
import mapper from "./mapper";
import generateDesignToken from "generate-design-token";
import ejs from "ejs";
import prettier from "prettier";

async function generateToken() {
	const TOKEN_DIR_PATH = path.resolve(__dirname, "../../design-token/tokens");
	const THEME_OUTPUT_PATH = path.resolve(
		__dirname,
		"../../src/styles/theme.css",
	);
	const CSS_THEME_TEMPLATE = path.resolve(
		__dirname,
		"../../design-token/templates/css-theme.ejs",
	);
	const { found: tokenFilePaths } = new GlobSync(
		TOKEN_DIR_PATH + `/**/*.token.json`,
	);
	const tokens = await Promise.all(
		tokenFilePaths.map((path) => readFile(path, { encoding: "utf-8" })),
	);

	const themes: string[] = [];

	for (const stringifiedToken of tokens) {
		const { name, token } = JSON.parse(stringifiedToken);
		const content = await ejs.renderFile(CSS_THEME_TEMPLATE, {
			name,
			variables: Object.entries(
				mapper(generateDesignToken(token, [globalToken, token])),
			),
		});

		themes.push(content);
	}

	const formattedTheme = await prettier.format(themes.join("\n"), {
		parser: "css",
	});

	await writeFile(THEME_OUTPUT_PATH, formattedTheme, "utf-8");
}

async function generateGlobalThemeVariables() {
	const GLOBAL_THEME_VARIABLES_TEMPLATE_PATH = path.resolve(
		__dirname,
		"../../design-token/templates/global-theme-postcss-var.ejs",
	);
	const GLOBAL_THEME_VARIABLES_OUTPUT_PATH = path.resolve(
		__dirname,
		"../../src/styles/global-theme-var.css",
	);
	const contents = await ejs.renderFile(GLOBAL_THEME_VARIABLES_TEMPLATE_PATH, {
		variables: Object.entries(
			mapper(generateDesignToken(globalToken, [globalToken])),
		),
	});
	const formattedTheme = await prettier.format(contents, {
		parser: "css",
	});
	await writeFile(GLOBAL_THEME_VARIABLES_OUTPUT_PATH, formattedTheme, "utf-8");
}

async function generateThemeVariablesInterface() {
	const CREATE_THEME_TEMPLATE_PATH = path.resolve(
		__dirname,
		"../../design-token/templates/create-theme.ejs",
	);
	const THEME_INTERFACE_TEMPLATE_PATH = path.resolve(
		__dirname,
		"../../design-token/templates/theme-interface.ejs",
	);
	const THEME_INTERFACE_OUTPUT_PATH = path.resolve(
		__dirname,
		"../../src/types/css-variables.ts",
	);

	const emptyTheme = JSON.parse(
		await ejs.renderFile(CREATE_THEME_TEMPLATE_PATH),
	);
	const emptyContent = await ejs.renderFile(THEME_INTERFACE_TEMPLATE_PATH, {
		variables: Object.entries(
			mapper(
				generateDesignToken(emptyTheme.token, [globalToken, emptyTheme.token]),
			),
		),
	});

	const formattedTheme = await prettier.format(emptyContent, {
		parser: "typescript",
	});
	await writeFile(THEME_INTERFACE_OUTPUT_PATH, formattedTheme, "utf-8");
}

async function generate() {
	await generateToken();
	await generateGlobalThemeVariables();
	await generateThemeVariablesInterface();
}

generate();
