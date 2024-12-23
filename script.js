
const element = document.getElementById('rect');
const ctx = element.getContext('2d')
let start;

const moveBox = (timestamp) => {
    if (start === undefined) {
        start = timestamp
    }

    var elapsed = timestamp - start;
    var shift = Math.min(0.1 * elapsed, 470)

    ctx.clearRect(0, 0, element.clientWidth, element.height);

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.rect(0, shift, 30, 30)
    ctx.fill();

    if (shift < 470) {
        requestAnimationFrame(moveBox);
    } else if (shift === 470) {

        var elapsed = timestamp - start;
        var shift = Math.min(0.1 * elapsed, 0);

        ctx.clearRect(0, 0, element.clientWidth, element.height);

        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.rect(0, shift, 30, 30);
        ctx.fill();
    }
};

requestAnimationFrame(moveBox);
