import parseHTML, { HTMLToken, HTMLTokenType } from "../utils/parseHTML";

interface JSONEditorBehaviorUIOption {
	depth: string;
	line: string;
}

class JSONEditorBehaviorUI {
	option: JSONEditorBehaviorUIOption;

	constructor(option: JSONEditorBehaviorUIOption) {
		this.option = option;
	}
	enter(html: string, startIndex: number) {
		let tokens = parseHTML(html);
		let str = "";
		let targetIndex = 0;
		let result: HTMLToken[] = [];
		const inconsistentTokens: HTMLToken[] = [];

		for (const token of tokens) {
			if (token.type === "Text") {
				if (str.length + token.contents.length >= startIndex) {
					const BEFORE_SEPARATED_TOKENS = tokens.slice(0, targetIndex);
					const AFTER_SEPARATED_TOKENS = tokens.slice(targetIndex + 1);
					const BEFORE_SEPARATED_TEXT_TOKEN: HTMLToken = {
						type: "Text",
						contents: token.contents.slice(0, startIndex - str.length),
					};
					const AFTER_SEPARATED_TEXT_TOKEN: HTMLToken = {
						type: "Text",
						contents: token.contents.slice(startIndex - str.length),
					};
					const BEFORE_SEPERATED_CLOSE_TAG_TOKENS = [...inconsistentTokens]
						.reverse()
						.map((token) => ({
							...token,
							type: "CloseTag" as HTMLTokenType,
						}));
					const AFTER_SEPARATED_OPEN_TAG_TOKENS = inconsistentTokens;
					const PARAGRAPH_OPEN_TAG_TOKEN: HTMLToken = {
						type: "OpenTag",
						contents: "div",
					};
					const PARAGRAPH_CLOSE_TAG_TOKEN: HTMLToken = {
						type: "CloseTag",
						contents: "div",
					};

					result = [
						BEFORE_SEPARATED_TOKENS,
						BEFORE_SEPARATED_TEXT_TOKEN,
						BEFORE_SEPERATED_CLOSE_TAG_TOKENS,
						PARAGRAPH_OPEN_TAG_TOKEN,
						AFTER_SEPARATED_OPEN_TAG_TOKENS,
						AFTER_SEPARATED_TEXT_TOKEN,
						AFTER_SEPARATED_TOKENS,
						PARAGRAPH_CLOSE_TAG_TOKEN,
					].flat();

					break;
				} else {
					str += token.contents;
				}
			} else {
				if (token.type === "CloseTag") {
					const openingTag = inconsistentTokens[inconsistentTokens.length - 1];

					if (openingTag.contents === token.contents) {
						inconsistentTokens.pop();
					}
				} else {
					inconsistentTokens.push(token);
				}
			}

			targetIndex++;
		}

		return result.map(this.formatHTMLToken).join("");
	}
	tab() {}
	space() {}

	private isHtml(html: string) {
		return /^<[^<>]+>.*<\/[^<>]+>$/.test(html);
	}
	private hasHtml(html: string) {
		return /<[^<>]+>.*<\/[^<>]+>/.test(html);
	}

	private formatHTMLToken(token: HTMLToken) {
		if (token.type === "OpenTag") {
			let attributes = "";

			if (token.attributes) {
				for (const [key, value] of Object.entries(token.attributes)) {
					attributes += ` ${key}="${value}"`;
				}
			}

			return `<${token.contents}${attributes}>`;
		}

		if (token.type === "CloseTag") {
			return `</${token.contents}>`;
		}

		return token.contents;
	}
}

export default JSONEditorBehaviorUI;
