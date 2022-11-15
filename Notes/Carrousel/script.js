let images = document.getElementsByTagName("img");
let imagesArray = Array.from(images);

let dot = Array.from(document.querySelectorAll(".dot"));
// 1. const images = use getElementsByClass or getElementsByTagName or querySelectorAll
//    to get all the images. Convert it to array with Array.from();
// 2. let index = 0 // have a running index to know which element we want to add/remove classes to

let i = 0;

function moveImages() {
    setTimeout(() => {
        // first kitty
        imagesArray[i].classList.remove("onscreen");
        imagesArray[i].classList.add("hidden-left");

        i = i + 1;
        i = i === imagesArray.length ? 0 : i;

        // second kitty
        imagesArray[i].classList.add("onscreen");

        // 1. for current image (images[index]) :
        // - remove onscreen class
        // - add hidden-left class
        // 2. increase the index
        // check if index is "overflowing"
        // if(index === images.length)
        // then set index to 0
        // 3. for next image (images[index])
        // - add onscreen class

        moveImages();
    }, 3000);
}

moveImages();

// transition ends whenever the animation has ended from the browser
document.addEventListener("transitionend", (event) => {
    const ImageElement = event.target;
    if (ImageElement.classList.contains("hidden-left")) {
        ImageElement.classList.remove("hidden-left");
    }
});

// IMPORTANT: dots is an array. You CANNOT do dots.addEventListener()
// - create loop for every dot with (with 'for(let i = 0; ...)').
// 1. create `addEventListener` for every dot in the loop
// dots[i].addEventListener('click', () => { ... })
// when the event has fired. Log the index of the clicked dot

// for (let i = 0; i < dot.length; i++) {
//     dot[i].
// }
