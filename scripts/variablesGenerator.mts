import generate from './generate.mjs';
import getCSSVariable from './helpers/getCSSVariable.mjs';

const OUTPUT_PATH = '../files';
const CSS_VARIABLES_TEMPLATE_PATH = '../templates/css.variables.ejs';
const SCSS_VARIABLES_TEMPLATE_PATH = '../templates/scss.variables.ejs';
const TS_VARIABLES_TEMPLATE_PATH = '../templates/ts.variables.ejs';
const BASE_TOKEN_PATH = '../tokens/base.tokens.json';

const kebabToSnake = (value: string) => {
    return value.replace(/-/g, '_');
};

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
    {
        input: {
            token: '../tokens/dark.theme.tokens.json',
            template: SCSS_VARIABLES_TEMPLATE_PATH,
        },
        output: {
            filename: 'dark.theme.scss',
            extname: 'scss',
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
            template: SCSS_VARIABLES_TEMPLATE_PATH,
        },
        output: {
            filename: 'light.theme.scss',
            extname: 'scss',
            path: OUTPUT_PATH,
        },
        baseToken: BASE_TOKEN_PATH,
        ejsHelper: {
            getCSSVariable,
        },
    },
    {
        input: {
            token: '../tokens/dark.theme.tokens.json',
            template: TS_VARIABLES_TEMPLATE_PATH,
        },
        output: {
            filename: 'dark.theme.ts',
            extname: 'typescript',
            path: OUTPUT_PATH,
        },
        baseToken: BASE_TOKEN_PATH,
        ejsHelper: {
            getCSSVariable,
            kebabToSnake,
        },
    },
    {
        input: {
            token: '../tokens/light.theme.tokens.json',
            template: TS_VARIABLES_TEMPLATE_PATH,
        },
        output: {
            filename: 'light.theme.ts',
            extname: 'typescript',
            path: OUTPUT_PATH,
        },
        baseToken: BASE_TOKEN_PATH,
        ejsHelper: {
            getCSSVariable,
            kebabToSnake,
        },
    },
]);
