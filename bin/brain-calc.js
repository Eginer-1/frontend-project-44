import readlineSync from "readline-sync";
import askName from "../utils/welcome.js";

let name = askName();
let numWin = 0;

function startGame() {
  let numOne = Math.floor(Math.random() * 100);
  let numSec = Math.floor(Math.random() * 100);
  let result = numOne + numSec;
  console.log("What is the result of the expression?");

  console.log(`Question: ${numOne} + ${numSec}`);

  let response = readlineSync.question("Your answer:");

  if (result === Number(response)) {
    console.log("Correct!");
    numWin++;
    console.log(numWin);

    if (numWin === 3) {
      console.log(`Congratulations, ${name}!`);

      return;
    } else {
      startGame();
    }
  } else {
    console.log(
      `'${response}' is wrong answer ;(. Correct answer was '${result}'.`
    );
    console.log(`Let's try again, ${name}`);
    startGame();
  }
  if (numWin === 3) {
    console.log(`Congratulations, ${name}!`);

    return;
  }
}
startGame();
