import { Token, TokenObj } from "../generateToken.token";

const isTokenObj = (token: Token | TokenObj): token is TokenObj => {
	const MUST_HAVE_PROPERTIES = ["$type", "$value"];

	return Object.keys(token).every((key: string) =>
		MUST_HAVE_PROPERTIES.includes(key),
	);
};

export default isTokenObj;
