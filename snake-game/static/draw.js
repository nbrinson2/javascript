const canvas = document.querySelector(".canvasmain");
const ctx = canvas.getContext("2d");
const eatSound = new Audio("static/sound/eat.wav");
const hitSound = new Audio("static/sound/hit.wav");
const dirSound = new Audio("static/sound/dir.wav");

//size of one unit or one box
const boxScale = 20;

// Fix bug where odd number prevents fruit from being eaten
const canvasWidth = window.innerWidth - (window.innerWidth % boxScale);
const canvasHeight = window.innerHeight - (window.innerHeight % boxScale);

//providing bg color
var grd = ctx.createLinearGradient(0, 0, canvasWidth, 0);
// grd.addColorStop(0,'green');
// grd.addColorStop(1,'lightgreen');
ctx.fillStyle = grd;
ctx.fillRect(0, 0, canvasWidth, canvasHeight);

//no of rows and columns
const rows = canvasHeight / boxScale;
const columns = canvasWidth / boxScale;

var snake;
var intervalCounter = 90;

function interval(interval) {
  setInterval(x, interval);
}

function x() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  fruit.drawFruit();
  snake.move();
  snake.drawSnake();

  if (snake.eat(fruit)) {
    fruit.locate();

    // ADD INCREASING SPEED
    // intervalCounter -= 5;
    // clearInterval(interval);
    // interval(intervalCounter);
  }

  if(snake.collision()) {
    
  }
  document.querySelector(".score").innerText = snake.score;
  document.querySelector(".high-score").innerText = snake.highScore;
}

//this calls itself
function InitialSetUP(firstTimeSetup) {
  document.getElementById("canvas").width = canvasWidth;
  document.getElementById("canvas").height = canvasHeight;

  if (firstTimeSetup) {
    snake = new snake();
    fruit = new fruit();
    fruit.locate();
  }
  interval(intervalCounter);
}

InitialSetUP(true);

window.addEventListener("keydown", function (event) {
//   dirSound.play();
  var dir = event.key;
  snake.changeDirection(dir);
});

window.addEventListener("resize", function (event) {
  canvasHeight = window.innerHeight - 10;
  canvasWidth = window.innerWidth - 10;
});
