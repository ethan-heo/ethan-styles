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
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		variant: {
			control: "select",
			description:
				"버튼 유형을 나타냅니다.\n- **primary**: 주요한 액션을 수행할 때 사용합니다.\n- **default**: 보조적인 액션을 수행할 때 사용합니다.\n- **text**: 보조적인 액션을 수행할 때 사용합니다.",
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

export const PrimaryButton: Story = {
	parameters: {
		docs: {
			description: {
				story: "주요한 액션을 수행할 때 사용합니다.",
			},
		},
	},
	args: {
		children: "Hello world",
		variant: "primary",
		size: "medium",
		disabled: false,
		danger: false,
	},
};

export const DefaultButton: Story = {
	parameters: {
		docs: {
			description: {
				story: "보조 액션을 수행할 때 사용합니다.",
			},
		},
	},
	args: {
		children: "Hello world",
		variant: "default",
		size: "medium",
		disabled: false,
		danger: false,
	},
};

export const TextButton: Story = {
	parameters: {
		docs: {
			description: {
				story: "보조 액션을 수행할 때 사용합니다.",
			},
		},
	},
	args: {
		children: "Hello world",
		variant: "text",
		size: "medium",
		disabled: false,
		danger: false,
	},
};

export const DangerButton: Story = {
	parameters: {
		docs: {
			description: {
				story: "위험도가 있는 액션을 수행할 때 사용합니다.",
			},
		},
	},
	args: {
		children: "Hello world",
		variant: "text",
		size: "medium",
		disabled: false,
		danger: true,
	},
};

export const DisabledButton: Story = {
	parameters: {
		docs: {
			description: {
				story: "액션을 비활성화할 때 사용합니다.",
			},
		},
	},
	args: {
		children: "Hello world",
		variant: "text",
		size: "medium",
		disabled: true,
		danger: true,
	},
};
