// function createBear() {
//     this.name = name;
//     this.introduce = function () {
//         console.log("Hi!My name is: ", this.name);
//     };
// }

// var barbara = new createBear("barbara");

// // prototype:

function Rectangle(w, h) {
    this.width = w;
    this.height = h;

    this.getArea = function () {
        return this.width * this.height;
    };
}

const rectangle = new Rectangle(3, 4);
console.log(rectangle);
console.log("area: ", rectangle.getArea());

function Square(l) {
    Rectangle.call(this, l, l);
}
const square = new Square(8);
console.log(square, square.getArea());

// second task //

function invertCase(text) {
    let newText = "";
    for (let char of text) {
        if ((char === char.toUpperCase()) === char) {
            newText = newText;
        }
    }
}
