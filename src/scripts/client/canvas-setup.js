"use strict";
/*  */
import spawnNode from './spawn-node.js';
import NearestNodes from './find-nearest-nodes.js';

let canvas;

export default function canvasSetup(app) {
    const nearestNodes = new NearestNodes(app);
    canvas = new fabric.Canvas('stage');

    fabric.Group.prototype.hasControls = false;
    canvas.selection = false;
    
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
    app.resizeCanvas = resizeCanvas;
    app.canvas = canvas;

    canvas.on({
        'mouse:down': event => {
            let node = spawnNode(app, event);
            if (node) {
                // find nearest 2 nodes
                // let nearestNodes = findNearestNodes(app, coords);
                // let nearestNodes = nearestNodes.findClosestTo(coords);
                //////////////////////////////////////////////////
                //////////////////////////////////////////////////
                /// need to calc closest 
                //////////////////////////////////////////////////
                //////////////////////////////////////////////////
                let nn = nearestNodes.findClosestTo(node);
                console.log(
                    'closest', nn.closest,
                    'nextClosest', nn.nextClosest
                );
                // draw lines
            }
        }
    });

    return app;
}

function resizeCanvas() {
    canvas.setHeight(window.innerHeight);
    canvas.setWidth(window.innerWidth);
    canvas.renderAll();
}
// export default function canvasSetup(app) {
//     let canvas = document.getElementById('stage');
//     app.renderer = new Renderer(canvas);

//     return app;
// }
