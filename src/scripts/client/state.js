"use strict";

// The Truth!
export default {
    // nodes: [],
    nodes: {},
    connections: [],
    users: {},
    currentUser: {
        userID: '',
        color: ''
    }
};

/*
e.g. 
{
    nodes: [{ // ORIG
        userID: 'guid',
        coords: [{ x:0, y:0 }],
        nodeID: 'guid'
    }],
    nodes: { // ALT
        nodeID: {
            userID: 'guid',
            coords: [{ x:0, y:0 }],
            color: ''
        }
    },
    connections: [{
        e1: { x:0, y:0 },
        e2: { x:0, y:0 },
    }],
    users: {
        guid: {
            color: ''
        }
    }
}
 */
