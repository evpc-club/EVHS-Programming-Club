
var shape = {
	x: 40,
	y: 40,
	dx: 0,
	dy: 0
};

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


document.addEventListener('keydown', function(e) {
    
  // left arrow key
  if (e.which === 37) {
    shape.dx = -1;
    shape.dy = 0;
  }
  // up arrow key
  else if (e.which === 38) {
    shape.dy = -1;
    shape.dx = 0;
  }
  // right arrow key
  else if (e.which === 39) {
    shape.dx = 1;
    shape.dy = 0;
  }
  // down arrow key
  else if (e.which === 40) {
    shape.dy = 1;
    shape.dx = 0;
  }
  
  // a key
  if (e.which === 65) {
    shape.dx = -1;
    shape.dy = 0;
  }
  // w key
  else if (e.which === 87) {
    shape.dy = -1;
    shape.dx = 0;
  }
  // d key
  else if (e.which === 68) {
    shape.dx = 1;
    shape.dy = 0;
  }
  // s key
  else if (e.which === 83) {
    shape.dy = 1;
    shape.dx = 0;
  }
});

function loop() {
  requestAnimationFrame(loop);
  

  ctx.clearRect(0,0,canvas.width,canvas.height);
  
  shape.x = shape.x + shape.dx;
  shape.y = shape.y + shape.dy;
  
  drawShape();

}

function drawShape(){
	ctx.fillStyle = 'red';
	ctx.fillRect(shape.x,shape.y,10,10);
}

requestAnimationFrame(loop);
