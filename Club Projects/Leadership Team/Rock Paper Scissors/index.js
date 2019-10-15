const userScore = 0;
const computerScore = 0;
const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".scoreboard");
const resultDiv = document.querySelector(".result");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorDiv = document.getElementById("scissor");

rockDiv.addEventListener('click', function(){
    console.log("clicked on rock");

})