import Vector from './Vector.js';
export default class Ship {
    constructor(pos = new Vector(0, 0), vel = new Vector(0, 0), acc = new Vector(0, 0)) {
        this.velocity = vel;
        this.acceleration = acc;
        this.pos = pos;
        this.image = new Image();
        this.image.src='./ship.png';
        // const prevheight = this.image.height;
        this.imageheight = 150;
        this.imagewidth =  210; //(1/(prevheight/15))* this.image.width;
        this.mass = 1;
    }

    // update = (x_accel =0, y_accel=0) => {
        // this.acceleration.set(x_accel, y_accel);
    update = () => {
        this.velocity.add(this.acceleration);
        this.pos.add(this.velocity);
        this.acceleration.set(0,0);
    }
    draw = (ctx) => {
        // ctx.strokeStyle = "#ffffff";
        // ctx.lineWidth = 10;
        // ctx.fillStyle = "#000000";
        // ctx.beginPath();
        // ctx.arc(this.pos.x, this.pos.y, 20 * 2, 0, 2 * Math.PI);
        // ctx.stroke();
        // ctx.fill();
        // ctx.closePath();
        ctx.drawImage(this.image, this.pos.x - this.imagewidth/2, this.pos.y - this.imageheight/2, this.imagewidth, this.imageheight); // Draws image so that pos vector is @ center 
    }
}