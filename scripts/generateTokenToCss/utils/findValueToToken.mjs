import getType from "./getType.mjs";

const findValueToToken = (tokenKeys, tokens) => {
	for (const token of tokens) {
		const foundToken = tokenKeys.reduce(
			(acc, tokenKey) => acc[tokenKey],
			token,
		);

		if (getType(foundToken) !== "undefined") {
			return foundToken;
		}
	}
};

export default findValueToToken;
