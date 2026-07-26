import runGame from  "../index.js";

const gameDescription = "Find the greatest common divisor of given numbers.";

const gcd = (a, b) => {
    while (b!=0){
        const B = b;
        b = a%b;
        a = B;
    };
    return a;
}

const generateRound = () =>{
    const a = Math.floor(Math.random()*100);
    const b = Math.floor(Math.random()*100);
    const question = `${a} ${b}`;
    const correctAnswer = gcd(a, b).toString();
    return [question, correctAnswer];
}

const runGcdGame = () =>{
    runGame(gameDescription, generateRound)
};

export default runGcdGame;