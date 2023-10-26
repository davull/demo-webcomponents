
customElements.define(
    'templated-span',
    class extends HTMLElement {
        constructor() {
            super();

            const template = document.getElementById('span-template');
            const templateContent = template.content;

            const shadowRoot = this.attachShadow({ mode: 'open' })
            shadowRoot.appendChild(templateContent.cloneNode(true)); // deep = true
        }
    }
)
