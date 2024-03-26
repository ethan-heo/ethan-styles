import { rollup } from "rollup";
import path from "../configs/path.config.mjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const options = [
	{
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
	},
	{
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
	},
];

try {
	for (const option of options) {
		const bundle = await rollup(option);

		await bundle.write(option.output);
		await bundle.close();
	}

	console.log(`Build success!`);
} catch (e) {
	console.error(e);
}
