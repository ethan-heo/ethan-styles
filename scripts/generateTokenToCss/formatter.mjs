import getType from "./utils/getType.mjs";

export const formatBoxShadowToken = (tokenValue) => (parser) => {
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

export const formatTextToken = (tokenValue) => (parser) => {
	return Object.entries(tokenValue)
		.map(([name, value]) => {
			return `${name}: ${parser(value)};`;
		})
		.join("\n");
};

export const formatFontWeightToken = (tokenValue) => (parser) => {
	const value = parser(tokenValue);

	return `font-weight: ${value};`;
};

export const formatColorToken = (tokenValue) => (parser) => {
	const value = parser(tokenValue);

	return `color: ${value};`;
};

export const formatLineHeightToken = (tokenValue) => (parser) => {
	const value = parser(tokenValue);

	return `line-height: ${value};`;
};

export const formatMarginToken = (tokenValue) => (parser) => {
	const value = parser(tokenValue);

	return `margin: ${value};`;
};
