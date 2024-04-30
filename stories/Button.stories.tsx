import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
// import { Button } from "./Button";
import { Button } from "@ethanheo/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Example/Button",
	component: Button,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: "centered",
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ["autodocs"],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		variant: { control: "color" },
	},
	// Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		variant: "primary",
		children: "Button",
	},
};

export const Secondary: Story = {
	args: {
		variant: "accent",
		children: "Button",
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		children: "Button",
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		children: "Button",
	},
};

export const error: Story = {
	args: {
		variant: "error",
		children: "Button",
	},
};

export const text: Story = {
	args: {
		variant: "text",
		children: "Button",
	},
};
export const XSmall: Story = {
	args: {
		variant: "text",
		size: "x-small",
		children: "Button",
	},
};
export const Small: Story = {
	args: {
		variant: "text",
		size: "small",
		children: "Button",
	},
};
export const Medium: Story = {
	args: {
		variant: "text",
		size: "medium",
		children: "Button",
	},
};
export const Large: Story = {
	args: {
		variant: "text",
		size: "large",
		children: "Button",
	},
};
export const XLarge: Story = {
	args: {
		variant: "text",
		size: "x-large",
		children: "Button",
	},
};
