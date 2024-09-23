import path from "./path.config.mjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import copyAssets from "rollup-plugin-copy-assets";
import dts from "rollup-plugin-dts";
import atImport from "postcss-import";

const options = {
	input: path.src + `/index.ts`,
	output: {
		dir: path.dist,
		entryFileNames: `index.js`,
		format: `es`,
		sourcemap: true,
	},
	plugins: [
		babel({
			babelHelpers: "bundled",
			presets: ["@babel/preset-env", "@babel/preset-react"],
		}),
		peerDepsExternal(),
		postcss({
			plugins: [atImport()],
			extract: path.dist + `/tokens/components.css`,
		}),
		copyAssets({
			assets: [`/src/tokens/light-theme.css`],
		}),
		typescript(),
	],
};

const tsOptions = {
	input: path.src + `/index.ts`,
	output: {
		file: path.dist + `/index.d.ts`,
		format: `es`,
	},
	plugins: [dts()],
	external: [/\.css$/],
};

const watchOption = {
	include: path.src + `/**`,
	exclude: `node_modules/**`,
};

export default {
	options,
	tsOptions,
	watchOption,
};
