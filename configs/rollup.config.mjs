import path from "./path.config.mjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const options = {
	input: path.src + `/index.ts`,
	output: {
		dir: path.lib,
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
			declarationDir: path.lib,
		}),
		peerDepsExternal(),
		postcss({
			// modules: true,
			extract: path.lib + `/styles.css`,
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
