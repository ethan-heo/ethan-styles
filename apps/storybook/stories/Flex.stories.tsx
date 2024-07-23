import type { Meta, StoryObj } from "@storybook/react";
import { Button, Flex } from "@ethanheo/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Design System/Flex",
	component: Flex,
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
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		justify: {
			control: "select",
			description: "가로 정렬을 위해 사용합니다.",
			defaultValue: "flex-start",
			options: [
				"flex-start",
				"flex-end",
				"center",
				"space-between",
				"space-around",
				"space-evenly",
				"space-evenly",
			],
		},
		align: {
			control: "select",
			description: "세로 정렬을 위해 사용합니다.",
			defaultValue: "flex-start",
			options: ["flex-start", "flex-end", "center"],
		},
		vertical: {
			control: "boolean",
			description: "세로 배치를 위해 사용합니다.",
			defaultValue: false,
		},
		reverse: {
			control: "boolean",
			description: "반대로 배치하기 위해 사용합니다.",
			defaultValue: false,
		},
		wrap: {
			control: "boolean",
			description: "단락을 나눌 때 사용합니다.",
			defaultValue: false,
		},
		gap: {
			control: "select",
			description: "사이 간격을 정의할 때 사용합니다.",
			options: ["extra-large", "large", "medium", "small", "extra-small"],
		},
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Default: Story = {
	render: (props) => {
		return (
			<Flex
				{...props}
				style={{
					width: "400px",
					padding: "var(--spacing-small)",
					borderRadius: "var(--border-radius-extra-small)",
					border: "var(--border-solid-thin) var(--color-text)",
				}}
			>
				<Button>button1</Button>
				<Button>button2</Button>
				<Button>button3</Button>
				<Button>button4</Button>
			</Flex>
		);
	},
};
