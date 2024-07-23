import globalToken from "../../design-token/global.tokens.json";
import lightThemeToken from "../../design-token/light.themes.tokens.json";
import creator from "./creator";
import mapper from "./mapper";
import generateDesignToken from "generate-design-token";

const generate = async () => {
	await creator(
		mapper(generateDesignToken(globalToken, [globalToken])),
		"global.css",
		"variables",
	);
	await creator(
		mapper(
			generateDesignToken(lightThemeToken, [lightThemeToken, globalToken]),
		),
		"light-theme.css",
		"variables",
	);
	// await creator(
	// 	mapper(generateDesignToken(globalToken, [globalToken])),
	// 	"light-theme.constants.ts",
	// 	"constants",
	// );
};

generate();
