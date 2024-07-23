import path from "./path.config.mjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import copyAssets from "rollup-plugin-copy-assets";

const options = {
	input: path.src + `/index.ts`,
	output: {
		dir: path.dist,
		entryFileNames: `index.js`,
		format: `esm`,
		sourcemap: true,
	},
	plugins: [
		babel({
			babelHelpers: "bundled",
			presets: ["@babel/preset-env", "@babel/preset-react"],
		}),
		typescript({
			tsconfig: "./tsconfig.ui.json",
			declaration: true,
			declarationDir: path.dist,
		}),
		peerDepsExternal(),
		postcss({
			extract: path.dist + `/tokens/components.css`,
		}),
		copyAssets({
			assets: [`/src/tokens/light-theme.css`],
		}),
	],
};

const watchOption = {
	include: path.src + `/**`,
	exclude: `node_modules/**`,
};

export default {
	options,
	watchOption,
};
