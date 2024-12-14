import { EJSTemplateTokenData, TokenObj } from 'generate-design-token';
import normalizeTokenValue from './normalizeTokenValue.mjs';

const getCSSVariable = (tokenData: EJSTemplateTokenData, separator = '-') => {
    const normalizedValue = normalizeTokenValue(tokenData.value as TokenObj);
    const result: {
        key: string;
        value: string | number | [string, string | number][];
    } = {
        key: tokenData.props.join(separator),
        value: '',
    };

    switch (true) {
        case typeof normalizedValue === 'string':
        case typeof normalizedValue === 'number':
            result.value = `${normalizedValue}`;
            break;
        case typeof normalizedValue === 'object': {
            result.value = Object.entries(normalizedValue);
            break;
        }
    }

    return result;
};

export default getCSSVariable;
