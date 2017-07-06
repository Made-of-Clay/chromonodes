export default class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
    }

    clear() {
        // logic to clear canvas
    }
}