"use strict";
/*  */
import spawnNode from './spawn-node.js';
import NearestNodes from './find-nearest-nodes.js';
import drawLine from './draw-line.js';

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
                let nodes = nearestNodes.findClosestTo(node);
                console.log("nodes", nodes);
                console.log(
                    'closest', nodes.closest,
                    'nextClosest', nodes.nextClosest
                );
                // draw lines
                // draw line from node.xy to closest.xy
                // draw line from node.xy to nextClosest.xy
                // save drawn lines to connections in state

                drawLine(app, event, node, nodes.closest);
                drawLine(app, event, node, nodes.nextClosest);
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
