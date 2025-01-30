const directions = [-1, 1];

class Box {
    constructor(x, y, w, h, canvas) {
        this.position = {
            x: x || 0,
            y: y || 0
        };

        this.size = {
            width: w || 0,
            height: h || 0
        };

        this.speed = Math.random() * (3 - 0.5) + 0.5;

        this.velocity = {
            x: directions[Math.floor(Math.random() * 2)] * this.speed,
            y: directions[Math.floor(Math.random() * 2)] * this.speed
        };

        this.canvas = canvas;
    };

    draw(ctx) {
        ctx.beginPath();
        ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
        ctx.fillStyle = 'black';
        ctx.fill();
    };

    move(ctx) {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    };

    update(ctx) {
        this.draw(ctx);
        this.move(ctx);
        this.checkBorderCollision();
    };

    checkBorderCollision() {
        if (this.position.x <= 0 || this.position.x >= this.canvas.width - this.size.width) {
            this.velocity.x *= -1;
        };
        if (this.position.y <= 0 || this.position.y >= this.canvas.height - this.size.height) {
            this.velocity.y *= -1;
        };
    };
};

export default Box;
