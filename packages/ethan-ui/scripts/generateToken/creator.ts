import path from "path";
import ejs from "ejs";
import { TokenObj } from "./generateToken.token";
import prettier from "prettier";
import fs from "fs/promises";

const TEMPLATE_PATH = path.resolve(__dirname, "../../design-token/templates");
const TEMPLATE_FILE = {
	variables: path.resolve(TEMPLATE_PATH, "variables.ejs"),
	// constants: path.resolve(TEMPLATE_PATH, "constants.ejs"),
};
const OUTPUT_PATH = path.resolve(__dirname, "../../src/tokens");

const creator = async (
	generatedTokens: Record<string, TokenObj>,
	fileName: string,
	type: keyof typeof TEMPLATE_FILE,
) => {
	const contents = await ejs.renderFile(
		TEMPLATE_FILE[type],
		{ variables: Object.entries(generatedTokens) },
		{ async: true },
	);
	const formattedContents = await prettier.format(contents, {
		parser: "css",
	});

	await fs.mkdir(OUTPUT_PATH, { recursive: true });
	await fs.writeFile(`${OUTPUT_PATH}/${fileName}`, formattedContents, "utf-8");
};

export default creator;
