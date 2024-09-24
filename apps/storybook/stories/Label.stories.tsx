import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "@ethanheo/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Design System/Form/Label",
	component: Label,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
		docs: {
			toc: {
				contentsSelector: ".sbdocs-content",
				headingSelector: "h1, h2, h3",
				title: "Table of Contents",
				disable: false,
				unsafeTocbotOptions: {
					orderedList: false,
				},
			},
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		fontSize: {
			control: "select",
			description: "텍스트 크기를 지정합니다.",
			defaultValue: "medium",
			options: ["x-large", "large", "medium", "small", "x-small"],
		},
		invalid: {
			control: "boolean",
			description: "유효하지 않음을 표시합니다.",
			defaultValue: false,
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Hello world",
	},
};
