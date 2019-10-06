// Import other game elements
import Paddle from "./paddle";


// Grab canvas from HTML document and set up context to be 2d
const canvas = document.getElementById('gameScreen');
const context = canvas.getContext('2d');

// Game constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

// Clearing the canvas
context.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

// Create game elements
const paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

// Draw the paddle
paddle.draw(context);


