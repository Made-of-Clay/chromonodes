"use strict";

const nodeRadius = 50;

export default function spawnNode(app, event) {
    let { pageX, pageY } = event.e.touches ? event.e.touches[0] : event.e;
    if (!event.target) {
        let offset = -20;
        let centered = {
            x: (pageX - nodeRadius),
            y: (pageY - nodeRadius),
        };
        addCircle({
            x: centered.x,
            y: centered.y,
            color: app.state.currentUser.color,
            canvas: app.canvas
        });
        let currentUser = app.state.currentUser;
        app.state.nodes.push({
            color: currentUser.color,
            coords: centered,
            userID: currentUser.userID,
        });
        return centered;
    }
}

function addCircle({x, y, color, canvas}) {
    // console.log("x, y, color, canvas", x, y, color, canvas);
    let circle = new fabric.Circle({
        left: x,
        top: y,
        radius: nodeRadius,
        fill: color,
        hasControls: false,
    });
    canvas.add(circle);
}
