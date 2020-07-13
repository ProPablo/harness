import Vector from './Vector.js';
export default class BG {
    constructor(pos = new Vector(0, 0)) {
        this.pos = pos;
        Math.random()
    }

    update = () => {
        this.velocity.add(this.acceleration);
        this.pos.add(this.velocity);
        //this.acceleration.set(0, 0);
    }
    draw = (ctx) => {
        //Procedural generation
        //Render in chunks
        //chunk size based on velocity of player
    }
}