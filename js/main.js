const resultRound = document.getElementById("result");
const playerScoreText = document.getElementById("player-score");
const computerScoreText = document.getElementById("computer-score");

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

const playerImgRock = document.getElementById("player-img-rock");
const playerImgPaper = document.getElementById("player-img-paper");
const playerImgScissors = document.getElementById("player-img-scissors");

const computerImgRock = document.getElementById("computer-img-rock");
const computerImgPaper = document.getElementById("computer-img-paper");
const computerImgScissors = document.getElementById("computer-img-scissors");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let num = Math.random();
  if (num < 0.33) {
    return "rock";
  } else if (num > 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  displayChoices(humanChoice, computerChoice);

  if (humanChoice === computerChoice) {
    resultRound.textContent = "Draw!";
    return "draw";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultRound.textContent = "Win!";
    return "human";
  } else {
    resultRound.textContent = "Lose!";
    return "computer";
  }
}

function displayChoices(humanChoice, computerChoice) {
  hideAllImages();

  if (humanChoice === "rock") {
    playerImgRock.classList.remove("hidden");
  } else if (humanChoice === "paper") {
    playerImgPaper.classList.remove("hidden");
  } else if (humanChoice === "scissors") {
    playerImgScissors.classList.remove("hidden");
  }

  if (computerChoice === "rock") {
    computerImgRock.classList.remove("hidden");
  } else if (computerChoice === "paper") {
    computerImgPaper.classList.remove("hidden");
  } else if (computerChoice === "scissors") {
    computerImgScissors.classList.remove("hidden");
  }
}

function hideAllImages() {
  playerImgRock.classList.add("hidden");
  playerImgPaper.classList.add("hidden");
  playerImgScissors.classList.add("hidden");

  computerImgRock.classList.add("hidden");
  computerImgPaper.classList.add("hidden");
  computerImgScissors.classList.add("hidden");
}

function updateScore(result) {
  if (result === "human") {
    humanScore++;
  } else if (result === "computer") {
    computerScore++;
  }
  playerScoreText.textContent = humanScore;
  computerScoreText.textContent = computerScore;
}

function checkGameEnd() {
  if (humanScore === 3) {
    alert("You won the game!");
    resetGame();
  } else if (computerScore === 3) {
    alert("The Computer won the game!");
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  playerScoreText.textContent = humanScore;
  computerScoreText.textContent = computerScore;
  resultRound.textContent = "";
  hideAllImages();
}

btnRock.addEventListener("click", () => {
  const result = playRound("rock", getComputerChoice());
  updateScore(result);
  checkGameEnd();
});

btnPaper.addEventListener("click", () => {
  const result = playRound("paper", getComputerChoice());
  updateScore(result);
  checkGameEnd();
});

btnScissors.addEventListener("click", () => {
  const result = playRound("scissors", getComputerChoice());
  updateScore(result);
  checkGameEnd();
});
