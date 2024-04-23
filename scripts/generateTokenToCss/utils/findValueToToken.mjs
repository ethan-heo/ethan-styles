import getType from "./getType.mjs";

const findValueToToken = (tokenKeys, tokens) => {
	for (const token of tokens) {
		const foundToken = tokenKeys.reduce(
			(acc, tokenKey) => acc?.[tokenKey],
			token,
		);

		if (getType(foundToken) === "undefined") {
			continue;
		}

		const TOKEN_REF_REGEXP = /\{[^{}]*\}/g;

		if (TOKEN_REF_REGEXP.test(foundToken.$value)) {
			const tokenKeys = foundToken.$value
				.slice(1, foundToken.$value.length - 1)
				.split(".");
			return findValueToToken(tokenKeys, tokens);
		}

		return foundToken;
	}
};

export default findValueToToken;
