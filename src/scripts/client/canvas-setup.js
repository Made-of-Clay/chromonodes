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

                let closestLine = drawLine(app, event, node, nodes.closest);
                // app.state.nodes[node.nodeID].
                let nextClosestLine = drawLine(app, event, node, nodes.nextClosest);
            }
        }
    });
    // object:move gives object as e.target (check that it's a node)
    // get node from app.state[node.nodeID]
    // loop node.lines (array of objects)
    // each line: get app.state.connections[lineID]
    // update matched line according to node.lines[x].point (start|end)

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

////////////////////////////////////////
///
///   0-------O         0 = start   O = end
/// 
/// line properties: x1, y1, startNodeID, x2, y2, endNodeID, lineID (color, stroke, etc...)
/// When some node updates position, use lineID (stored on node?)
/// to fetch line from store (by lineID) and update it's x/y
///



//////////////////// ALT //////////////////////
///
/// circle created
///