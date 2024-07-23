class JSONEditorCore {
    tabWidth;
    targetEl;
    constructor(targetEl, options) {
        const _targetEl = this.findElement(targetEl);
        if (_targetEl === null) {
            throw new Error(`Element를 찾을 수 없습니다. ${targetEl}`);
        }
        this.bindEvent(_targetEl);
        this.targetEl = _targetEl;
        this.tabWidth = options.tabWidth ?? 2;
    }
    update(contents) {
        return "";
    }
    validate() { }
    findElement(target) {
        if (typeof target === "string") {
            return document.querySelector(target);
        }
        if (!(typeof target === "object" && target.nodeType === 1)) {
            throw new Error(`Selector 또는 Element Node가 아닙니다. ${target}`);
        }
        return target;
    }
    bindEvent(target) {
        // 1. key event
        //   - Enter
        //   - 방향키
        //   - Backspace
        //   - tab
        //   - space
    }
}
export default JSONEditorCore;
