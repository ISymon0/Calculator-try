scl = 10;


function preload() {
  mySound = loadSound('gameover.mp3');
}

function setup() {
  cnv = createCanvas(350, 350);
  frameRate(10);
  let food = foodLocation();
  ele = createAudio('theme.mp3');
  ele.loop();
}

function draw() {
  background(0);
  s.move();
  s.wall();
  s.lose();
  s.updateScreen(s.x, s.y);
  fill(255, 0, 50);
  rect(food.x, food.y, scl, scl)
  if (s.eat() == true) {
    foodLocation();
  }
}

class Snake {
  constructor(x, y, xspeed, yspeed) {
    this.x = x;
    this.y = y;
    this.xspeed = xspeed;
    this.yspeed = yspeed;
    this.snakeArray = [];
    this.lengthOfSnake = 0;
  }
  move() {
    if (this.lengthOfSnake === this.snakeArray.length) {
      for (let i = 0; i < this.snakeArray.length - 1; i++) {
        this.snakeArray[i] = this.snakeArray[i + 1];
      }
    }
    this.snakeArray[this.lengthOfSnake - 1] = createVector(this.x, this.y);
    this.x += this.xspeed;
    this.y += this.yspeed;
  }
  dir(x, y) {
    if (x == 1) {
      this.xspeed = 1 * scl;
      this.yspeed = 0;
    } else if (x == -1) {
      this.xspeed = -1 * scl;
      this.yspeed = 0;
    }
    if (y == 1) {
      this.yspeed = 1 * scl;
      this.xspeed = 0;
    } else if (y == -1) {
      this.yspeed = -1 * scl;
      this.xspeed = 0;
    }
  }
  wall() {
    if (this.x > 350) {
      this.x = 0
    } else if (this.x < 0) {
      this.x = 350;
    }
    if (this.y > 350) {
      this.y = 0
    } else if (this.y < 0) {
      this.y = 350;
    }
  }
  eat() {
    var d = dist(s.x, s.y, food.x, food.y);
    if (d < 1) {
      this.lengthOfSnake++;
      play('food.mp3');
      return true;
    } else {
      return false;
    }
  }
  updateScreen(x, y) {
    fill(255, 255, 255);
    rect(x, y, scl, scl);
    fill(255, 255, 255);
    for (let i = 0; i < this.lengthOfSnake; i++) {
      rect(this.snakeArray[i].x, this.snakeArray[i].y, scl, scl);
    }
  }
  lose() {
    for (let i = 0; i < this.snakeArray.length; i++) {
      if (this.x == this.snakeArray[i].x && this.y == this.snakeArray[i].y) {
        noLoop();
        ele.stop();
        mySound.play();
        textSize(25);
        text('GAME OVER!', 180, 200);
        cnv.mousePressed(replay);
        this.x = 0;
        this.y = 0;
        this.snakeArray = [];
        this.lengthOfSnake = 0;
      }
    }
  }
}

var s = new Snake(0, 0, 20, 0);

function keyPressed() {
  if (key === 'w') {
    s.dir(0, -1);
  } else if (key === 's') {
    s.dir(0, 1);
  } else if (key === 'd') {
    s.dir(1, 0);
  } else if (key === 'a') {
    s.dir(-1, 0);
  }
}

const up = document.querySelector('.up');
const down = document.querySelector('.down');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

if (up) {
  up.addEventListener('click', function () {
    s.dir(0, -1);
  });
}
if (down) {
  down.addEventListener('click', function () {
    s.dir(0, 1);
  });
}
if (left) {
  left.addEventListener('click', function () {
    s.dir(-1, 0);
  });
}
if (right) {
  right.addEventListener('click', function () {
    s.dir(1, 0);
  });
}

function foodLocation() {
  const rows = floor(width / scl);
  const cols = floor(height / scl);
  food = createVector(floor(random(rows)), floor(random(cols)));
  food.mult(scl);
}

function play(audioFile) {
  let audio = new Audio(audioFile);
  audio.play();
}

function replay() {
  loop();
  mySound.stop();
  ele.loop();
}
