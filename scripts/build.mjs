import { rollup } from "rollup";
import path from "../configs/path.config.mjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

let bundle;

const outputOptions = [
	{
		dir: path.dist,
		entryFileNames: `[name]/index.esm.js`,
		format: `esm`,
		sourcemap: true,
	},
];

try {
	bundle = await rollup({
		input: {
			[`react`]: path.lib + `/index.react.ts`,
			[`custom`]: path.lib + `/index.custom.ts`,
		},
		plugins: [
			babel({
				babelHelpers: "bundled",
				presets: ["@babel/preset-env", "@babel/preset-react"],
			}),
			typescript(),
			peerDepsExternal(),
			postcss({
				// modules: true,
				extract: path.dist + `/styles.css`,
			}),
		],
	});

	outputOptions.map(bundle.write);

	console.log(`Build success!`);
} catch (e) {
	console.error(e);
} finally {
	if (bundle) {
		bundle.close();
	}
}
