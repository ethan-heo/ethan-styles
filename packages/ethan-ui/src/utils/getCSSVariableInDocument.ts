const getCSSVariablesInDocument = () => {
	const result = new Map<keyof CSSVariables, string>();
	const cssStyleRule = Array.from(document.styleSheets)
		.map((styleSheet) => Array.from(styleSheet.cssRules) as CSSStyleRule[])
		.flat()
		.find((cssRule) => cssRule.selectorText === ":root");

	if (!cssStyleRule) return result;

	const style: CSSStyleDeclaration = cssStyleRule!.style;

	for (const key of style) {
		if (key.startsWith("--")) {
			result.set(key as keyof CSSVariables, style.getPropertyValue(key).trim());
		}
	}

	return result;
};

export default getCSSVariablesInDocument;
