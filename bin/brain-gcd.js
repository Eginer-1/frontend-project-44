import readlineSync from "readline-sync";
import askName from "../utils/welcome.js";

let name = askName();
let numWin = 0;

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function startGame() {
  if (numWin === 3) {
    console.log(`Congratulations, ${name}!`);

    return;
  }

  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const result = gcd(num1, num2);
  console.log("Find the greatest common divisor of given numbers.");
  console.log(`Question: ${num1} ${num2}`);
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
