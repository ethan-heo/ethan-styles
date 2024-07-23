interface JSONEditorBehaviorUIOption {
    depth: string;
    line: string;
}
declare class JSONEditorBehaviorUI {
    option: JSONEditorBehaviorUIOption;
    constructor(option: JSONEditorBehaviorUIOption);
    enter(html: string, startIndex: number): string;
    tab(html: string): string;
    space(): void;
    private isHtml;
    private hasHtml;
    private formatHTMLToken;
}
export default JSONEditorBehaviorUI;
