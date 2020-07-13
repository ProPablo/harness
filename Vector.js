export default class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add = (other) => {
        this.x += other.x;
        this.y += other.y;
    }
    set = (x, y) => {
        this.x = x; this.y = y;
    }

    distance = (other) => {
        return Math.sqrt((other.x - this.x) ** 2 + (other.y- this.y) ** 2);
    }
}