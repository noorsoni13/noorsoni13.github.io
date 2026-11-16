

let song;
let bell;
let xDirectionArray = [1, 0, -1, 0];
let yDirectionArray = [0, 1, 0, -1];
let directionIndex = 0;

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    directionIndex = 0;
  } else if (keyCode === DOWN_ARROW) {
    directionIndex = 1;
  } else if (keyCode === LEFT_ARROW) {
    directionIndex = 2;
  } else if (keyCode === UP_ARROW) {
    directionIndex = 3;
  }

  return false; // Prevent arrow keys from scrolling
}

function rightButton() {
  if (directionIndex != 2) {
    directionIndex = 0;
  }
}
function leftButton() {
  if (directionIndex != 0) {
    directionIndex = 2;
  }
}
function upButton() {
  if (directionIndex != 1) {
    directionIndex = 3;
  }
}
function downButton() {
  if (directionIndex != 3) {
    directionIndex = 1;
  }
}
//caterpillar section locations
let cX = [];
let cY = [];
//length
let len = 1;
//size of each section
let diameter = 10;
function caterpillar() {
  if (cX[0] == foodX && cY[0] == foodY) {
    plotFood();
    len += 1;
    bell.play();
  }
  for (let i = len - 1; i > 0; i--) {
    cX[i] = cX[i - 1];
    cY[i] = cY[i - 1];
  }
  cX[0] += xDirectionArray[directionIndex] * 10;
  cY[0] += yDirectionArray[directionIndex] * 10;
  for (let i = 0; i < len; i++) {
    fill("green");
    cX[i] = constrain(cX[i], 5, 400 - 5);
    cY[i] = constrain(cY[i], 5, 400 - 5);
    circle(cX[i], cY[i], diameter);
  }
}
function plotFood() {
  let success = false;
  while (!success) {
    foodX = round(random(5, 399));
    foodX -= foodX % 10;
    foodX += 5;
    foodY = round(random(5, 401));
    foodY -= foodY % 10;
    foodY += 5;
    for (let i = 0; i < len; i++) {
      if (cX[i] == foodX && cY[i] == foodY) {
        success = false;
        break;
      } //if

      //will cause while loop to stop
      if (i == len - 1) {
        success = true;
      } //if
    } //for i
  } //while
} //plotFood
function strt() {
  loop();
    song.play();
}


function setup() {
/*
  song = await loadSound("superM.mp3");
  bell = await loadSound("explsn.mp3");
*/

  song = new Audio("superM.mp3");
  bell = new Audio("explsn.mp3");



/*  
canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);  <--top left behind everything??
  canvas.style('z-index', '-1');
*/

//new:
const canvas = createCanvas(400, 500);
canvas.parent("sketch-container");
  angleMode(RADIANS);
    


  noLoop();
  frameRate(10);
  cX[0] = 35;
  cY[0] = 15;
  //cX[1] = 25;
  //cY[1] = 15;
  //cX[2] = 15;
  //cY[2] = 15;
  plotFood();
  button = createButton("start!");
//added
button.parent("sketch-container");

  button.mouseClicked(strt);
  button.size(100, 50);
  button.position(10, 420);
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "28px");

 //up button
 button = createButton("U");
//added
button.parent("sketch-container");


 button.mouseClicked(upButton);
 button.size(60, 30);
 button.position(230, 410);
 button.style("font-family", "Comic Sans MS");
 button.style("font-size", "18px");
 //down button
 button = createButton("D");
//added
button.parent("sketch-container");

 button.mouseClicked(downButton);
 button.size(60, 30);
 button.position(230, 460);
 button.style("font-family", "Comic Sans MS");
 button.style("font-size", "18px");
 //left button
 button = createButton("L");
//added
button.parent("sketch-container");


 button.mouseClicked(leftButton);
 button.size(60, 30);
 button.position(150, 440);
 button.style("font-family", "Comic Sans MS");
 button.style("font-size", "18px");
 //right button
 button = createButton("R");
//added


button.parent("sketch-container");
 button.mouseClicked(rightButton);
 button.size(60, 30);
 button.position(310, 440);
 button.style("font-family", "Comic Sans MS");
 button.style("font-size", "18px");
} //setup brace
function draw() {
  background("black");
  caterpillar();
  fill("red");
  circle(foodX, foodY, 10);
  fill("beige");
  rect(0, 400, 400, 100);
}


 
Displaying sketch.txt. 
