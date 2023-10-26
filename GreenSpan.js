
class GreenSpan extends HTMLSpanElement {
    constructor() {
        self = super();
        this.style.color = "green";
    }

}

customElements.define('green-span', GreenSpan, { extends: 'span' });