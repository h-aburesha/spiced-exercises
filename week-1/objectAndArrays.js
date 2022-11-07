/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */

// function type(param) {
//     console.log("Param is: ", param, "\tis the type of: ", typeof param);

// }

// type(1);

// function whatAmI (param1, param2) {
//  if (typeof param1 === Object && !Array.isArray)
// }

// -------

function whatAmI(param1, param2) {
    console.log("\t---------------------");

    if (typeof param1 === "object") {
        if (Array.isArray(param1)) {
            console.log("Is an Array");

            for (var i = 0; i < param1.length; i++);
            console.log("param1[i]", param1[i]);
            console.log("i: ", i);
        } else {
            console.log("Is an object");
        }
    } else {
        console.log("I don#t care");
    }
}

// whatAmI([2, 3]);

function newTest(mystery1, mystery2) {
    if (typeof mystery1 || mystery2 === "object") {
        if (Array.isArray(mystery1, mystery2)) {
            console.log("effin Array");

            //     for (var i = 0; i < mystery1.length || mystery2.length; i++);
            //     console.log("mystery1", mystery1[i], "mystery2", mystery2[i]);
            // } else {
            //     console.log("I am an object then");
            // }
        } else {
            console.log("???????");
        }
    }
}

newTest([2, 3], 8);
