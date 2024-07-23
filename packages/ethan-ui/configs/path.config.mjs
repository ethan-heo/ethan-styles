import path from "path";

const __dirname = path.resolve();

export default {
	__dirname,
	dist: path.resolve(__dirname, "dist"),
	src: path.resolve(__dirname, "src"),
	token: path.resolve(__dirname, "src/token"),
	tokenTemplate: path.resolve(__dirname, "design-token/templates"),
};
