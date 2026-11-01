import chalk from 'chalk';
import { select } from '@inquirer/prompts';

console.log(chalk.yellow("===== QUIZMASTER ====="));

const answer = await select({
    message: 'Which language runs in Node.js?',
    choices: [
        {
            name: 'Python',
            value: 'python'
        },
        {
            name: 'JavaScript',
            value: 'javascript'
        },
        {
            name: 'C++',
            value: 'cpp'
        }
    ]
});

if (answer === 'javascript') {
    console.log(chalk.green("Correct Answer! 🎉"));
} else {
    console.log(chalk.red("Wrong Answer!"));
}