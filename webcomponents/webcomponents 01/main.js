class HelloWorld extends HTMLElement {
    constructor(){
        super();

        // Creamos un shadow para añadir contenido
        let shadow = this.attachShadow({ mode: 'open'});
        
        // Creamos un span
        const span = document.createElement('span');

        // Creamos un texto para un span
        const spanText = document.createTextNode('Hola mundo');
        
        // Añadimos el texto al span
        span.appendChild(spanText);

        // Añado el span al shadow
        shadow.appendChild(span);
        
    }

    connectedCallback(){
        // Añado evento de click
        this.addEventListener('click', function(){
            alert('Hola mundo');
        })
    }

}

// Crea el webcomponent
customElements.define('hello-world', HelloWorld);