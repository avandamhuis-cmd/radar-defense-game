const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

let cameraX = -2500;
let cameraY = 0;

let dragging = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener("mousedown", e => {
    dragging = true;
    lastX = e.clientX;
    lastY = e.clientY;
});

window.addEventListener("mouseup", () => {
    dragging = false;
});

window.addEventListener("mousemove", e => {
    if (!dragging) return;

    cameraX -= e.clientX - lastX;
    cameraY -= e.clientY - lastY;

    lastX = e.clientX;
    lastY = e.clientY;
});

function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#00ff66";
    ctx.shadowColor = "#00ff66";
    ctx.shadowBlur = 10;
    ctx.lineWidth = 2;

    requestAnimationFrame(draw);
}

draw();
