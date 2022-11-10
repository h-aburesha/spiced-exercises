console.log("sanity");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

console.log("ctx", ctx);

// draw a TRIANGLE

ctx.strokestyle = "black"; // color of the pen
ctx.fillStyle = "hotpink";
ctx.lineWidth = 5; // thickness of the pen

// to get the the cursor position //

document.body.addEventListener("click", function (e) {
    console.log("e.PageX, e.PageY", e.pageX, e.pageY);
});

// start painting;
// Head:

ctx.beginPath();
ctx.arc(251, 90, 100, 0, Math.PI * 2);
ctx.fillStyle = "aquamarine";
ctx.fill();
ctx.stroke;

// Eyes left:
ctx.beginPath();
ctx.arc(240, 86, 10, 0, Math.PI * 2);
ctx.fillStyle = "black";
ctx.fill();
ctx.stroke;

// eye right:

ctx.beginPath();
ctx.moveTo(308, 93);
ctx.lineTo(273, 93);
ctx.lineTo(296, 80);
ctx.strokestyle = "black";
ctx.stroke();

// ctx.lineTo(10, 30);

//mouth:

ctx.beginPath();
ctx.arc(263, 131, 25, 0, Math.PI * 1);
ctx.fillStyle = "gold";
ctx.fill();
ctx.stroke;

//tongue:
ctx.beginPath();
ctx.arc(273, 131, 15, 0, Math.PI * 1);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke;

//body:
ctx.beginPath();
ctx.moveTo(268, 214);
ctx.lineTo(331, 442);
ctx.strokestyle = "black";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(277, 257);
ctx.lineTo(214, 310);
ctx.strokestyle = "black";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(214, 310);
ctx.lineTo(139, 264);
ctx.strokestyle = "black";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(284, 262);
ctx.lineTo(369, 210);
ctx.strokestyle = "black";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(369, 210);
ctx.lineTo(449, 255);
ctx.strokestyle = "black";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.stroke();

//legs left
ctx.beginPath();
ctx.moveTo(331, 442);
ctx.lineTo(231, 547);
ctx.strokestyle = "black";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(331, 442);
ctx.lineTo(231, 547);
ctx.strokestyle = "black";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(231, 547);
ctx.lineTo(208, 680);
ctx.strokestyle = "black";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(331, 442);
ctx.lineTo(523, 549);
ctx.strokestyle = "black";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(523, 549);
ctx.lineTo(587, 440);
ctx.strokestyle = "black";
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.stroke();

// ctx.lineTo(296, 80);
// ctx.strokestyle = "black";
// ctx.stroke();

// ctx.closePath();

// ctx.fill();

// Big-Circle

// ctx.beginPath();
// ctx.fillStyle = "skyblue";
// ctx.arc(300, 200, 80, 0, Math.Pi * 2);
// // x,y, radius, start angle, end angle
// ctx.fill();
// ctx.stroke;

// smallerCircle
