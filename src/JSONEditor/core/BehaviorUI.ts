import travalseHTML, { ParsedHTMLType } from "../utils/travalseHTML";

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
		const stack: { type: ParsedHTMLType; contents: string }[] = [];

		travalseHTML(html, (type, contents) => {
			stack.push({
				type,
				contents,
			});
		});

		// 단락을 만들 때 추가해야할 태크는 이전(현재 인덱스 기준) 모든 스택 태그 아이템을 다 가져가야함.
		console.log(stack);
	}
	tab() {}
	space() {}

	private isHtml(html: string) {
		return /^<[^<>]+>.*<\/[^<>]+>$/.test(html);
	}
	private hasHtml(html: string) {
		return /<[^<>]+>.*<\/[^<>]+>/.test(html);
	}
}

export default JSONEditorBehaviorUI;
