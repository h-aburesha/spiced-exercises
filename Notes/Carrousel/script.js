let images = document.getElementsByTagName("img");
let imagesArray = Array.from(images);
console.log(imagesArray);

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
