import "./App.css";
import {
	Button,
	Flex,
	GridLine,
	Input,
	Paragraph,
	Title,
	useFormState,
} from "@ethanheo/ui";

function App() {
	const { form } = useFormState({
		form: {
			name: {
				id: "test",
				defaultValue: 1,
				event: "change",
				validate: (value) => {
					if (/[0-9]/g.test(value)) {
						return {
							msg: "숫자가 입력되면 안됩니다",
							valid: false,
						};
					} else {
						return {
							valid: true,
						};
					}
				},
			},
		},
	});

	console.log(form.name);

	return (
		<main className="container">
			<GridLine />
			<Title level={1}>Ethan-ui examples</Title>
			<Flex
				as="article"
				gap
				style={{
					backgroundColor: "#ff0000",
				}}
				column={["col-mp-6", "col-ml-8", "col-12"]}
			>
				<Flex
					column="col-6"
					style={{
						backgroundColor: "#0000ff",
					}}
				>
					world
				</Flex>
				<Flex
					column="col-6"
					style={{
						backgroundColor: "#00ff00",
					}}
				>
					hello
				</Flex>
			</Flex>
			<Flex align="flex-end">
				<Button size="x-large">x-large</Button>
				<Button size="large">large</Button>
				<Button size="medium">medium</Button>
				<Button size="small">small</Button>
				<Button size="x-small">x-small</Button>
			</Flex>
			<Flex gap>
				<Flex>
					<Button size="x-large">x-large</Button>
				</Flex>
				<Flex>
					<Button size="medium">medium</Button>
				</Flex>
			</Flex>
			<Flex>
				<Paragraph>hello world</Paragraph>
			</Flex>
			<Flex>
				<Input fontSize="medium" placeholder="hello world" {...form.name} />
			</Flex>
		</main>
	);
}

export default App;
