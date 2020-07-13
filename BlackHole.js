import Vector from "./Vector.js"
const gravConstant = 6.674e-11;

export default class BlackHole {
    constructor() {
        this.pos = new Vector(0,0);
        this.mass = 15e7; //(kgs)
    }
    update = (x, y) => {
        console.log(x, y);
        this.pos.set(x, y);
    }
    attract = (ship) => {
        //Force calc * unit vector
        //Position is based on where mouse is relative to viewport
        console.log(this.pos)
        const Force = Vector.fromVector(this.pos);

        //Force.subtract(ship.pos);
        //The Force to be calculative relative to viewport origin (canvas/2)
        const distsqrd = Force.magnitude ** 2;
        Force.toUnitVect();
        Force.scalarMult(gravConstant * (this.mass*ship.mass) / distsqrd);
        //Force.scalarMult(1/ship.mass);
        return Force;
    }
}