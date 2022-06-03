class DdrModal extends HTMLElement{

    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    get visible(){
        return this.hasAttribute("visible");
    }

    set visible(value){
        if(value){
            this.setAttribute("visible", "");
            // añadir clase visible
            this.shadowRoot.querySelector(".wrapper").classList.add("visible");
        }else{
            this.removeAttribute("visible");
            // eliminar clase visible
            this.shadowRoot.querySelector(".wrapper").classList.remove("visible");
        }
    }

    render(){

        let modalClass = 'wrapper ';
        if(this.visible){
            modalClass += 'visible';
        }
        this.attachShadow({mode: 'open'})
        this.shadowRoot.innerHTML = `
            <style>
                .wrapper{
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 9998;
                    visibility: hidden;
                    background-color: hsla(0,0%, 100%, .6);
                }
                .visible {
                    opacity: 1;
                    visibility: visible;
                }
                .ddr-modal{
                    padding: 10px;
                    background-color: #fff;
                    position: absolute;
                    top:50%;
                    left:50%;
                    border: 1px solid #000;
                    border-radius: 4px;
                    min-width: 300px;
                    transform: translate(-50%, -50%);
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                }
                .button-container{
                    text-align: left;
                }
                .button-container button {
                    min-width: 80px;
                    border-radius: 4px;
                    padding: 3px;
                    color: #FFF;
                    cursor: pointer;
                }
                .button-container button.ok{
                    background-color: #0093FF;
                    border: 1px solid #0093FF;
                }
                .button-container button.cancel{
                    background-color: #FF000C;
                    border: 1px solid #FF000C;
                }
            </style>
            <div class="${modalClass}">
                <div class="ddr-modal">
                    <p class="title">
                        <slot name="title"></slot>
                    </p>
                    <p class="content">
                        <slot name="content"></slot>
                    </p>
                    <div class="button-container">
                        <button class="ok">Aceptar</button>
                        <button class="cancel">Cancelar</button>
                    </div>
                </div>
            </div>
        `;
    }

}

customElements.define('ddr-modal', DdrModal)