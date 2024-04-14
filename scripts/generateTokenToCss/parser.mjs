import {
	formatBoxShadowToken,
	formatColorToken,
	formatFontWeightToken,
	formatLineHeightToken,
	formatMarginToken,
	formatTextToken,
} from "./formatter.mjs";
import { validateTokenObj } from "./utils/validators.mjs";

const parseToken = (tokenType, tokenValue) => (baseToken) => {
	switch (tokenType) {
		case `color`:
			return formatColorToken(tokenValue)(parseTokenValue);
		case `fontSize`:
			return formatFontWeightToken(tokenValue)(parseTokenValue);
		case `margin`:
			return formatMarginToken(tokenValue)(parseTokenValue);
		case `lineHeight`:
			return formatLineHeightToken(tokenValue)(parseTokenValue);
		case `fontWeight`:
			return formatFontWeightToken(tokenValue)(parseTokenValue);
		case `shadow`:
			return formatBoxShadowToken(tokenValue)(parseTokenValue);
		case `heading`:
		case `text`:
			return formatTextToken(tokenValue)(parseTokenValue);
		default:
			throw new TypeError(`정의된 토큰이 아닙니다. ${tokenType}`);
	}

	function parseTokenValue(tokenValue) {
		const isTokenRef = (tokenValue) => /(^\{).*?(\}$)/.test(tokenValue);

		if (isTokenRef(tokenValue)) {
			return parseTokenRef(tokenValue);
		} else {
			return tokenValue;
		}
	}

	function parseTokenRef(tokenRef) {
		let tokenKeys = tokenRef.slice(1, tokenRef.length - 1).split(".");

		const result = tokenKeys.reduce(
			(_baseToken, tokenKey) => _baseToken[tokenKey],
			baseToken,
		);

		if (!validateTokenObj(result)) {
			throw new TypeError(`토큰값이 존재하지 않습니다. [${tokenRef}]`);
		}

		return result.$value;
	}
};

export default parseToken;
