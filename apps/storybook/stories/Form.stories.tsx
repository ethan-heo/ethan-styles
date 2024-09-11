import type { Meta, StoryObj } from "@storybook/react";
import {
	Button,
	Flex,
	Form,
	Input,
	Label,
	Title,
	useFormState,
} from "@ethanheo/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: "Design System/Form",
	component: Form,
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
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: function SignupForm() {
		const { form, onSubmit } = useFormState({
			form: {
				email: {
					id: "email",
					defaultValue: "",
					validationEvent: "blur",
					validate: (value) => {
						if (!/^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)) {
							return {
								valid: false,
								msg: "이메일 형식이 아닙니다.",
							};
						}

						return {
							valid: true,
						};
					},
				},
				password: {
					id: "password",
					defaultValue: "",
					validationEvent: "blur",
					validate: (value) => {
						if (
							!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
								value,
							)
						) {
							return {
								valid: false,
								msg: "비밀번호가 올바르지 않습니다.",
							};
						}

						return {
							valid: true,
						};
					},
				},
			},
			submitWithValidation: true,
		});

		return (
			<>
				<Title level={2}>회원가입 폼</Title>
				<Form onSubmit={onSubmit}>
					<Flex vertical gap>
						<Flex vertical>
							<Label
								htmlFor={form.email.element.id}
								invalid={!form.email.error?.valid}
							>
								이메일
							</Label>
							<Input
								{...form.email.element}
								placeholder="이메일을 입력해주세요."
							/>
						</Flex>
						<Flex vertical>
							<Label
								htmlFor={form.password.element.id}
								invalid={!form.password.error?.valid}
							>
								비밀번호
							</Label>
							<Input
								{...form.password.element}
								placeholder="비밀번호를 입력해주세요."
							/>
						</Flex>
						<Button>가입하기</Button>
					</Flex>
				</Form>
			</>
		);
	},
};
