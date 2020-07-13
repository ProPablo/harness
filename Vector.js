//Arrow functions are not needed in this class as they need to be defined only once, not for every instance
//No binding specific to instance
export default class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        this.x += other.x;
        this.y += other.y;
    }
    subtract(other) {
        this.x -= other.x;
        this.y -= other.y;
    }
    set(x, y) {
        this.x = x; this.y = y;
    }

    scalarMult (scalar) {
        this.x*=scalar;
        this.y*=scalar;
    }

    copy (vect)  {
        this.set(vect.x, vect.y);
    }

    toUnitVect() {
        const mag = this.magnitude;
        this.x = this.x/mag;
        this.y = this.y/mag;
    }

    get magnitude() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }

    distance (other) {
        return Math.sqrt((other.x - this.x) ** 2 + (other.y - this.y) ** 2);
    }

    get toString() {
        return `[Vector] x: ${this.x}, y: ${this.y}`;
    }

    static fromVector(vector) {
        return new Vector(vector.x, vector.y); 
    }
}