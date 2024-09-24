import ejs from "ejs";
import { Token, TokenObj } from "./generateToken.token";
import prettier from "prettier";
import fs from "fs/promises";

const creator = async ({
	token,
	fileName,
	outputPath,
	templatePath,
}: {
	token: Record<string, Token | TokenObj>;
	fileName: string;
	outputPath: string;
	templatePath: string;
}) => {
	const contents = await ejs.renderFile(
		templatePath,
		{ variables: Object.entries(token) },
		{ async: true },
	);
	const ext = fileName.slice(fileName.lastIndexOf(".") + 1);
	const EXT_MAP = {
		ts: "typescript",
		css: "css",
	};
	const formattedContents = await prettier.format(contents, {
		parser: EXT_MAP[ext],
	});
	await fs.mkdir(outputPath, { recursive: true });
	await fs.writeFile(`${outputPath}/${fileName}`, formattedContents, "utf-8");
};

export default creator;
