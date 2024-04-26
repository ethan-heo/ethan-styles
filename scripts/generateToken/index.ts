import globalToken from "../../design-token/global.tokens.json";
import lightThemeToken from "../../design-token/light.themes.tokens.json";
import mapper from "./mapper";
import transformer from "./transformer";

const transformedToken = transformer(lightThemeToken, [
	lightThemeToken,
	globalToken,
]);

const mappedToken = mapper(transformedToken);

console.log(JSON.stringify(mappedToken, null, 2));
