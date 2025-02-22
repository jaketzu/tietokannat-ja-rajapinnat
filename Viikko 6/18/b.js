const prompt = require("prompt-sync")();

let word = prompt("Input a word: ");

const formattedWord = word.trim().toUpperCase();
const reversedWord = formattedWord.split("").reverse().join("");

if (formattedWord != reversedWord)
  console.log(
    `Your word is not a palindrome.\n${formattedWord} != ${reversedWord}`
  );
else
  console.log(`Your word is a palindrome!\n${formattedWord} = ${reversedWord}`);
