import formatToken from "./formatter.mjs";
import { validateTokenObj } from "./utils/validators.mjs";

const parseToken = (token, baseToken) => {
	const TOKEN_REF_REGEXP = /\{[^{}]*\}/g;

	return formatToken(token, parseTokenValue);

	function parseTokenValue(tokenValue) {
		if (TOKEN_REF_REGEXP.test(tokenValue)) {
			return tokenValue.replace(TOKEN_REF_REGEXP, (matcher) => {
				let tokenKeys = matcher.slice(1, matcher.length - 1).split(".");

				const result = tokenKeys.reduce(
					(_baseToken, tokenKey) => _baseToken[tokenKey],
					baseToken,
				);

				if (!validateTokenObj(result)) {
					throw new TypeError(`토큰값이 존재하지 않습니다. [${matcher}]`);
				}

				return result.$value;
			});
		} else {
			return tokenValue;
		}
	}
};

export default parseToken;
