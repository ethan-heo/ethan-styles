import globalToken from "../../design-token/global.tokens.json";
import lightThemeToken from "../../design-token/light.themes.tokens.json";
import creator from "./creator";
import { Token } from "./generateToken.token";
import mapper from "./mapper";
import generateDesignToken from "generate-design-token";

type GenerateTokenOptions = {
	token: Token;
	baseTokens: Token[];
	fileName: string;
};

const generateToken = async ({
	token,
	baseTokens,
	fileName,
}: GenerateTokenOptions) => {
	await creator(mapper(generateDesignToken(token, baseTokens)), fileName);
};

generateToken({
	token: globalToken,
	baseTokens: [globalToken],
	fileName: "global",
});
generateToken({
	token: lightThemeToken,
	baseTokens: [lightThemeToken, globalToken],
	fileName: "light-theme",
});
