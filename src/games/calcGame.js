import runGame from "../index.js";

const gameDescription = "What is the result of the expression?";

const calculation = (a, b, sign) =>{
    switch(sign){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b; 
    }
}

const generateRound = () => {
    const a = Math.floor(Math.random()*100);
    const b = Math.floor(Math.random()*100);
    const signs = ["+", "-", "*"]
    const randomOperation = signs[Math.floor(Math.random() * signs.length)];
    const question = `${a} ${randomOperation} ${b}`
    const correctAnsw = calculation(a, b, randomOperation).toString();
    
    return [question, correctAnsw]
}

const runCalcGame = () =>{
    runGame(gameDescription, generateRound)
}

export default runCalcGame;