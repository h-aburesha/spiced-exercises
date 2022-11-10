let burgerMenu = document.getElementById("menu_svg");
let sideBar = document.getElementById("side-bar");
let xButton = document.getElementById("closebutton");

console.log(burgerMenu);
console.log(sideBar);
console.log(xButton);

burgerMenu.addEventListener("click", function (event) {
    sideBar.classList.toggle("hidden");
});

xButton.addEventListener("click", function (event) {
    sideBar.classList.toggle("hidden");
});
