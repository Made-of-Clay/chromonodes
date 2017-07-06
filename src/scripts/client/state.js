"use strict";

// The Truth!
export default {
    nodes: [],
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
    nodes: [{
        userID: 'guid',
        coords: [{ x:0, y:0 }]
    }],
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
