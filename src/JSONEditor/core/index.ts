interface JSONEditorCoreOption {
	tabWidth?: number;
}

type Target = "string" | HTMLElement;

class JSONEditorCore {
	private tabWidth: number;
	private targetEl: HTMLElement;
	constructor(targetEl: Target, options: JSONEditorCoreOption) {
		const _targetEl = this.findElement(targetEl);

		if (_targetEl === null) {
			throw new Error(`Element를 찾을 수 없습니다. ${targetEl}`);
		}

		this.bindEvent(_targetEl);
		this.targetEl = _targetEl;
		this.tabWidth = options.tabWidth ?? 2;
	}

	update(contents: string) {
		return "";
	}

	validate() {}

	private findElement(target: Target): HTMLElement | null {
		if (typeof target === "string") {
			return document.querySelector(target);
		}

		if (!(typeof target === "object" && target.nodeType === 1)) {
			throw new Error(`Selector 또는 Element Node가 아닙니다. ${target}`);
		}

		return target;
	}

	private bindEvent(target: HTMLElement) {
		// 1. key event
		//   - Enter
		//   - 방향키
		//   - Backspace
		//   - tab
		//   - space
	}
}

export default JSONEditorCore;
