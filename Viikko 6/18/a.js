const prompt = require("prompt-sync")();

const nums = [];
nums[0] = parseFloat(prompt("Enter the first number: "));
nums[1] = parseFloat(prompt("Enter the second number: "));

console.log(`${nums.sort()[0]} is the greater number.`);
