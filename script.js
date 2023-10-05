const canvas = document.getElementById("mirrorCanvas");
const ctx = canvas.getContext("2d");
const startButton = document.getElementById("startAnimation");
const resetButton = document.getElementById("resetAnimation");

const mirrorRadius = 40; // Adjust as needed
const focalLength = 20; // Adjust as needed
const objectHeight = 10; // Adjust as needed
let animationInterval;

function drawMirror() {
    // Draw the concave mirror
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, mirrorRadius, 0, Math.PI, false);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();

    // Draw the optical axis
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.closePath();

    // Draw the object
    const objectX = canvas.width / 4;
    const objectY = canvas.height / 2 - objectHeight / 2;
    ctx.fillRect(objectX, objectY, 5, objectHeight);

    // Draw the focal point
    const focalX = canvas.width / 2 + focalLength;
    const focalY = canvas.height / 2;
    ctx.beginPath();
    ctx.arc(focalX, focalY, 3, 0, 2 * Math.PI, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function startAnimation() {
    clearCanvas();
    drawMirror();
    const objectX = canvas.width / 4;
    const objectY = canvas.height / 2 - objectHeight / 2;
    const intervalDuration = 100;
    let currentX = objectX;
    animationInterval = setInterval(() => {
        clearCanvas();
        drawMirror();
        ctx.beginPath();
        ctx.moveTo(objectX, objectY);
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.closePath();
        currentX += 1;
        if (currentX >= canvas.width / 2) {
            clearInterval(animationInterval);
        }
    }, intervalDuration);
}

function resetAnimation() {
    clearInterval(animationInterval);
    clearCanvas();
    drawMirror();
}

startButton.addEventListener("click", startAnimation);
resetButton.addEventListener("click", resetAnimation);
drawMirror();
