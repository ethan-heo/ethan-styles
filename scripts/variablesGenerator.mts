import generate from './generate.mjs';
import getCSSVariable from './helpers/getCSSVariable.mjs';

const OUTPUT_PATH = '../files';
const CSS_VARIABLES_TEMPLATE_PATH = '../templates/css.variables.ejs';
const BASE_TOKEN_PATH = '../tokens/base.tokens.json';

generate([
    {
        input: {
            token: '../tokens/dark.theme.tokens.json',
            template: CSS_VARIABLES_TEMPLATE_PATH,
        },
        output: {
            filename: 'dark.theme.css',
            extname: 'css',
            path: OUTPUT_PATH,
        },
        baseToken: BASE_TOKEN_PATH,
        ejsHelper: {
            getCSSVariable,
        },
    },
    {
        input: {
            token: '../tokens/light.theme.tokens.json',
            template: CSS_VARIABLES_TEMPLATE_PATH,
        },
        output: {
            filename: 'light.theme.css',
            extname: 'css',
            path: OUTPUT_PATH,
        },
        baseToken: BASE_TOKEN_PATH,
        ejsHelper: {
            getCSSVariable,
        },
    },
]);
