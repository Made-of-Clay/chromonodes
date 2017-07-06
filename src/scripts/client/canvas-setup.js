"use strict";
/* globals PIXI */

export default function canvasSetup(app) {
    app.canvas = new fabric.Canvas('stage');
    app.canvas.setHeight(window.innerHeight);
    app.canvas.setWidth(window.innerWidth);
    app.canvas.renderAll();
    // let renderer = PIXI.autoDetectRenderer(400, 400, {
    //     transparent: true
    // });
    // renderer.view.id = 'playground';
    // app.renderer = renderer;

    // const wrapper = document.getElementById('wrapper');
    // wrapper.appendChild(renderer.view);

    // let stage = new PIXI.Container();
    // app.stage = stage;

    // renderer.render(stage);

    return app;
}
