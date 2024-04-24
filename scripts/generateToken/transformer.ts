import { SequenceFunction, Token, TokenObj } from "./generateToken.token";
import findToken from "./utils/findToken";
import isTokenObj from "./utils/isTokenObj";
import isTransformWord from "./utils/isTransformWord";
import iterateToken from "./utils/iterateToken";
import parseTokenRef from "./utils/parseTokenRef";

const transformer: SequenceFunction = (token, baseTokens) => {
	// token을 순회하는 로직이 필요함
	// 1. 참조 형식의 토큰 이름이 지정되어 있다면 변환작업을 진행한다.
	// 2. 참조할 토큰을 찾는다.
	// 3. 참조 형식으로 지정된 자식 토큰은 참조 토큰이거나 참조 구성 토큰일 수 있다.
	// 4. 자식 토큰은 참조 토큰의 하위 구성 형식으로 재조정 되도록 만든다.

	const assignTokenValue = (
		data: Record<string, Token | TokenObj>,
		tokenNames: string[],
		token: Token | TokenObj,
	) => {
		for (const tokenName of tokenNames) {
			if (!data[tokenName]) {
				data[tokenName] = {};
			}

			data[tokenName] = token;
		}
	};

	const transformToken = iterateToken({
		data: {},
		iterateCallback: (tokenNames, token, data) => {
			const tokenName = tokenNames[tokenNames.length - 1];

			if (isTransformWord(tokenName)) {
				const tokenRef = parseTokenRef(tokenName);
				const referredToken = baseTokens.find((token) =>
					findToken(token, tokenRef),
				);

				if (referredToken === undefined) {
					throw new Error(`정의되지 않은 토큰입니다. [${tokenName}]`);
				}

				const transformTokenValue = iterateToken({
					data: {},
					foundTokenObjCallback: (tokenNames, token, data) => {},
				});

				if (isTokenObj(referredToken)) {
				} else {
					assignTokenValue(
						data,
						tokenNames,
						transformTokenValue(referredToken),
					);
				}
			} else {
				assignTokenValue(data, tokenNames, token);
			}
		},
	});

	return transformToken(token);
};

export default transformer;
