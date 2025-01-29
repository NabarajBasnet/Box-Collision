const directions = [-1, 1];

class Box {
    constructor(x, y, w, h) {
        this.position = {
            x: x || 0,
            y: y || 0
        };

        this.size = {
            width: w || 0,
            height: h || 0
        };

        this.speed = Math.random() * (3 - 0.5) + 0.5;
    };

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.fillStyle = 'black';
        ctx.fill();
    };

    move(ctx) {
        this.position.x = this.position.x + directions[Math.floor(Math.random() * 2)] * this.speed;
        this.position.y = this.position.y + directions[Math.floor(Math.random() * 2)] * this.speed;
    };

    update(ctx) {
        this.draw(ctx);
        this.move(ctx);
    };
};

export default Box;
