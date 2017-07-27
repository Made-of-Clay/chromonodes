"use strict";
/* globals console */

import { coordsAreNull } from './utils.js';

// Things needed to draw lines
// - color
// - start point (coords & parent circle ID)
// - end point (coords & parent circle ID)
export default function drawLine(app, event, startNode, endNode) { // TODO remove event param?
    if (coordsAreNull(endNode)) return;

    let lineColor = '#000000';
    let offset = 50;
    let coords = [
        (startNode.x + offset),
        (startNode.y + offset),
        (endNode.x + offset),
        (endNode.y + offset),
    ];

    addLine(coords, lineColor, app.canvas);
}

function addLine(coords, color, canvas) {
    let line = new fabric.Line(coords, {
        stroke: color,
        strokeWidth: 5,
        selectable: false,
    });

    canvas.add(line);
    canvas.sendToBack(line);
}
