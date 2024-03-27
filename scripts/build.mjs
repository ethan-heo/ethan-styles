import { rollup, watch } from "rollup";
import rollupOptions from "../configs/rollup.config.mjs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const bundlers = [];
const options = [rollupOptions.reactOption, rollupOptions.customUiOption];
const argv = yargs(hideBin(process.argv)).parse();
let watcher;

try {
	if (argv.watch) {
		watcher = watch(
			options.map((option) => ({
				...option,
				watch: rollupOptions.watchOption,
			})),
		);

		watcher.on("event", (e) => {
			switch (e.code) {
				case "START":
					console.log("Build started...");
					break;
				case "BUNDLE_START":
					console.log(`Building ${e.input}...`);
					break;
				case "BUNDLE_END":
					console.log(`Finished building ${e.input} in ${e.duration}ms.`);
					break;
				case "END":
					console.log("Build completed.");
					break;
				case "ERROR":
				case "FATAL":
					throw e.error;
			}
		});
	} else {
		for (const option of options) {
			const bundle = await rollup(option);

			await bundle.write(option.output);

			bundlers.push(bundle);
		}

		bundlers.forEach(async (bundler) => await bundler.close());
		console.log(`Build success!`);
	}
} catch (e) {
	console.error(e);
	if (argv.watch) {
		watcher.close();
	} else {
		bundlers.forEach(async (bundler) => await bundler.close());
	}
}
