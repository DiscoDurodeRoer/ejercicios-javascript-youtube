class Counter extends HTMLElement {

    constructor() {
        super();

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

        let shadow = this.attachShadow({ mode: 'open' });

        const b1 = document.createElement('button');
        const b1Text = document.createTextNode('+');
        b1.appendChild(b1Text);
        shadow.appendChild(b1);

        this.buttonIncrement = b1;

        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('readonly', 'true');

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

        this.inputText.setAttribute('value', this.value);
    }

    increment() {

        let step = +this.step; // parseInt(this.step)

        if (!step) {
            step = 1;
        }

        const nextValue = +this.value + step;

        if (this.max && nextValue > +this.max) {
            this.value = this.max;
        } else {
            this.value = nextValue;
        }

        this.inputText.setAttribute('value', this.value);
    }

    decrement() {
        let step = +this.step; // parseInt(this.step)

        if (!step) {
            step = 1;
        }

        const nextValue = +this.value - step;

        if (this.min && nextValue < +this.min) {
            this.value = this.min;
        } else {
            this.value = nextValue;
        }

        this.inputText.setAttribute('value', this.value);
    }

    get value() {
        return this.getAttribute('value');
    }

    set value(value) {
        this.setAttribute('value', value);
    }

    get step() {
        return this.getAttribute('step');
    }

    set step(value) {
        this.setAttribute('step', value);
    }

    get min() {
        return this.getAttribute('min');
    }

    set min(value) {
        this.setAttribute('min', value);
    }

    get max() {
        return this.getAttribute('max');
    }

    set max(value) {
        this.setAttribute('max', value);
    }


}

customElements.define('ddr-counter', Counter);