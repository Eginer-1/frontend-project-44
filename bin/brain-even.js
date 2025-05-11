import readlineSync from "readline-sync";
import askName from "../utils/welcome.js";

let name = askName();

let numWin = 0;

function startGame() {
  if (numWin === 3) {
    console.log(`Congratulations, ${name}!`);

    return;
  }
  let random = Math.floor(Math.random() * 100);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(`Question: ${random}`);
  let response = readlineSync.question("Your answer:");

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
