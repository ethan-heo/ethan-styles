import { Token, TokenObj } from "../generateToken.token";
import isTokenObj from "./isTokenObj";
import transformTokenToArray from "./transformTokenToArray";

type IterateTokenOptions<Data> = {
	data: Data;
	foundTokenObjCallback?: (
		tokenNames: string[],
		token: TokenObj,
		data: IterateTokenOptions<Data>["data"],
	) => void;
	iterateCallback?: (
		tokenNames: string[],
		token: Token | TokenObj,
		data: IterateTokenOptions<Data>["data"],
	) => void;
};

const iterateToken =
	<Data>(options: IterateTokenOptions<Data>) =>
	(token: Token) => {
		let stack = transformTokenToArray(token);
		const tokenNames: string[] = [];

		while (stack.length) {
			const [_tokenName, _tokenValue] = stack.shift()!;

			tokenNames.push(_tokenName);

			options.iterateCallback?.(tokenNames, _tokenValue, options.data);

			if (isTokenObj(_tokenValue)) {
				options.foundTokenObjCallback?.(tokenNames, _tokenValue, options.data);
				tokenNames.pop();
			} else {
				stack = [...transformTokenToArray(_tokenValue), ...stack];
			}
		}

		return options.data;
	};

export default iterateToken;
