import runGame from "../index.js";

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"..';

const isPrime = (n) => {
    if (n < 2){
        return false
    } else if (n === 2){
        return true
    } else if (n%2===0){
        return false
    } else if (n%2!==0){
        for (let i = 3; i < Math.sqrt(n); i+=1){
            if (n%i===0){
                return false
            }
        }
    }
    return true
}

const generateRound = () =>{
    const question = Math.floor(Math.random()*30)
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer]
}

const runPrimeGame = () =>{
    runGame(gameDescription, generateRound)
}

export default runPrimeGame;