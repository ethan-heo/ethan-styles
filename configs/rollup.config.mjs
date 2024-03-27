import path from "./path.config.mjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const reactOption = {
	input: path.lib + `/react/index.ts`,
	output: {
		dir: path.dist,
		entryFileNames: `react/index.js`,
		format: `esm`,
		sourcemap: true,
	},
	plugins: [
		babel({
			babelHelpers: "bundled",
			presets: ["@babel/preset-env", "@babel/preset-react"],
		}),
		typescript({
			tsconfig: "./tsconfig.react.json",
			declaration: true,
			declarationDir: path.dist,
		}),
		peerDepsExternal(),
		postcss({
			// modules: true,
			extract: path.dist + `/styles.css`,
		}),
	],
};

const customUiOption = {
	input: path.lib + `/custom-ui/index.ts`,
	output: {
		dir: path.dist,
		entryFileNames: `custom-ui/index.js`,
		format: `esm`,
		sourcemap: true,
	},
	plugins: [
		babel({
			babelHelpers: "bundled",
			presets: ["@babel/preset-env"],
		}),
		typescript({
			tsconfig: "./tsconfig.custom-ui.json",
			declaration: true,
			declarationDir: path.dist,
		}),
		postcss({
			// modules: true,
			extract: path.dist + `/styles.css`,
		}),
	],
};

const watchOption = {
	include: path.lib + `/**`,
	exclude: `node_modules/**`,
};

export default {
	reactOption,
	customUiOption,
	watchOption,
};
