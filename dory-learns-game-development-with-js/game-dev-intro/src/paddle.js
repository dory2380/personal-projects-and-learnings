// Paddle class represents the game paddle we control to bounce the ball back
export default class Paddle {
    constructor(gameWidth, gameHeight) {
        this.width = 150;
        this.height = 20;
        // The x is half the game screen - half the board
        // The y is the game screen - height of the paddle - 10 just for space beneath
        this.position = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
    }

    // Draw the paddle
    draw(context) {
        context.fillStyle = 'skyblue';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

}