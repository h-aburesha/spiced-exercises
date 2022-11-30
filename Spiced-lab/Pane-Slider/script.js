(function () {
    var container = document.getElementById("container");
    var forground = document.getElementById("forground");
    var slider = document.getElementById("slider");

    console.log("container size: ", container.offsetWidth);
    console.log("container left: ", container.offsetLeft);

    var drag = false;

    slider.addEventListener("mousedown", function (e) {
        drag = true;
    });

    // let mouseMove = (event) => {}

    container.addEventListener("mousemove", function (event) {
        if (drag == true) {
            var mouseX = event.pageX - container.offsetLeft;
            console.log(event.pageX - container.offsetLeft);
            if (mouseX <= 0 || mouseX > 790) {
                return;
            }

            slider.style.left = mouseX + "px";
            forground.style.width = mouseX + "px";
        }
    });

    slider.addEventListener("mouseup", function (e) {
        drag = false;
    });
})();
