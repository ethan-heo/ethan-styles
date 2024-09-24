import path from "path";
import globalToken from "../../design-token/global.tokens.json";
import lightThemeToken from "../../design-token/light.themes.tokens.json";
import creator from "./creator";
import mapper from "./mapper";
import generateDesignToken from "generate-design-token";

const TEMPLATE_PATH = path.resolve(__dirname, "../../design-token/templates");
const TEMPLATE_FILES = {
	VARIABLES: path.resolve(TEMPLATE_PATH, "variables.ejs"),
	CONSTANTS: path.resolve(TEMPLATE_PATH, "constants.ejs"),
	TYPES: path.resolve(TEMPLATE_PATH, "types.ejs"),
};
const OUTPUT_PATHS = {
	VARIABLES: path.resolve(__dirname, "../../src/tokens"),
	CONSTANTS: path.resolve(__dirname, "../../src/constants"),
	TYPES: path.resolve(__dirname, "../../src/types"),
};

const generate = async () => {
	const GENERATED_DESIGN_TOKEN_MAP = {
		GLOBAL: mapper(generateDesignToken(globalToken, [globalToken])),
		LIGHT_THEME: mapper(
			generateDesignToken(lightThemeToken, [lightThemeToken, globalToken]),
		),
	};

	await creator({
		token: GENERATED_DESIGN_TOKEN_MAP.GLOBAL,
		fileName: "global.css",
		outputPath: OUTPUT_PATHS.VARIABLES,
		templatePath: TEMPLATE_FILES.VARIABLES,
	});
	await creator({
		token: GENERATED_DESIGN_TOKEN_MAP.LIGHT_THEME,
		fileName: "light-theme.css",
		outputPath: OUTPUT_PATHS.VARIABLES,
		templatePath: TEMPLATE_FILES.VARIABLES,
	});
	await creator({
		token: GENERATED_DESIGN_TOKEN_MAP.LIGHT_THEME,
		fileName: "css-variables.d.ts",
		outputPath: OUTPUT_PATHS.TYPES,
		templatePath: TEMPLATE_FILES.TYPES,
	});
	// await creator(
	// 	mapper(generateDesignToken(globalToken, [globalToken])),
	// 	"global.css",
	// 	"variables",
	// );
	// await creator(
	// 	mapper(
	// 		generateDesignToken(lightThemeToken, [lightThemeToken, globalToken]),
	// 	),
	// 	"light-theme.css",
	// 	"variables",
	// );
	// await creator(
	// 	mapper(
	// 		generateDesignToken(lightThemeToken, [lightThemeToken, globalToken]),
	// 	),
	// 	"light-theme.constants.ts",
	// 	"constants",
	// );
};

generate();
