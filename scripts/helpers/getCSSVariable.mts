import { EJSTemplateTokenData, TokenObj } from 'generate-design-token';
import normalizeTokenValue from './normalizeTokenValue.mjs';

const getCSSVariable = (tokenData: EJSTemplateTokenData) => {
    const prop = tokenData.props.join('-');
    const normalizedValue = normalizeTokenValue(tokenData.value as TokenObj);
    let result = '';

    switch (true) {
        case typeof normalizedValue === 'string':
        case typeof normalizedValue === 'number':
            result = `--${prop}: ${normalizedValue};`;
            break;
        case typeof normalizedValue === 'object': {
            result = Object.entries(normalizedValue)
                .map(([key, value]) => `--${prop}-${key}: ${value};`)
                .join('');
            break;
        }
    }

    return result;
};

export default getCSSVariable;
