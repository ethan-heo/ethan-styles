import fs from 'fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
    TokenGroup,
    generateFile,
    generateDesignToken,
    GenerateContentsOptions,
} from 'generate-design-token';

type Options = {
    templatePath: string;
    outputPath: string;
    tokenPath: string | string[];
    extname: string;
    baseToken?: string | string[];
} & Omit<GenerateContentsOptions, 'template' | 'extname'>;

type TokenInfo = {
    theme: string;
    token: TokenGroup;
};

const __dirname = dirname(fileURLToPath(import.meta.url));

const generate = async (options: Options) => {
    const {
        templatePath,
        outputPath,
        tokenPath,
        extname,
        baseToken,
        ...generateOptions
    } = options;
    const tokenPaths = Array.isArray(tokenPath) ? tokenPath : [tokenPath];

    // 1. read files
    const tokenContents = await Promise.all(tokenPaths.map(readFile));

    // 2. set base token
    const baseTokens: TokenGroup[] = [];

    if (typeof baseToken === 'string') {
        baseTokens.push(toToken<TokenGroup>(await readFile(baseToken)));
    } else {
        if (Array.isArray(baseToken)) {
            const readBaseTokens = await Promise.all(baseToken.map(readFile));

            baseTokens.push(...readBaseTokens.map(toToken<TokenGroup>));
        }
    }

    // 2. extract token info and base
    const tokens = tokenContents.reduce((acc, content) => {
        const token = toToken<TokenGroup>(content);

        if (typeof token.$theme !== 'string') {
            throw new Error(`Invalid token theme: ${token.$theme}`);
        }

        acc.push({
            theme: token.$theme,
            token: generateDesignToken(token, baseTokens),
        });

        return acc;
    }, [] as TokenInfo[]);

    // 3. create file

    tokens.forEach(({ theme, token }) => {
        generateFile(token, {
            filename: `${theme}.${extname}`,
            outputPath: resolve(__dirname, outputPath),
            template: { path: resolve(__dirname, templatePath) },
            ...generateOptions,
        });
    });
};

export default generate;

async function readFile(path: string) {
    return await fs.readFile(resolve(__dirname, path), { encoding: 'utf-8' });
}
function toToken<T>(file: string) {
    return JSON.parse(file) as T;
}
