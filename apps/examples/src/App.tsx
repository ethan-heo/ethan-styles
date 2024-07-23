import "./App.css";
import { Button, Flex, GridLine, Title } from "@ethanheo/ui";

function App() {
	return (
		<main className="container">
			<GridLine />
			<Title level={1}>Ethan-ui examples</Title>
			<Flex align="flex-end" gap="small">
				<Button size="x-large">x-large</Button>
				<Button size="large">large</Button>
				<Button size="medium">medium</Button>
				<Button size="small">small</Button>
				<Button size="x-small">x-small</Button>
			</Flex>
		</main>
	);
}

export default App;
