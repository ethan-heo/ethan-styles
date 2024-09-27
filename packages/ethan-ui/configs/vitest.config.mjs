import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
	test: {
		cache: false,
		environment: "jsdom",
		setupFiles: path.resolve(__dirname, "./vitest.setup.mjs"),
	},
});
