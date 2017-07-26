"use strict";
/* globals Math */

import { coordsAreNull } from './utils.js';

const emptyCoords = () => { return { x:null, y:null, nodeID:'' }; };
let closest = emptyCoords();
let nextClosest = emptyCoords();

export default class NearestNodes {
    constructor(app) {
        // this.app = app;
        this.nodes = app.state.nodes;
    }

    // only using getter/setter pattern in case I pass object to set coords and it has more than x/y
    get closest() {
        return closest;
    }
    set closest({x, y, nodeID}) {
        closest.x = x;
        closest.y = y;
        closest.nodeID = nodeID;
    }
    get nextClosest() {
        return nextClosest;
    }
    set nextClosest({x, y, nodeID}) {
        nextClosest.x = x;
        nextClosest.y = y;
        nextClosest.nodeID = nodeID;
    }

    findClosestTo({x, y, nodeID}) {
        let coords = { x, y };
        this.nodes.forEach(tmpNode => {
            if (nodeID === tmpNode.nodeID) return;

            if (coordsAreNull(this.closest)) {
                this.closest = Object.assign({ nodeID: tmpNode.nodeID }, tmpNode.coords);
            } else if (distance(coords, this.closest) > distance(coords, tmpNode.coords)) {
                    this.nextClosest = this.closest;
                    this.closest = Object.assign({ nodeID: tmpNode.nodeID }, tmpNode.coords);
            } else if (coordsAreNull(this.nextClosest) || 
                       distance(coords, this.nextClosest) > distance(coords, tmpNode.coords)) {

                this.nextClosest = Object.assign({ nodeID: tmpNode.nodeID }, tmpNode.coords);
            }
        });
        return {
            closest: this.closest,
            nextClosest: this.nextClosest,
        };
    }
}

function distance({x:x1, y:y1}, {x:x2, y:y2}) {
    return Math.sqrt(
        Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)
    );
}
