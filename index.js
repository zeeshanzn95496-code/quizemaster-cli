import chalk from 'chalk';
import { select, input } from '@inquirer/prompts';
import { questions } from './questions.js';

// Welcome screen
console.log(chalk.cyan.bold("\n=============================="));
console.log(chalk.yellow.bold("       QUIZMASTER CLI"));
console.log(chalk.cyan.bold("==============================\n"));

// Get player name
const playerName = await input({
    message: 'Enter your name:'
});

console.log(chalk.green(`\nWelcome ${playerName}!`));
console.log(chalk.white("Answer all 5 questions.\n"));

// Score variable
let score = 0;

// Question loop
for (let i = 0; i < questions.length; i++) {

    const currentQuestion = questions[i];

    console.log(chalk.yellow(`\nQuestion ${i + 1}/5`));

    const userAnswer = await select({
        message: currentQuestion.question,
        choices: currentQuestion.choices
    });

    // Check answer
    if (userAnswer === currentQuestion.answer) {

        score++;

        console.log(chalk.green("✔ Correct Answer!"));

    } else {

        console.log(chalk.red("✘ Wrong Answer!"));

        console.log(
            chalk.yellow(`Correct answer: ${
                currentQuestion.choices.find(
                    choice => choice.value === currentQuestion.answer
                ).name
            }`)
        );
    }
}

// Final result
const percentage = (score / questions.length) * 100;

console.log(chalk.cyan.bold("\n=============================="));
console.log(chalk.yellow.bold("         QUIZ RESULT"));
console.log(chalk.cyan.bold("=============================="));

console.log(chalk.white(`Player: ${playerName}`));
console.log(chalk.white(`Score: ${score}/${questions.length}`));
console.log(chalk.white(`Percentage: ${percentage}%`));

// Winner announcement
if (score >= 4) {

    console.log(chalk.green.bold("\n🏆 CONGRATULATIONS! YOU ARE THE WINNER!"));

} else {

    console.log(chalk.red.bold("\nBetter luck next time! Keep learning!"));
}

console.log(chalk.cyan("\nThanks for playing QuizMaster CLI!\n"));