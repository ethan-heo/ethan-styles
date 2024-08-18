import "./App.css";
import { Button, Flex, GridLine, Paragraph, Title } from "@ethanheo/ui";

function App() {
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
		</main>
	);
}

export default App;
