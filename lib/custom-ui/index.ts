import Button from "../Button/Button.custom";

const els = {
	Button,
};

type CustomElements = keyof typeof els;

function defineCustomElements(element: CustomElements) {
	if (!window.customElements) {
		throw new Error(`Your browser version does not support customElement.`);
	}

	const name = element.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();

	customElements.define(name, els[element]);
}

export default defineCustomElements;
