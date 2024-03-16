(function() {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
            :host {
                display: block;
                overflow: hidden;
            }
            .container {
                height: 100%;
                margin: 0;
                padding: 0;
                overflow: hidden;
            }
            .container::before {
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
            <img id="car" src="https://github.com/felixdie/test/blob/main/e_tron_gt.png?raw=true">
        </div>
    `;

    customElements.define('com-sap-sample-flyingcar', class FlyingCar extends HTMLElement {
        constructor() {
            super(); 
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
        }

        // Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            if (!this._firstConnection) {
                this._firstConnection = true;
                this.redraw();
            }
        }

        // Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){
            // Handle any cleanup
        }

        // When the custom widget is updated, the Custom Widget SDK framework executes this function first
        onCustomWidgetBeforeUpdate(oChangedProperties) {
            // Handle properties changes if needed
        }

        // When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }
        
        // When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
            // Handle any cleanup
        }

        // When the custom widget is resized on the canvas, the Custom Widget SDK framework executes the following JavaScript function call on the custom widget
        /*
        onCustomWidgetResize(width, height){
            this.redraw();
        }
        */

        redraw(){
            // Redrawing or updating the widget's DOM goes here
        }
    });
})();
