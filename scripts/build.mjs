import { rollup } from "rollup";
import path from "path";
import typescript from "@rollup/plugin-typescript";

let bundle;
const __dirname = path.resolve();

const outputOptions = [
	{
		file: path.join(__dirname, "dist/bundle.js"),
		format: "esm",
	},
];

try {
	bundle = await rollup({
		input: path.join(__dirname, "src/index.ts"),
		plugins: [typescript()],
	});

	outputOptions.map(bundle.write);

	console.log("Build success!");
} catch (e) {
	console.error(e);
} finally {
	if (bundle) {
		bundle.close();
	}
}
