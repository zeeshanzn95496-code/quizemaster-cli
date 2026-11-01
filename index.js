#!/usr/bin/env node


import chalk from 'chalk';
import { select, input } from '@inquirer/prompts';
import { questions } from './questions.js';
import figlet from 'figlet';
import gradient from 'gradient-string';
import { rainbow } from 'gradient-string';

console.clear();

console.log(
    gradient.rainbow(
        figlet.textSync("QUIZMASTER", {
            font:"3D-ASCII",
            horizontalLayout: "fitted"
        })
    )
);

console.log(
    gradient.pastel("\n       THE TERMINAL QUIZ CHALLENGE")
);

console.log(
    gradient.vice("\n========================================")
);

console.log(
    gradient.mind("\n Welcome to QuizMaster CLI!")
);

console.log(
    gradient.mind(" Test your knowledge. Challenge yourself.")
);

console.log(
    gradient.vice("\n========================================\n")
);

async function runQuiz() {
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

        const userAnswer = await select({
            message: currentQuestion.question,
            choices: currentQuestion.choices,

        });

        if (userAnswer === currentQuestion.answer) {

            score++;
            console.log(chalk.green("✔ Correct Answer!"));
            if (currentQuestion.specialMessage) {
                console.log(chalk.magenta.bold(currentQuestion.specialMessage));
            }

        } else {

            console.log(chalk.red("✘ Wrong Answer!"));
            if (currentQuestion.wrongMessage) {
                console.log(chalk.yellow.bold(currentQuestion.wrongMessage));
            }
        }
    }

    // Final result comes AFTER the loop.

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

        console.log(chalk.bgGreen.bold("\n🏆 CONGRATULATIONS! YOU ARE THE WINNER!"));

    } else if(score>=3) {

        console.log(chalk.red.bold("\nKeep learning! you're in middle"));
    }else if(score>=2){

    console.log(chalk.cyan("\nneed improvement!\n"));
    }
    else{
        console.log("Worst performance skill issue")
    }
    console.log(gradient.rainbow("Thanks for playing best of luck for your future<3"))
}


runQuiz();
