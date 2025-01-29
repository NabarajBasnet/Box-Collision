const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
import Box from "./boxes.js";

const documentHeight = document.documentElement.clientHeight / 1.6;
const documentWidth = document.documentElement.clientWidth / 1.2;

canvas.height = documentHeight;
canvas.width = documentWidth;

canvas.style.border = '2px solid gray';

const boxes = Array.from({ length: 10 }, () => {
    return new Box(
        Math.random() * (canvas.width - 20),
        Math.random() * (canvas.height - 20),
        20,
        20
    );
});

const gameLoop = () => {

    canvas.height = documentHeight;
    canvas.width = documentWidth;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    boxes.forEach((box) => {
        box.update(ctx);
    });
    requestAnimationFrame(gameLoop);
};

requestAnimationFrame(gameLoop);
