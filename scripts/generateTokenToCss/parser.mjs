import { formatBoxShadowToken, formatTextToken } from "./formatter.mjs";
import { validateTokenObj } from "./utils/validators.mjs";

const parseToken = (tokenType, tokenValue) => (baseToken) => {
	switch (tokenType) {
		case `color`:
		case `demention`:
		case `fontWeight`:
		case `number`:
			return parseTokenValue(tokenValue);
		case `shadow`:
			return formatBoxShadowToken(tokenValue)(parseTokenValue);
		case `heading`:
		case `text`:
			return formatTextToken(tokenValue)(parseTokenValue);
		default:
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
