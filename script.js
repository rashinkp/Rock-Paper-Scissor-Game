
//setting default value if null setting value to zero
let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Ties: 0,
  Losses: 0
};


updateScoreElement();


//this is the main method and finds the choice

function playGame(ourChoice) {
  let computerSelection = randomSelection();
  let result = '';


  if(ourChoice === 'Rock'){
    if(computerSelection === "Rock"){
      result = 'Tie';
    }else if(computerSelection == 'Paper') {
      result = 'Computer win';
    }else if(computerSelection == 'Scissors') {
      result = 'You win';
    }
  }else if(ourChoice === 'Paper') {
    if(computerSelection == "Rock"){
      result = 'You win';
    }else if(computerSelection == 'Paper') {
      result = 'Tie';
    }else if(computerSelection == 'Scissors') {
      result = 'Computer win';
    }
  }else if(ourChoice === 'Scissors'){
    if(computerSelection == "Rock"){
      result = 'Computer win';
    }else if(computerSelection == 'Paper') {
      result = 'You win';
    }else if(computerSelection == 'Scissors') {
      result = 'Tie';
    }
  }


//showing the current status
  showResult(result,computerSelection,ourChoice);


  let statusElement = document.querySelector('.current-status');
  let choiceElement = document.querySelector('.choices');
  computerSelection = computerSelection.toLowerCase();
  ourChoice = ourChoice.toLowerCase();
  console.log(computerSelection);
  console.log(ourChoice)
  statusElement.innerHTML = `${result}`;
  choiceElement.innerHTML = `You
    <img class="move-image" src="https://supersimple.dev/projects/rock-paper-scissors/images/${ourChoice}-emoji.png" alt=""> 
    <img class="move-image" src="https://supersimple.dev/projects/rock-paper-scissors/images/${computerSelection}-emoji.png" alt="">
    Computer`

 

  
  

}

//showing the result from the local storage
function showResult(result,computer,me) {
  
  if(result === 'You win'){
    score.Wins++;
  }else if(result === 'Computer win'){
    score.Losses++;
  }else if(result === 'Tie'){
    score.Ties++;
  }

  localStorage.setItem('score',JSON.stringify(score));
  updateScoreElement();
}


//selecting randomly using random method
function randomSelection (){
  let randomSelection;
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1/3) {
     randomSelection = "Rock";
  }else if(randomNumber >= 1/3 && randomNumber < 2/3){
     randomSelection = "Paper";
  }else if(randomNumber >= 2/3 && randomNumber < 3/3){
     randomSelection = "Scissors";
  } 
  return randomSelection;
}

//updating score each time

function updateScoreElement (){
  document.querySelector('.result').innerHTML= 
  `Wins: ${score.Wins}
  Ties: ${score.Ties}
  Losses:${score.Losses}`;
}

//reseting the score and removing from local storage
function resetScore() {
  score.Wins = 0;
  score.Ties = 0;
  score.Losses = 0;
  localStorage.removeItem('score');
  document.querySelector('.result').innerHTML= 
  `Wins: ${score.Wins}
  Ties: ${score.Ties}
  Losses:${score.Losses}`;
}

