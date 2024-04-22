import getType from "./utils/getType.mjs";
import { validateTokenObj, validateTokenValue } from "./utils/validators.mjs";

const parseRule = (baseToken) => (tokenName, tokenValue) => {
	const TOKEN_REF_REGEXP = /\{[^{}]*\}/g;

	if (TOKEN_REF_REGEXP.test(tokenName)) {
		const tokenKeys = tokenName.slice(1, tokenName.length - 1).split(".");
		const refToken = tokenKeys.reduce((token, key) => token[key], baseToken);

		if (!getType(refToken) === "object") {
			throw new Error("잘못된 형식의 토큰이거나 토큰을 찾을 수 없습니다.");
		}

		const result = {};
		const replaceOriginalValue = (result, replacer) => {
			for (const [originalTokenName, originalTokenValue] of Object.entries(
				tokenValue,
			)) {
				if (!validateTokenValue(originalTokenValue)) {
					// only one deps
					continue;
				}

				let _$value = originalTokenValue.$value;

				if (getType(_$value) === "object") {
					const _result = {};

					for (const [key, value] of Object.entries(_$value)) {
						_result[key] = replacer(value);
					}

					_$value = _result;
				} else {
					_$value = replacer(_$value);
				}

				result[originalTokenName] = {
					...originalTokenValue,
					$value: _$value,
				};
			}
		};

		if (validateTokenObj(refToken)) {
			const refTokenName = tokenName.replace(/[{}]/g, "").split(".").pop();

			replaceOriginalValue((result[refTokenName] = {}), (value) => value);
		} else {
			for (const [refTokenName, refTokenValue] of Object.entries(refToken)) {
				if (!validateTokenValue(refTokenValue)) {
					throw new Error(
						`사용할 수 없는 토큰입니다. 토큰 객체만 사용가능 합니다. [${refTokenName}]`,
					);
				}

				replaceOriginalValue((result[refTokenName] = {}), (value) => {
					return value.replace(tokenName, () => {
						return `{${tokenName.replace(/[{}]/g, "")}.${refTokenName}}`;
					});
				});
			}
		}

		return result;
	} else {
		return tokenValue;
	}
};

export default parseRule;
