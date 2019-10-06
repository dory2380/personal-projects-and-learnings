/**
 * Paddle class represents the game paddle we control to 
 * bounce the ball back
 */
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

    /**
     * Draw the paddle
     * @param {*} context 
     */
    draw(context) {
        context.fillStyle = 'skyblue';
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    /**
     * Change the board right 5px per second,
     * @param {*} deltaTime is the time since last update
     */
    update(deltaTime) {
        // The first time the game is run, there is no deltaTime passed to gameLoop, so deltaTime here will be null
        if (!deltaTime) {
            return;
        }
        // 5 px divided by how much time has passed
        this.position.x += 5 / deltaTime;
    }
}