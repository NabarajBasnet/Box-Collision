const element = document.getElementById('rect');
const ctx = element.getContext('2d');
let start;
let position = {
    y: 0
}

const speed = 5;
let dir = 1;
const moveBox = () => {

    ctx.clearRect(0, 0, element.clientWidth, element.height);

    requestAnimationFrame(moveBox);
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.rect(470 / 2, (position.y += dir), 30, 30);
    ctx.fill();

    if (position.y >= element.height - 30) {
        dir = -1;
    };
}

requestAnimationFrame(moveBox);
