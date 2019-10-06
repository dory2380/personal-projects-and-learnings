// Import other game elements
import Paddle from "./paddle";


// Grab canvas from HTML document and set up context to be 2d
const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

// Game constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


// Create game elements
const paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

// Draw the paddle
paddle.draw(context);

// Last time game got updated
let lastTime = 0;

/**
 * Main game loop
 * @param {*} timestamp 
 */
function gameLoop(timestamp) {
    // Calculate how much time has passed
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;


    // Clearing the canvas and update paddle
    context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    paddle.update(deltaTime);
    paddle.draw(context)

    // When the next frame is ready, called this function and pass the timestamp!
    requestAnimationFrame(gameLoop)
}

gameLoop();