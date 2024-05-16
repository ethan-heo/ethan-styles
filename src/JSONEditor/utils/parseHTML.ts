export type HTMLTokenType = "Text" | "OpenTag" | "CloseTag";

export type HTMLToken = {
	type: HTMLTokenType;
	contents: string;
	attributes?: Record<string, string>;
};

const parseHTML = (html: string) => {
	const result: HTMLToken[] = [];

	while (html.length > 0) {
		const openTagMatch = html.match(/^<[^/<>]+>/);
		const closeTagMatch = html.match(/^<\/[^<>]+>/);
		const textMatch = html.match(/([\s\S]*?(?=<))|([\s\S]*?(?=<\/))|(\w.*)/);

		let sliceStartIndex;
		let type: HTMLTokenType;
		let contents: string;
		let attributes: Record<string, string> | undefined;

		if (openTagMatch) {
			const tagMatch = openTagMatch[0].match(/<\w+/)!;
			const propertyMatches = openTagMatch[0].match(
				/[^\s]+(?=\=)|('|")[\S\s].\w+('|")/g,
			);
			sliceStartIndex = openTagMatch[0].length;
			contents = tagMatch[0].slice(1);
			type = "OpenTag";

			if (propertyMatches !== null) {
				let keyValue: string[] = [];

				attributes = {};

				for (const propertyMatch of propertyMatches) {
					keyValue.push(propertyMatch);

					if (keyValue.length === 2) {
						attributes[keyValue[0]] = keyValue[1].slice(
							1,
							keyValue[1].length - 1,
						);
						keyValue = [];
					}
				}
			}
		} else if (closeTagMatch) {
			const tagMatch = closeTagMatch[0].match(/<\/\w+/)!;

			sliceStartIndex = closeTagMatch[0].length;
			contents = tagMatch[0].slice(2);
			type = "CloseTag";
		} else {
			sliceStartIndex = textMatch![0].length;
			type = "Text";
			contents = html.slice(0, sliceStartIndex);
		}

		let token: HTMLToken = {
			type,
			contents,
		};

		if (attributes !== undefined) {
			token["attributes"] = attributes!;
		}

		result.push(token);

		html = html.slice(sliceStartIndex);
	}

	return result;
};

export default parseHTML;
