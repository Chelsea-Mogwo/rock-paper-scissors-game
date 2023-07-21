
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stout
});
const colours = require("ansi-colors")
const async = require("async")

console.log("pick rock paper or scissors")

function playGame() {
    arr = []
    async.series([
        (callback) => {
            readline.question('Pick rock, paper or scissors?', answer => {
                    // let x = "rock";
                    
                    const choices = ["rock", "paper", "scissors"]
                    const randomChoice = choices[Math.floor(Math.random() * 3)]
                    console.log(randomChoice)
                    if (answer === randomChoice) {
                        arr.push("Draw");
                        console.log(colours.yellow("Draw!"));                        
                    } else if ((answer === "paper" && randomChoice === "rock")|| (answer === "rock" && randomChoice === "scissors") || (answer === "scissors" && randomChoice === "paper")) {
                        arr.push("Winner")
                        console.log(colours.green("Winner!"));                        
                    } else if ((answer === "rock" && randomChoice ==="paper") || (answer === "scissors" && randomChoice ==="rock") || (answer === "paper" && randomChoice ==="sissors")) {
                        arr.push("loss")
                        console.log(colours.red("Sorry, you lose."))
                    }
                    
                    callback()
                })
        },
        (callback) => {
            console.log('Do you want to play again? y/n')
            readline.question('Do you want to play again? y/n', answer => {
                if (answer === "y") {
                    playGame()
                    console.log("pick rock paper or scissors")
                } else if (answer === "n") {
                    callback()
                    console.log(arr)
                } else {
                    callback()
                    console.log(arr)
                }
                
                
            })
        }
    ], () => {
        readline.close()
    })
    
}

playGame()







