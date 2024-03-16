(function() {
	let template = document.createElement("template");
	template.innerHTML = `
		<style>
			body, html {
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

	class FlyingCarWidget extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
		}

        //Fired when the widget is added to the html DOM of the page
        connectedCallback(){
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

        }
        
        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy(){
        
        }

        redraw() {
            // Any redrawing logic can be added here if needed
        }

	}

customElements.define("com-sap-sample-flyingcarwidget", FlyingCarWidget);
})();
