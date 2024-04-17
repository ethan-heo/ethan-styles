import getType from "./utils/getType.mjs";

const formatBoxShadowToken = (tokenValue) => {
	const tokenValueType = getType(tokenValue);
	const expression = ["offsetX", "offsetY", "blur", "spread"];

	const formatter = (shadowObj) =>
		expression
			.map((exp) => shadowObj[exp])
			.filter(Boolean)
			.join(" ");

	if (tokenValueType !== "object") {
		throw new TypeError(`Shadow token의 타입은 Object 형식만 허용합니다.`);
	}

	return `box-shadow: ${formatter(tokenValue)};`;
};

const formatTextToken = (tokenValue) => {
	return Object.entries(tokenValue)
		.map(([name, value]) => {
			return `${name}: ${value};`;
		})
		.join("");
};

const formatFontWeightToken = (tokenValue) => {
	return `font-weight: ${tokenValue};`;
};

const formatColorToken = (tokenValue) => {
	return `color: ${tokenValue};`;
};

const formatLineHeightToken = (tokenValue) => {
	return `line-height: ${tokenValue};`;
};

const formatMarginToken = (tokenValue) => {
	return `margin: ${tokenValue};`;
};

const formatFontSizeToken = (tokenValue) => {
	return `font-size: ${tokenValue};`;
};

const formatToken = (token) => {
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

	return formatter(token.$value);
};

export default formatToken;
