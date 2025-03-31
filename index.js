// Your code here

class Polygon{
    constructor(sides){
       this.sides = sides;
    }
    get countSides(){
        return this.sides.length;
    }
 
    get perimeter(){
        return this.sides.reduce((a, b) => a + b)
    }
}

class Triangle extends Polygon{
    get isValid() {
        if (this.countSides !== 3) return false;
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
    }
}

class Square extends Polygon{
    get isValid() {
        if (this.countSides !== 4) return false;
        return this.sides.every(side => side === this.sides[0]);
    }

    get area() {
        return this.isValid ? this.sides[0] ** 2 : undefined;
    }
}