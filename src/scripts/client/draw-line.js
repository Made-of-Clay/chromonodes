"use strict";
/* globals console */

import { coordsAreNull, guid, isArray } from './utils.js';

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

    let lineStore = {
        start: {
            x: startNode.x,
            y: startNode.y,
            nodeID: startNode.nodeID,
        },
        end: {
            x: endNode.x,
            y: endNode.y,
            nodeID: endNode.nodeID,
        },
    };
    let line = addLine(coords, lineColor, app.canvas);

    updateState(line.lineID, app.state.nodes[startNode.nodeID], app.state.nodes[endNode.nodeID]);

    return line;
}

function addLine(coords, color, canvas) {
    let line = new fabric.Line(coords, {
        id: guid(),
        stroke: color,
        strokeWidth: 5,
        selectable: false,
    });

    canvas.add(line);
    canvas.sendToBack(line);
    return line;
}

function updateState(lineID, storedStartNode, storedEndNode) {
    if (!isArray(storedStartNode.lines)) {
        storedStartNode.lines = [];
    }
    if (!isArray(storedEndNode.lines)) {
        storedEndNode.lines = [];
    }
    storedStartNode.lines.push({
        lineID: line.lineID,
        point: 'start'
    });
    storedEndNode.lines.push({
        lineID: line.lineID,
        point: 'end'
    });
}
