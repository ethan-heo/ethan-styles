import fs from 'fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
    TokenGroup,
    generateFile,
    generateDesignToken,
    GenerateFileOptions,
} from 'generate-design-token';

type Options = {
    input: {
        token: string;
        template: string;
    };
    output: {
        filename: string;
        path: string;
        extname: string;
    };
    baseToken?: string | string[];
} & Omit<
    GenerateFileOptions,
    'filename' | 'outputPath' | 'template' | 'extname'
>;

const __dirname = dirname(fileURLToPath(import.meta.url));

const _gen = async (options: Options) => {
    const { input, output, baseToken = [], ...generateOptions } = options;

    // 1. read token
    const tokenContent = await readFile(input.token);

    // 2. read base token all
    const baseTokens: TokenGroup[] = await getBaseTokens(baseToken);

    // 2. extract token info and base
    const token = generateDesignToken(
        toToken<TokenGroup>(tokenContent),
        baseTokens
    );

    // 3. create file
    generateFile(token, {
        filename: output.filename,
        outputPath: resolve(__dirname, output.path),
        template: { path: resolve(__dirname, input.template) },
        extname: output.extname,
        ...generateOptions,
    });
};

const generate = (options: Options | Options[]) => {
    if (Array.isArray(options)) {
        options.forEach(_gen);
    } else {
        _gen(options);
    }
};

export default generate;

async function readFile(path: string) {
    return await fs.readFile(resolve(__dirname, path), { encoding: 'utf-8' });
}
function toToken<T>(file: string) {
    return JSON.parse(file) as T;
}

async function getBaseTokens(baseTokenPath: string | string[]) {
    const result: TokenGroup[] = [];

    if (typeof baseTokenPath === 'string') {
        result.push(toToken<TokenGroup>(await readFile(baseTokenPath)));
    } else {
        if (Array.isArray(baseTokenPath)) {
            const readBaseTokens = await Promise.all(
                baseTokenPath.map(readFile)
            );

            result.push(...readBaseTokens.map(toToken<TokenGroup>));
        }
    }

    return result;
}
