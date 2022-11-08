// const headlines = body.querySelectorAll("#headlines");
// const headlinesArray = Array.from(headlines);
// console.dir(headlines);

let headlines = document.getElementById("headlines");
let firstLink = document.querySelector("a");
let widthOfHeadlines = headlines.offsetWidth;
let currentLeftValue = widthOfHeadlines;

function moveLeft() {
    if (headlines.offsetLeft + firstLink.offsetWidth < 0) {
        headlines.removeChild(firstLink);
        headlines.appendChild(firstLink);
        firstLink = document.querySelector("a");
        currentLeftValue = 0;
        headlines.style.left = currentLeftValue + "px";
    }

    // check if sum of headlines.offsetLeft and firstLink.offsetWidth is smaller than 0
    // if yes, do the following steps:
    // remove the firstLink from headlines
    // append firstLink to headlines with appendChild
    // get the current new first link with querySelector and save it to firstLink variable
    // reset currentLeftValue to 0
    // set headlines.style.left to the new value of currentLeftValue

    requestAnimationFrame(() => {
        currentLeftValue = currentLeftValue - 1;
        headlines.style.left = currentLeftValue + "px";
        moveLeft();
    });
}

moveLeft();
