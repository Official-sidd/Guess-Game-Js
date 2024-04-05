"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number"; //changing the text content of the p

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

//handling click event
let secretNumber = Math.trunc(Math.random() * 20) + 1; // gives a random number between 1 and 20

let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  // document.querySelector(".guess").value; this will give us a string type value always
  const guess = Number(document.querySelector(".guess").value);
  // console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "🚫 No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High";
      // score = score - 1
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  //   console.log("again clicked");
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
