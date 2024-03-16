(function() {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
            body, html {
                height: 100%;
                margin: 0;
                padding: 0;
                overflow: hidden;
            }
            body::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: inherit;
                filter: blur(5px);
                z-index: -1;
            }
            #car {
                position: absolute;
                top: 50%;
                left: -100px;
                z-index: 0;
                animation: flyAcross 5s linear forwards;
            }
    
            @keyframes flyAcross {
                from {
                    left: -100px;
                    transform: translate(0, -50%);
                }
                to {
                    left: 100%;
                    transform: translate(0, -50%);
                }
            }
        </style>
        <div class="container">
            <img id="car" src="https://github.com/felixdie/test/blob/main/e_tron_gt.png?raw=true" />
        </div>
    `;

    customElements.define('com-sap-sample-flyingcar', class FlyingCar extends HTMLElement {
        constructor() {
            super();
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
        }

        connectedCallback(){
            if (!this._firstConnection) {
                this._firstConnection = true;
                this.redraw();
            }
        }

        disconnectedCallback(){
            // Handle any cleanup if necessary
        }

        onCustomWidgetBeforeUpdate(oChangedProperties) {
            // Handle property changes before update
        }

        onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }

        onCustomWidgetDestroy(){
            // Cleanup when the widget is destroyed
        }

        /* Uncomment if handling resize is necessary
        onCustomWidgetResize(width, height){
            this.redraw();
        }
        */

        redraw(){
            // Redraw or update widget elements if necessary
        }
    });
})();
