import path from "path";
import ejs from "ejs";
import { TokenObj } from "./generateToken.token";
import prettier from "prettier";
import fs from "fs/promises";

const TEMPLATE_PATH = path.resolve(__dirname, "../../design-token/templates");
const TEMPLATE_FILES = {
	variables: path.resolve(TEMPLATE_PATH, "variables.ejs"),
	constants: path.resolve(TEMPLATE_PATH, "constants.ejs"),
};
const OUTPUT_PATHS = {
	variables: path.resolve(__dirname, "../../src/tokens"),
	constants: path.resolve(__dirname, "../../src/constants"),
};

const creator = async (
	generatedTokens: Record<string, TokenObj>,
	fileName: string,
	type: keyof typeof TEMPLATE_FILES,
) => {
	const contents = await ejs.renderFile(
		TEMPLATE_FILES[type],
		{ variables: Object.entries(generatedTokens) },
		{ async: true },
	);
	const output = OUTPUT_PATHS[type];

	await fs.mkdir(output, { recursive: true });

	if (type === "variables") {
		const formattedContents = await prettier.format(contents, {
			parser: "css",
		});
		await fs.writeFile(`${output}/${fileName}`, formattedContents, "utf-8");
	} else {
		await fs.writeFile(`${output}/${fileName}`, contents, "utf-8");
	}
};

export default creator;
