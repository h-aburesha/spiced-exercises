var btn = document.getElementById("button");
var count = 0;

// // also an option to create a function outside
// function onButtonClick(e) {
//     count++;
//     console.log("user clicked" + count + "times");
//     e.stopPropagation();
// }

// // btn.addEventListener("click", function () {
// //     // console.log("pretty damn sure if you clicked on that game");

// //     // below this line is not needed anymore cuz defined above
// //     // count++;
// //     // console.log("user clicked" + count + "times");
// // });

// btn.addEventListener("click", onButtonClick);

// document.addEventListener("click", function () {
//     console.log("document was clicked");
// });

// // console.log("btn", btn);

// // recording events from user keyboard clicks (key count number corresponds to keyboard key)
// and use it to do something

// btn.addEventListener("keydown", function (event) {
//     console.log("user clicked a key", event);
//     console.log("event.keycode", event.keyCode);
//     if (event.keyCode === 65) {
//         // keyCode is depricated and eventually replaced by (key only)
//         console.log("user clicked on 'a'");
//         document.body.style.backgroundColor = "peachpuff";
//     } else {
//         console.log("you clicked somethingelse");
//         document.body.style.backgroundColor = "blue";
//     }
// });

// // DO YOU WANT TO LEAVE WEBSITE???

// var link = document.querySelector("a");

// link.addEventListener("click", function (event) {
//     if (confirm("do you want to leave the website?")) {
//         console.log("leaving");
//         return;
//     } else {
//         console.log("staying on page");
//         event.preventDefault();
//     }
// });

// change color buttons

// var title = document.querySelector("h1");
// var buttons = document.querySelectorAll("button");

// // console.log("buttons", buttons);

// buttons.forEach(function (button) {
//     button.addEventListener("click", function (event) {
//         // console.log(event.target.id);
//         title.style.color = event.target.id; // or just simpley "red", etc.
//         // note that the id just injects the color to the above, so if there is a typo it will
//         // not translate to anything in css upon change.
//     });
// });

var input = document.body.querySelector("input");
console.log("input", input);

input.addEventListener( "input", function() {
    console.log("input happening");
    console.log("event.target.value; event")
}
))
