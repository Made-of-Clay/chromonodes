"use strict";
/* globals console */

// import './rAF-polyfill.js';
import state from './state.js';
import canvasSetup from './canvas-setup.js';
import addUser from './add-user.js';

// let renderer;
let app = {
    state,

    // draw() {
        // let time;
        // let controls = document.getElementById('controls');
        // time = new Date();
        // controls.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()}`;
        
        // // this.renderer.clear();
        // if (this.state.nodes.length) {
        //     this.state.nodes.forEach(node => {
        //         // check if node.userID matches userID
        //         // if so, use coords for circle; get node color from state.user[userID].color
        //     })
        // }
    // },
};

Promise.resolve(app)
    .then(addUser)
    .then(canvasSetup)
    // .then(() => animate())
    .then(() => console.log("state", state))
    .catch(thrown => console.error('%cAn error occurred:', 'font-weight:bold', thrown))
;

// function animate() {
//     app.draw();
//     requestAnimationFrame(animate);
// }
function output(str) {
    document.getElementById('output').innerHTML += `<br>${str}`;
}
window.getState = () => console.log('app.state', app.state);
/*
TODO: get touch-add working
-- create node using user's color
-- save node info to nodes array
TODO: share state over websockets
TODO: update state object when socket info comes in
 */
