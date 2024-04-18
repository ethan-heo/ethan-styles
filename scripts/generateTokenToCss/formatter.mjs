import getType from "./utils/getType.mjs";

const formatBoxShadow = (tokenValue) => {
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

const formatFontWeight = (tokenValue) => {
	return `font-weight: ${tokenValue};`;
};

const formatColor = (tokenValue) => {
	return `color: ${tokenValue};`;
};

const formatLineHeight = (tokenValue) => {
	return `line-height: ${tokenValue};`;
};

const formatMargin = (tokenValue) => {
	return `margin: ${tokenValue};`;
};

const formatFontSize = (tokenValue) => {
	return `font-size: ${tokenValue};`;
};

const formatToken = ({ name, token, use }) => {
	const isComposition = token.$type === "composition";

	switch (use) {
		case "variables": {
			if (isComposition) {
				return Object.entries(token.$value)
					.map(([_name, _value]) => `--${name}-${_name}: ${_value};`)
					.join("");
			} else {
				return `--${name}: ${token.$value};`;
			}
		}
		case "class": {
			let result = "";

			if (isComposition) {
				result = Object.entries(token.$value)
					.map(([_name, _value]) => `${_name}: ${_value};`)
					.join("");
			} else {
				const hasProperty = !!token.$property;

				if (!hasProperty) {
					throw new Error(
						`$type 속성이 composition이 아닌 경우 class 형식으로 사용할 때는 반드시 property 속성을 지정해주어야 합니다.`,
					);
				}

				const formatter = (() =>
					({
						boxShadow: formatBoxShadow,
						fontWeight: formatFontWeight,
						fontSize: formatFontSize,
						color: formatColor,
						lineHeight: formatLineHeight,
						margin: formatMargin,
					})[token.$property])();

				if (getType(formatter) === "undefined") {
					throw new Error(`Formatter가 존재하지 않습니다. [${token.$type}]`);
				}

				result = formatter(token.$value);
			}

			result = `.${name}{${result}}`;

			return result;
		}
		default:
			throw new Error(`정의되지 않은 사용 형식입니다. [${use}]`);
	}
};

export default formatToken;
