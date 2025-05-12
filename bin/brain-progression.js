import readlineSync from "readline-sync";
import askName from "../utils/welcome.js";

let name = askName();
let numWin = 0;
const min = 1;
const max = 10;

function startGame() {
  if (numWin === 3) {
    console.log(`Congratulations, ${name}!`);

    return;
  }
  let startNum = Math.floor(Math.random() * 100);
  let stepNum = Math.floor(Math.random() * (max - min + 1)) + min;
  let randomNum = Math.floor(Math.random() * 10);
  let numbers = [];
  let result = null;

  let counter = 0;
  while (counter < 10) {
    counter++;
    numbers.push(startNum);
    startNum = startNum + stepNum;
  }
  numbers = numbers.map((elem, id) => {
    if (id === randomNum) {
      result = elem;
      return "..";
    } else {
      return elem;
    }
  });

  console.log("What number is missing in the progression?");
  console.log(`Question: ${numbers.join(" ")}`);
  let response = readlineSync.question("Your answer:");

  if (result === Number(response)) {
    console.log("Correct!");
    numWin++;

    startGame();
  } else {
    console.log(
      `'${response}' is wrong answer ;(. Correct answer was '${result}'.`
    );
    console.log(`Let's try again, ${name}`);
    startGame();
  }
}

startGame();
