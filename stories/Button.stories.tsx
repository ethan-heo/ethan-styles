import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ethanheo/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Design System/Button",
	component: Button,
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
	// tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		variant: {
			control: "select",
			description: "버튼 유형을 나타냅니다.",
			defaultValue: "medium",
			options: ["primary", "default", "text"],
		},
		size: {
			control: "select",
			description: "버튼의 크기를 지정할 때 사용합니다.",
			defaultValue: "medium",
			options: ["x-large", "large", "medium", "small", "x-small"],
		},
		disabled: {
			control: "boolean",
			description: "액션 수행을 비활성화 할 때 사용합니다.",
			defaultValue: false,
		},
		danger: {
			control: "boolean",
			description: "위험한 액션을 수행할 때 사용합니다.",
			defaultValue: false,
		},
	},
	args: {
		onClick: () => console.log("clicked"),
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
	args: {
		children: "Hello world",
		variant: "default",
		size: "medium",
		disabled: false,
		danger: false,
	},
};
