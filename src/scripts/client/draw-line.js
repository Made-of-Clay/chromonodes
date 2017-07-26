"use strict";
/* globals console */

import { coordsAreNull } from './utils.js';

// Things needed to draw lines
// - color
// - start point (coords & parent circle ID)
// - end point (coords & parent circle ID)
export default function drawLine(app, event, startNode, endNode) { // TODO remove event param?
    if (coordsAreNull(endNode)) return;

console.log("startNode", startNode);
console.log("endNode", endNode);
    let lineColor = '#000000';
    let coords = [
        startNode.x,
        startNode.y,
        endNode.x,
        endNode.y,
    ];
console.log("coords", coords);

    addLine(coords, lineColor, app.canvas);
}

function addLine(coords, color, canvas) {
    let line = new fabric.Line(coords, {
        stroke: color,
        strokeWidth: 5,
        selectable: false,
    });
console.log("line", line);

    canvas.add(line);
}
