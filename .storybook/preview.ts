import type { Preview } from "@storybook/react";
import "../lib/tokens/light-theme.css";
import "../lib/tokens/components.css";
import "../src/styles/reset.css";
import "../src/styles/normalize.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
