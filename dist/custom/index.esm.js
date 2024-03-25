class Button extends HTMLButtonElement {
    constructor() {
        super();
    }
}

const els = {
    Button,
};
function defineCustomElements(element) {
    if (!window.customElements) {
        throw new Error(`Your browser version does not support customElement.`);
    }
    const name = element.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
    customElements.define(name, els[element]);
}

export { defineCustomElements as default };
//# sourceMappingURL=index.esm.js.map
