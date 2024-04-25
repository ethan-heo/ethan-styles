import { SequenceFunction, Token, TokenObj } from "./generateToken.token";
import findToken from "./utils/findToken";
import isTokenObj from "./utils/isTokenObj";
import isTransformWord from "./utils/isTransformWord";
import iterateToken from "./utils/iterateToken";
import parseTokenRef from "./utils/parseTokenRef";

const normalizeToken = iterateToken<Map<string, TokenObj>>({
	data: new Map(),
	foundTokenObjCallback: (tokenNames, token, data) => {
		data.set(tokenNames.join("/"), token);
	},
});

const findTokenToBaseTokens = (baseTokens: Token[], tokenRef: string[]) => {
	for (const baseToken of baseTokens) {
		const foundToken = findToken(baseToken, tokenRef);

		if (foundToken) {
			return foundToken;
		}
	}
};

const transformer: SequenceFunction = (token, baseTokens) => {
	// 데이터 구조를 일반화를 먼저 진행해야 이후 작업이 수월 할 듯.

	// console.log(token);
	const normalizedToken = normalizeToken(token);
	const referredTokens = new Map();

	for (const [key] of normalizedToken[Symbol.iterator]()) {
		const matcher = key.match(/\{[^{}]*\}/);

		if (matcher !== null) {
			const [referredTokenName] = matcher;
			const tokenRef = parseTokenRef(referredTokenName);

			referredTokens.set(
				referredTokenName,
				findTokenToBaseTokens(baseTokens, tokenRef),
			);
		}
	}

	for (const [referredTokenName, referredToken] of referredTokens[
		Symbol.iterator
	]()) {
		for (const [tokenName, token] of normalizedToken[Symbol.iterator]()) {
			if (!tokenName.includes(referredTokenName)) {
				continue;
			}

			if (isTokenObj(referredToken)) {
				const tokenRef = parseTokenRef(referredTokenName);
				normalizedToken.set(
					tokenName.replace(referredTokenName, tokenRef.pop()!),
					{
						...token,
						$value: token.$value.replace("{$value}", referredToken.$value),
					},
				);
			} else {
				iterateToken({
					data: null,
					foundTokenObjCallback: (_tokenNames, _token) => {
						normalizedToken.set(
							tokenName.replace(referredTokenName, _tokenNames.join("/")),
							{
								...token,
								$value: token.$value.replace("{$value}", _token.$value),
							},
						);
					},
				})(referredToken);
			}

			normalizedToken.delete(tokenName);
		}
	}

	const result = {};

	for (const [tokenNames, tokenObj] of normalizedToken[Symbol.iterator]()) {
		let target = result;
		const _splitTokenNames = tokenNames.split("/");
		const targetName = _splitTokenNames.pop()!;

		for (const tokenName of _splitTokenNames) {
			target = target[tokenName] ??= {};
		}

		target[targetName] = tokenObj;
	}

	console.log(result);

	return result;
};

export default transformer;
