"use strict";
/*  */
import spawnNode from './spawn-node.js';

let canvas;

export default function canvasSetup(app) {
    canvas = new fabric.Canvas('stage');

    fabric.Group.prototype.hasControls = false;
    canvas.selection = false;
    
    window.addEventListener('resize', resizeCanvas, false);
    resizeCanvas();
    app.resizeCanvas = resizeCanvas;
    app.canvas = canvas;

    canvas.on({
        'mouse:down': event => spawnNode(app, event)
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
