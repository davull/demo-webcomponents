
class MoneyInput extends HTMLElement {

    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });

        // <div class="wrapper">
        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');

        // <input type="number" />
        const input = document.createElement('input');
        input.setAttribute('type', 'number');
        input.value = this.getAttribute('data-value');

        // <span>
        const span = document.createElement('span');
        span.textContent = '€';

        // <style>
        const style = document.createElement('style');
        style.textContent = `
            .wrapper { 
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            span {
                margin-left: 5px;
                font-size: 1.5em;
                color: red;
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);

        wrapper.appendChild(input);
        wrapper.appendChild(span);
    }
}

customElements.define('money-input', MoneyInput);