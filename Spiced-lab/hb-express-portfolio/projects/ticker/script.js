// const headlines = body.querySelectorAll("#headlines");
// const headlinesArray = Array.from(headlines);
// console.dir(headlines);

let headlines = document.getElementById("headlines");
let firstLink = document.querySelector("a");
let ticker = document.querySelector("#ticker");
let widthOfHeadlines = headlines.offsetWidth;
let currentLeftValue = widthOfHeadlines;
let id;

function moveLeft() {
    if (headlines.offsetLeft + firstLink.offsetWidth < 0) {
        headlines.removeChild(firstLink);
        headlines.appendChild(firstLink);
        firstLink = document.querySelector("a");
        currentLeftValue = 0;
        headlines.style.left = currentLeftValue + "px";
    }

    // STEPS to stop animation and restart it:
    // 0. save instance of #ticker to variable with any method.
    // 1. have a variable where we can save the current identifier for requestAnimationFrame()
    // 1. add a eventlistner to headlines for ‘mouseenter’
    //     - in the callback function for ‘mousenter’ we want to cancel the animation (cancelAnimationFrame)
    // 2. add another eventlistner to headlines for ’mouse
    //     - in the callback functuion for ‘mouseleave’ we

    // check if sum of headlines.offsetLeft and firstLink.offsetWidth is smaller than 0
    // if yes, do the following steps:
    // remove the firstLink from headlines
    // append firstLink to headlines with appendChild
    // get the current new first link with querySelector and save it to firstLink variable
    // reset currentLeftValue to 0
    // set headlines.style.left to the new value of currentLeftValue

    id = requestAnimationFrame(() => {
        currentLeftValue = currentLeftValue - 1;
        headlines.style.left = currentLeftValue + "px";
        moveLeft();
    });
}

moveLeft();

headlines.addEventListener("mouseenter", function () {
    cancelAnimationFrame(id);
});

headlines.addEventListener("mouseleave", function () {
    moveLeft();
});
