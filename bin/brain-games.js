#!/usr/bin/env node
import readlineSync from "readline-sync";
const name = readlineSync.question("Your answer: ");

console.log("Welcome to the Brain Games!");
console.log("Hello " + name);
