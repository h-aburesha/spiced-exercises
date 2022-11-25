const chalk = require("chalk");

// console.log(chalk.red("Hello world!"));
const readline = require("readline");
// we need to create the command line interface

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// try out the interface
// rl.question(currentQuestion, function (currentAnswers) {
//     console.log("this is your answer: ", currentAnswers);
// });

const story = {
    q: "Wanna play a game? (yes/no)",
    answers: {
        yes: {
            q: "Which direction do you turn? (left/right)",
            answers: {
                left: {
                    q: "What's 1+1?",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye!",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

// get the first answer and question
let currentQuestion = story.q;
let currentAnswers = story.answers;

function askQuestion(question, answers) {
    rl.question(question, function (input) {
        if (input != "no") {
            currentQuestion = answers[input].q;
            currentAnswers = answers[input].answers;
            askQuestion(currentQuestion, currentAnswers);
        } else {
            console.log("Sorry to see you leave");
            rl.close();
        }
        // determine if the user input is valid
        // check if the story has ended
        // here we call the same function again with a new question and
        // new answers
    });
}

askQuestion(currentQuestion, currentAnswers);

console.log(askQuestion(currentQuestion, currentAnswers));
