interface JSONEditorCoreOption {
    tabWidth?: number;
}
type Target = "string" | HTMLElement;
declare class JSONEditorCore {
    private tabWidth;
    private targetEl;
    constructor(targetEl: Target, options: JSONEditorCoreOption);
    update(contents: string): string;
    validate(): void;
    private findElement;
    private bindEvent;
}
export default JSONEditorCore;
