import readlineSync from "readline-sync";

const name = readlineSync.question("May I have your name? ");
console.log("Hello " + name);
console.log("Welcome to the Brain Games!");
let numWin = 0;

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const startGame = () => {
  if (numWin === 3) {
    console.log(`Congratulations, ${name}!`);

    return;
  }

  const number = Math.floor(Math.random() * 100) + 1;
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log(`Question: ${number}`);
  const answer = readlineSync.question("Your answer: ");

  const correctAnswer = isPrime(number) ? "yes" : "no";
  if (answer === correctAnswer) {
    console.log("Correct!");
    numWin++;
    startGame();
  } else {
    console.log(`Wrong! The correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    startGame();
  }
};

startGame();
