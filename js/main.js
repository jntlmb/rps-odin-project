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

function getHumanChoice() {
  while (true) {
    let num = prompt("Please Enter: 1 (Rock) / 2 (Paper) / 3 (Scissors)");

    if (num === "1") {
      return "rock";
    } else if (num === "2") {
      return "paper";
    } else if (num === "3") {
      return "scissors";
    } else {
      continue;
    }
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Draw!");
    return "draw";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Win!");
    return "human";
  } else {
    console.log("Lose!");
    return "computer";
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log(`*** Round: ${i + 1} ***`);
    console.log(
      `Human Choice: ${humanSelection} / Computer Choice: ${computerSelection}`
    );

    let result = playRound(humanSelection, computerSelection);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }

    console.log(`*** Score after Round ${i + 1}: ***`);
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
  }
}

playGame();
