import greeting from "./cli.js";
import readlineSync from "readline-sync";

const rounds = 3;


const runGame = (gameDescription, generateRound) =>{
    const userName = greeting();
    console.log(gameDescription);
    for (let i = 0; i < rounds; i+=1 ){
        const [question, answer] = generateRound() ;
        console.log(`Question: ${question}`);
        const userAnswer = readlineSync.question("Your answer:");

        if (userAnswer !== answer){
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${userName}!`)
            return
        }
        console.log("Correct!")
    }
    console.log(`Congratulations, ${userName}!`)

}

export default runGame;