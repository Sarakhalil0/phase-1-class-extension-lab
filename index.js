// Your code here
class Polygon {
    constructor(shape) {
        this.shape = shape;
    }
    get countSides() {
        return this.shape.length;
    }
    get perimeter() {
        return this.shape.reduce((oldValue, newValue) => {
            return oldValue + newValue
            //lera sum'y this.shape denetawa ka laxwarawa ba parameter peman dawa
        },0)
    }
}

const polygon = new Polygon([5, 5, 5])
console.log(polygon.perimeter); //15 => the sum of array
console.log(polygon.countSides); //3 => the length of arra

class Triangle extends Polygon {
    get isValid() {
        const sides = this.shape
        return (sides[0] + sides[1] > sides[2])
            && (sides[0] + sides[2] > sides[1])
            && (sides[1] + sides[2] > sides[0])
    }
}

const triangle = new Triangle([5, 5, 5])
const triangle2 = new Triangle([15, 10, 1])
console.log(triangle.perimeter); //15 the sum of array
console.log(triangle.isValid); //true //hamuy kodakatawa agar anjamyan gawratr bu lay seyam true dada
console.log(triangle2.perimeter); //26 the sum of array
console.log(triangle2.isValid); //false 


class Square extends Polygon {
    get isValid() {
        const sides = this.shape
        return (sides[0] ** 4) === (sides.reduce((oldValue, newValue) => oldValue * newValue))
        //2**4 (=16) ===2*2*2*2(=16) labar away (square) chwargoshaya boya 4 bakarhatwa
    }
    get area() {
        return this.shape[0] ** 2
        //Area of the Square: A = a2
    }
}

const square = new Square([2, 2, 2, 2])
const square2 = new Square([5, 4, 3, 2])
console.log(square.isValid); //true => the lengths of all sides are equal
console.log(square.countSides); //4 => the length of array of triangle
console.log(square.area); //4 => the length of array of triangle
console.log(square2.isValid); //false => the lengths of all sides are not equal
console.log(square2.countSides); //4 => the length of array of triangle
