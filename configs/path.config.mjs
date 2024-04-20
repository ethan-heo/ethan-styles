import path from "path";

const __dirname = path.resolve();

export default {
	lib: path.resolve(__dirname, "lib"),
	src: path.resolve(__dirname, "src"),
	token: path.resolve(__dirname, "src/token"),
	tokenTemplate: path.resolve(__dirname, "design-token/templates"),
};
