"use strict";
/* globals Math */

export default function findNearestNodes(app) {
    let nodes = app.state.nodes;
    let diff = { x:null, y:null };
    let closest = Object.assign({}, diff);
    let nextClosest = Object.assign({}, diff);
    // loop each node
    nodes.forEach(node => {
        // set diff.x and diff.y
        if (coordsAreNull(closest)) {
            //
        } else {
            // 1st node checked - add as closest
        }
        // set sum and node object
        // compare next sum to saved sums - save the lowest sum
    });
    // once finished, return stored object
    return { closest, nextClosest };
}

function isNull(value) {
    return value === null;
}
function coordsAreNull(obj) {
    return isNull(obj.x) && isNull(obj.y);
}
function compareCoords(obj1, obj2) {
    let diffX = Math.abs(obj1.x - obj2.x);
    let diffY = Math.abs(obj1.y - obj2.y);
}
