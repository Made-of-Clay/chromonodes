"use strict";
/* globals console */

import './rAF-polyfill.js';
import { guid, randomHex } from './utils.js';
import state from './state.js';
import canvasSetup from './canvas-setup.js';

let app = {
    state: state,

    draw() {
        let time;
        let controls = document.getElementById('controls');
        time = new Date();
        controls.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()}`;
    },
};

Promise.resolve(app)
    .then(addUser)
    .then(canvasSetup)
    .then(() => animate())
    .catch(thrown => console.error('%cAn error occurred:', 'font-weight:bold', thrown))
;

function animate() {
    app.draw();
    requestAnimationFrame(animate);
}
function addUser(app) {
    let userID = guid();
    app.state[userID] = {
        color: randomHex()
    };
    return app;
}

/*
TODO: get touch-add working
-- create node using user's color
-- save node info to nodes array
TODO: share state over websockets
TODO: update state object when socket info comes in
 */
