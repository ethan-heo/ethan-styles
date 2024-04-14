import getType from "./utils/getType.mjs";

const formatBoxShadowToken = (tokenValue, parser) => {
	const tokenValueType = getType(tokenValue);
	const expression = ["offsetX", "offsetY", "blur", "spread"];

	const formatter = (shadowObj) =>
		expression
			.map((exp) => parser(shadowObj[exp]))
			.filter(Boolean)
			.join(" ");

	switch (true) {
		case tokenValueType === "array":
			return `box-shadow: ${tokenValue.map(formatter).join(", ")};`;
		case tokenValueType === "object":
			return `box-shadow: ${formatter(tokenValue)};`;
		default:
			throw new TypeError(
				`Shadow token의 타입은 Array 또는 Object 형식만 허용합니다.`,
			);
	}
};

const formatTextToken = (tokenValue, parser) => {
	return Object.entries(tokenValue)
		.map(([name, value]) => {
			return `${name}: ${parser(value)};`;
		})
		.join("\n");
};

const formatFontWeightToken = (tokenValue, parser) => {
	return `font-weight: ${parser(tokenValue)};`;
};

const formatColorToken = (tokenValue, parser) => {
	return `color: ${parser(tokenValue)};`;
};

const formatLineHeightToken = (tokenValue, parser) => {
	return `line-height: ${parser(tokenValue)};`;
};

const formatMarginToken = (tokenValue, parser) => {
	return `margin: ${parser(tokenValue)};`;
};

const formatFontSizeToken = (tokenValue, parser) => {
	return `font-size: ${parser(tokenValue)};`;
};

const formatToken = (token, parser) => {
	const formatter = (() =>
		({
			boxShadow: formatBoxShadowToken,
			text: formatTextToken,
			fontWeight: formatFontWeightToken,
			fontSize: formatFontSizeToken,
			color: formatColorToken,
			lineHeight: formatLineHeightToken,
			margin: formatMarginToken,
		})[token.$type])();

	if (getType(formatter) === "undefined") {
		throw new Error(`Formatter가 존재하지 않습니다. [${token.$type}]`);
	}

	return formatter(token.$value, parser);
};

export default formatToken;
