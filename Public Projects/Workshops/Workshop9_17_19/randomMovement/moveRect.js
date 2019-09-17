
var shape = {
	x: 40,
	y: 40,
	dx: 0,
	dy: 0
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var count = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function loop() {
  requestAnimationFrame(loop);
  
  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  shape.x = shape.x + shape.dx;
  shape.y = shape.y + shape.dy;
  
  drawShape();
  if(++count %15 == 0){
	findRandomDirections();
	count = 1;
  }
  console.log(count);
}

function drawShape(){
	ctx.fillStyle = 'red';
	ctx.fillRect(shape.x,shape.y,10,10);
}

function findRandomDirections(){
	shape.dx = getRandomInt(1,3)-1.5;
	shape.dy = getRandomInt(1,3)-1.5;
}
requestAnimationFrame(loop);
