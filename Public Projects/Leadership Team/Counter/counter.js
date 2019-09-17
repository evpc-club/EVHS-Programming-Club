//read in all the "elements of the page"

counter = document.getElementById("counter");
button = document.getElementById("button");

//this function will run everytime the button is clicked
button.addEventListener('click', function()
{
    //when the button is pressed, increment the counter
    counter.innerHTML = parseInt(counter.innerText) + 1;
    console.log("button was pressed: " + counter.innerText);

})