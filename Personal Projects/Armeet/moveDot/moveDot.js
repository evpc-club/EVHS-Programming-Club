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
}

function updateCoordinates(x,y)
{	
    console.log("updating coordinates");
    console.log(x);
    console.log(y);
    document.getElementById("x").innerHTML = parseFloat(x);
    document.getElementById("y").innerHTML = "" + y;
}
