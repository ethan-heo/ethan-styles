import globalToken from "../../design-token/global.tokens.json";
import lightThemeToken from "../../design-token/light.themes.tokens.json";
import mapper from "./mapper";
import parser from "./parser";
import transformer from "./transformer";

const transformedToken = transformer(lightThemeToken, [
	lightThemeToken,
	globalToken,
]);

const mappedToken = mapper(transformedToken);

const parsedToken = parser(mappedToken, [lightThemeToken, globalToken]);

console.log(JSON.stringify(parsedToken, null, 2));
