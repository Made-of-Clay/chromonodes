"use strict";
/* globals console */

import './rAF-polyfill.js';
import { guid, randomHex } from './utils.js';
import state from './state.js';
import canvasSetup from './canvas-setup.js';

let app = {
    state,

    draw() {
        let time;
        let controls = document.getElementById('controls');
        time = new Date();
        controls.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()}`;
        // testo(this);
        if (this.canvas) {
            this.canvas.renderAll();
        }
    },
};
function testo(app) {
    window.rect = new fabric.Rect({ // TODO: move this logic to more appropriate place
        left: 100,
        top: 100,
        fill: 'red',
        width: 60,
        height: 60,
        hasControls: false
    });

    app.canvas.add(rect);
console.log("app.canvas", app.canvas);
    app.canvas.on({
        // 'object:moving': ({target:{top, left}}) => console.log(top, left),
        // 'mouse:down': event => console.log(event),
        // 'mouse:down': event => addRect(app.canvas, event.e.screenX, event.e.screenY, event),
        'mouse:down': event => {
            console.log('event', event);
            if (!event.target) {
                addRect(app.canvas, event.e.pageX, event.e.pageY)
            }
        },
    });
}
function addRect(canvas, left, top) {
    console.log('arguments', arguments);
    let opts = {
        left,
        top,
        fill: 'blue',
        width: 60,
        height: 60,
        hasControls: false
    };
    let newRect = new fabric.Rect(opts);
    canvas.add(newRect);
}

Promise.resolve(app)
    .then(addUser)
    .then(canvasSetup)
    .then((app) => testo(app))
    .then(() => animate())
    .then(() => console.log("state", state))
    .catch(thrown => console.error('%cAn error occurred:', 'font-weight:bold', thrown))
;

function animate() {
    app.draw();
    requestAnimationFrame(animate);
}
function addUser(app) {
    let userID = guid();
    app.state.users[userID] = {
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
