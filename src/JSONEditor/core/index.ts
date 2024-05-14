interface JSONEditorCoreOption {
	tabWidth?: number;
}

class JSONEditorCore {
	private tabWidth: number;
	constructor(options: JSONEditorCoreOption) {
		this.tabWidth = options.tabWidth ?? 2;
	}

	update(contents: string) {
		return "";
	}

	validate() {}
}

export default JSONEditorCore;
