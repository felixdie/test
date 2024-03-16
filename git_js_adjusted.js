(function () {
    let template = document.createElement("template");
    template.innerHTML = `
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
       <div>
    <body>
        <img id="car" src="https://github.com/felixdie/test/blob/main/e_tron_gt.png?raw=true">
    </body>
    </html>
    </div>
      `;
    }
)();