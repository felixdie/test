(function() {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>
        :host {
            display: block;
            height: 100%;
            overflow: hidden;
        }
        :host::before {
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
    <img id="car" src="https://github.com/felixdie/test/blob/main/e_tron_gt.png?raw=true">
  `;

  class FlyingCarAnimation extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
      // Additional setup can be performed here
    }

    disconnectedCallback() {
      // Cleanup can be performed here
    }
  }

  customElements.define('flying-car-animation', FlyingCarAnimation);
})();