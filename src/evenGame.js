import readlineSync from "readline-sync";
import greeting from "./cli.js"; 

const isEven = (int) =>{
    if (int%2===0){
        return "yes";
    } else{
        return "no"
    }
}

const isEvenGame = () =>{
    const userName = greeting();
    console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
    const rounds = 3;
    for (let i = 0; i < rounds; i+=1 ){
        const randomNumb = Math.floor(Math.random()*10);
        console.log("Question:", randomNumb)
        const answer = readlineSync.question("Your answer:")
        if (answer === isEven(randomNumb)){
            console.log("Correct!")
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(randomNumb)}'.`);
            console.log(`Let's try again, ${userName}!`)
            break
        }
    console.log(`Congratulations, ${userName}!`)
}
}

export default isEvenGame