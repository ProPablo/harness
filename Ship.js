import Vector from './Vector.js';
export default class Ship {
    constructor(pos = new Vector(0, 0), vel = new Vector(0, 0), acc = new Vector(0, 0)) {
        this.velocity = vel;
        this.acceleration = acc;
        this.pos = pos;
    }

    update = () => {
        this.velocity.add(this.acceleration);
        this.pos.add(this.velocity);
        //this.acceleration.set(0, 0);
    }
    draw = (ctx) => {
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 10;
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 20 * 2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.restore();
        ctx.closePath();
    }
}