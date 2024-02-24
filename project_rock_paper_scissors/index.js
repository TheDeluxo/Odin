choises = ["rock", "paper", "scissors"]

function getComputerChoice() {
    ch = Math.floor(Math.random() * 3);
    return choises[ch];
}


function getPlayerChoice(){
    var hum = prompt("Choose between Rock, Paper or Scissors: ");
    return hum.toLocaleLowerCase();
}

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

btn1.addEventListener("click", runGamae)
btn2.addEventListener("click", runGamae)
btn3.addEventListener("click", runGamae)

let result = document.getElementById("result");
let you = document.getElementById("you")
let PC = document.getElementById("pc")

let scoreYou = document.getElementById("score-you")
let scorePC = document.getElementById("score-pc")
let youScore = 0
let pcScore = 0
scorePC.innerText = 0  + " points"
scoreYou.innerText = 0 + " points"

function runGamae(e){
    let pc = getComputerChoice();
    // var hum = getPlayerChoice();
    let hum = e.target.innerText.toLocaleLowerCase()
    if (pc === hum){
        result.innerText = `It's a tie: you had ${hum} and pc's choice was ${pc}`
        you.innerText = "You: " + hum
        PC.innerText = "PC: " + pc
    }else if(pc === "paper" && hum === "rock"){
        result.innerText = `PC wins this round, because ${pc} beats ${hum}`
        you.innerText = "You: " + hum
        PC.innerText = "PC: " + pc
        pcScore += 1
        scorePC.innerText = pcScore + " points"
    }else if(pc === "rock" && hum === "paper"){
        result.innerText = `You win this round, because ${hum} beats ${pc}`
        you.innerText = "You: " + hum
        PC.innerText = "PC: " + pc
        youScore += 1
        scoreYou.innerText = youScore + " points"
    }else if(pc === "rock" && hum === "scissors"){
        result.innerText = `PC wins this round, because ${pc} beats ${hum}`
        you.innerText = "You: " + hum
        PC.innerText = "PC: " + pc
        pcScore += 1
        scorePC.innerText = pcScore + " points"
    }else if(pc === "scissors" && hum === "rock"){
        result.innerText = `You win this round, because ${hum} beats ${pc}`
        you.innerText = "You: " + hum
        PC.innerText = "PC: " + pc
        youScore += 1
        scoreYou.innerText = youScore + " points"
    }else if(pc === "scissors" && hum === "paper"){
        result.innerText = `PC wins this round, because ${pc} beats ${hum}`
        you.innerText = "You: " + hum
        PC.innerText = "PC: " + pc
        pcScore += 1
        scorePC.innerText = pcScore + " points"
    }else if(pc === "paper" && hum === "scissors"){
        result.innerText = `You win this round, because ${hum} beats ${pc}`
        you.innerText = "You: " + hum
        PC.innerText = "PC: " + pc
        youScore += 1
        scoreYou.innerText = youScore + " points"
    }
    if (youScore === 5){
        alert("You are voctorious!")
        location.reload();
    }else if(pcScore === 5){
        alert("The PC beats you this time!")
        location.reload();
    }
}

// paper - rock
// rock - paper
// rock - scissors
// scissors - rock
// paper - scissors
// scissors - paper

// paper > rock
// rock > scissors
// scissors > paper
// rock < paper
// paper < scissors
// scissors < rock