#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.gray("===Welcome to Word Count App==="));
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word count is ${words.length}`);
