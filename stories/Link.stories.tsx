import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "@ethanheo/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Design System/Link",
	component: Link,
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
		variant: {
			control: "select",
			description: "텍스트 색상을 정의할 때 사용합니다.",
			defaultValue: "default",
			options: [
				"primary",
				"secondary",
				"accent",
				"success",
				"warning",
				"error",
				"default",
			],
		},
		italic: {
			control: "boolean",
			description: "문맥적 표현을 위해 사용합니다.",
			defaultValue: false,
		},
		underline: {
			control: "boolean",
			description: "문맥적 표현을 위해 사용합니다.",
			defaultValue: false,
		},
		del: {
			control: "boolean",
			description: "문맥적 표현을 위해 사용합니다.",
			defaultValue: false,
		},
		mark: {
			control: "boolean",
			description: "문맥적 표현을 위해 사용합니다.",
			defaultValue: false,
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: "Hello world",
		href: "https://www.google.com",
	},
};
