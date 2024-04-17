import getType from "./utils/getType.mjs";
import { validateTokenObj } from "./utils/validators.mjs";

const parseToken = (baseToken) => (token) => {
	if (getType(token.$value) === "object") {
		const _value = {};

		for (const [name, value] of Object.entries(token.$value)) {
			_value[name] = parseTokenValue(value);
		}

		return {
			...token,
			$value: _value,
		};
	} else {
		return {
			...token,
			$value: parseTokenValue(token.$value),
		};
	}

	function parseTokenValue(tokenValue) {
		const TOKEN_REF_REGEXP = /\{[^{}]*\}/g;

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
