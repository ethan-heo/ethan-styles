const formatVariable = (name, value) => {
	return `--${name}: ${value};`;
};

const formatCssProperty = (name, value) => {
	return `${name}: ${value}`;
};

const formatToken = ({ name, token, use }) => {
	if (use === "variables") {
		return formatVariable(name, token.$value);
	} else {
		return Object.entries(token.$value)
			.map(([prop, value]) => formatCssProperty(prop, value))
			.join("");
	}
};

export default formatToken;
