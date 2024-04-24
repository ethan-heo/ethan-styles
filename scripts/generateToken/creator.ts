import path from "path";

const TOKEN_PATH = path.resolve(__dirname, "../../design-token");
const TEMPLATE_PATH = path.resolve(__dirname, "../../design-token/tempates");
const TOKEN_FILES = {
	global: path.resolve(TOKEN_PATH, "global.tokens.json"),
	"light-theme": path.resolve(TOKEN_PATH, "light-theme.tokens.json"),
};
const TEMPLATE_FILE = {
	variables: path.resolve(TEMPLATE_PATH, "variables.ejs"),
};
