<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flying Car Animation</title>
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
</head>
<body>
    <img id="car" src="e_tron_gt.png" alt="Flying Car">
</body>
</html>


