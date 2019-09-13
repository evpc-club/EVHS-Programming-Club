var canvas = document.getElementById("myCanvas");

canvas.addEventListener('mousemove', function(e)
{
    getPosition(e); 
});

function getPosition(event)
{
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("< x: " + x + "y: " + y + " >");
    updateCoordinates(x, y);  
    drawDot(x,y);
}

function updateCoordinates(x,y)
{	
    console.log("updating coordinates");
    console.log(x);
    console.log(y);
    document.getElementById("x").innerHTML = parseFloat(x);
    document.getElementById("y").innerHTML = "" + y;
}

function drawDot(x,y)
{	
    console.log("drawing dot");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(x,y,1, 0, 2 * Math.PI, true);
    ctx.fill();
}