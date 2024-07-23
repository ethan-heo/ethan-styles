import type { Preview } from "@storybook/react";
import "@ethanheo/ui/styles/light-theme.css";
import "@ethanheo/ui/styles/components.css";

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		options: {
			storySort: {
				order: ["Introduction", "Design System"],
			},
		},
	},
};

export default preview;
