import runGame from "../index.js";

const isEven = (int) =>{
    if (int%2===0){
        return "yes";
    } else{
        return "no"
    }
}

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
    const randomNumb = Math.floor(Math.random()*10);
    const correctAnswer = isEven(randomNumb);
    return [randomNumb, correctAnswer]

}

const runEvenGame = () => {
    runGame(gameDescription, generateRound)
}

export default runEvenGame;