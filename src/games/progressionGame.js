import runGame from "../index.js";

const gameDescription = "What number is missing in the progression?"

const progression = () => {
    const maxlen = 10;
    const minlen = 5
    const len = Math.floor(Math.random()* (maxlen - minlen + 1) + minlen);
    let curr = Math.floor(Math.random()*20);
    const step = Math.floor(Math.random()*10) + 1;
    const position = Math.floor(Math.random()*(len - 1) + 1);
    const progression = [curr];
    let answer = 0;
    for (let i = 1; i < len; i+=1){
        if (i === position){
            progression.push("..")
            curr+=step
            answer = curr;
        }
        progression.push(curr+step)
        curr+=step
    }
    return [progression.join(" "), answer]
}

const generateRound = () =>{
    const [progress, rightAnswer] = progression();
    const question = progress;
    return [question, rightAnswer.toString()];
}

const runProgressionGame = () =>{
    runGame(gameDescription, generateRound)
}

export default runProgressionGame;