"use strict";
let time;
let controls = document.getElementById('controls');

export default function animate() {
    // do things
    time = new Date();
    controls.innerText = time.getTime();

    requestAnimationFrame(animate);
}