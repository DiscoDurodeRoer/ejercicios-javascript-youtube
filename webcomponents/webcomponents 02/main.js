class Counter extends HTMLElement {

    constructor() {
        super();

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        this.value = 0;

        let shadow = this.attachShadow({ mode: 'open' });

        const b1 = document.createElement('button');
        const b1Text = document.createTextNode('+');
        b1.appendChild(b1Text);
        shadow.appendChild(b1);

        this.buttonIncrement = b1;

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('readonly', 'true');
        input.setAttribute('value', this.value);
        shadow.appendChild(input);

        this.inputText = input;

        const b2 = document.createElement('button');
        const b2Text = document.createTextNode('-');
        b2.appendChild(b2Text);
        shadow.appendChild(b2);

        this.buttonDecrement = b2;

        shadow.appendChild(b2);

    }

    connectedCallback() {
        this.buttonIncrement.addEventListener('click', this.increment);
        this.buttonDecrement.addEventListener('click', this.decrement);
    }

    increment() {
        this.value++;
        this.inputText.setAttribute('value', this.value);
    }

    decrement() {
        this.value--;
        this.inputText.setAttribute('value', this.value);
    }


}

customElements.define('ddr-counter', Counter);