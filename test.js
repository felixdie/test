(function()  {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
        <style>
            :host {
                display: block;
                overflow: hidden;
                position: relative;
                width: 100%;
                height: 100%;
            }

            .background {
                filter: blur(8px);
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: #f0f0f0;
            }

            @keyframes carFlyThrough {
                from {
                    transform: translateX(-100%);
                }
                to {
                    transform: translateX(100%);
                }
            }

            .car {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                animation: carFlyThrough 5s linear infinite;
                background-image: url('https://github.com/felixdie/test/blob/main/e_tron_gt.png?raw=true');
                background-size: contain;
                background-repeat: no-repeat;
                width: 200px; /* Adjust based on the size of the container */
                height: 100px; /* Adjust based on the size of the container */
            }
        </style>
        <div class="background"></div>
        <div class="car"></div>
    `;

    customElements.define('com-sap-sample-helloworld1', class HelloWorld1 extends HTMLElement {


        constructor() {
            super(); 
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
        }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
            this._firstConnection = true;
            this.redraw();
        }

         //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback(){

        }

         //When the custom widget is updated, the Custom Widget SDK framework executes this function first
        onCustomWidgetBeforeUpdate(oChangedProperties) {

        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection){
                this.redraw();
            }
        }

        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        }

        redraw(){
        }
    });
})();