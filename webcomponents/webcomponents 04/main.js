class Counter extends HTMLElement {

    constructor() {
        super();

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    connectedCallback() {

        this.render();

        this.buttonIncrement.addEventListener('click', this.increment);
        this.buttonDecrement.addEventListener('click', this.decrement);

        if( (!this.value && this.min) || (this.value && this.min && this.value < this.min)){
            this.value = this.min;
        }else if( (!this.value && this.max) || (this.value && this.max && this.value < this.max)){
            this.value = this.max;
        }else if(!this.value && !this.max && !this.min){
            this.value = 0;
        }

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

    render(){

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .ddr-counter #input_counter {
                    border-radius: 10px;
                    text-align: center
                }
            </style>
            <div class="ddr-counter">
                <button id="b_increment">+</button>
                <input id="input_counter" type="text" readonly/>
                <button id="b_decrement">-</button>
            </div>
        `;

        const b1 = this.shadowRoot.querySelector("#b_increment");
        this.buttonIncrement = b1;
        
        const inputCounter = this.shadowRoot.querySelector("#input_counter");
        this.inputText = inputCounter;
        
        const b2 = this.shadowRoot.querySelector("#b_decrement");
        this.buttonDecrement = b2;

    }

}

customElements.define('ddr-counter', Counter);