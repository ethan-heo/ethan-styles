import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import tsconfigPath from "vite-tsconfig-paths";

const config: StorybookConfig = {
	stories: [
		"../lib/**/*.mdx",
		"../lib/**/*.stories.@(js|jsx|mjs|ts|tsx)",
		"../stories/**/*.mdx",
		"../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	addons: [
		"@storybook/addon-onboarding",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/react-vite",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	viteFinal: (config) => {
		return mergeConfig(config, {
			plugins: [tsconfigPath()],
			server: {
				watch: {
					paths: ["../dist/**"],
					// includes: ["../dist/**"],
				},
			},
		});
	},
};
export default config;
