// 1. Write a function that takes an array as an argument and returns a new array
// containing all of the items that are in the array that was passed in but in
// reverse order. This function should

// leave the original array unchanged

// contain no loops of any kind. That includes for, for...in, for...of, while, and do...while

// not call slice or any other method on the original array

// not call push or concat on any array in any way

const arrayBefore = ["one", "two", "three"];

function reverseArray(arrayBefore) {
    let [...copy] = arrayBefore;
    return arrayBefore.reverse();
}
const arrayAfter = reverseArray(arrayBefore);
console.log("arrayAfter: ", arrayAfter);

// 2. Write a function that takes two arrays as arguments and returns
// a new array containing all of the items in the two arrays passed to it.
// This function should leave the original arrays unchanged

// contain no loops of any kind. That includes for, for...in, for...of, while, or do...while

// not call slice or any other method on the two arrays passed to it

// not call push or concat on any array in any way

const arr1 = ["a", "b", "c"];
const arr2 = ["x", "y", "z"];

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

const alsoAlso = mergeArrays(arr1, arr2);
console.log("alsoAlso: ", alsoAlso);

// OR
// const merged = [...arr1, ...arr2];
// console.log("mergedArray: ", merged);

// // OR
// const alsoMerged = [].concat(arr1, arr2);
// console.log("alsoMerged: ", alsoMerged);

//3.

function logInfo(city) {
    const { name, country, population: numPeople } = city;

    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}
logInfo({ name: "Marseille", country: "France", population: 861635 });

//4.
