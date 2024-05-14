export type ParsedHTMLType = "Text" | "OpenTag" | "CloseTag";

const travalseHTML = (
	html: string,
	travalse: (type: ParsedHTMLType, contents: string) => void,
) => {
	while (html.length > 0) {
		const openTagMatch = html.match(/^<[^/<>]+>/);
		const closeTagMatch = html.match(/^<\/[^<>]+>/);
		const textMatch = html.match(/([\s\S]*?(?=<))|([\s\S]*?(?=<\/))/);

		let sliceStartIndex;
		let type: ParsedHTMLType;
		let properties = {};

		if (openTagMatch) {
			sliceStartIndex = openTagMatch[0].length;
			type = "OpenTag";
		} else if (closeTagMatch) {
			sliceStartIndex = closeTagMatch[0].length;
			type = "CloseTag";
		} else {
			sliceStartIndex = textMatch![0].length;
			type = "Text";
		}

		travalse(type, html.slice(0, sliceStartIndex));

		html = html.slice(sliceStartIndex);
	}
};

export default travalseHTML;
