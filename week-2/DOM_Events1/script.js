let box = document.getElementById("box");

//// 1-MOUSE FOLLOW
// const onMouseMove = (e) => {
//     box.style.left = e.pageX + "px";
//     box.style.top = e.pageY + "px";
// };

document.addEventListener("mousemove", onMouseMove);

box.addEventListener("mousedown", function (event) {
    box.style.backgroundColor = event.target.id;
});
