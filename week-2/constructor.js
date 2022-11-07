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

// let rectangleOne = new rectangle(2, 4);
// console.log(rectangleOne);

// rectangleOne.getArea();
// console.log(rectangleOne.getArea());

// console.log(typeof rectangleOne);

// function square(width) {
//     this.width = width;
//     this.height = width;
// }

// let squareOne = new square(6);

// squareOne.getArea();
// console.log(squareOne.getArea());

// // function square(widthAndHeight) {
// //     this.widthAndHeight = widthAndHeight;
// //     this.getArea = function () {
// //         return this.widthAndHeight * 2;
// //     };
// // }
