"use strict";
/*  */
import Renderer from './Renderer.js';

export default function canvasSetup(app) {
    let canvas = document.getElementById('stage');
    app.renderer = new Renderer(canvas);

    return app;
}
