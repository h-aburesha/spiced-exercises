// function createBear() {
//     this.name = name;
//     this.introduce = function () {
//         console.log("Hi!My name is: ", this.name);
//     };
// }

// var barbara = new createBear("barbara");

// // prototype:

function rectangle(width, height) {
    this.width = width;
    this.height = height;

    function getArea(rectangle) {
        return this.width * this.height;
        console.log("The Area is: ", getArea);
    }
}

let rectangleOne = new rectangle(2, 4);

// var rectangleOne = new rectangle(1, 2);
// console.log(rectangleOne);
// getArea(rectangleOne);

// function square(lengthAndWidth) {

// }
