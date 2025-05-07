import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log("Hello " + name);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let numWin = 0;

function startGame() {
  let random = Math.floor(Math.random() * 100);
  console.log(`Question: ${random}`);
  let response = readlineSync.question("Your answer:");

  if (numWin === 2) {
    console.log(`Congratulations, ${name}!`);

    return;
  }

  if (response === "yes") {
    if (random % 2 === 0) {
      console.log("Correct!");
      numWin++;
      startGame();
    } else {
      console.log(
        `${response} is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`
      );
    }
  } else if (response === "no") {
    if (random % 2 !== 0) {
      console.log("Correct!");
      numWin++;
      startGame();
    } else {
      console.log(
        `${response} is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`
      );
    }
  } else {
    console.log("Вы указали некорректный ответ");
    startGame();
  }
}

startGame();
