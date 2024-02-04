choises = ["rock", "paper", "scissors"]

function getComputerChoice() {
    ch = Math.floor(Math.random() * 3);
    return choises[ch];
}


function getPlayerChoice(){
    var hum = prompt("Choose between Rock, Paper or Scissors: ");
    return hum.toLocaleLowerCase();
}

function runGamae(){
    var pc = getComputerChoice();
    var hum = getPlayerChoice();
    if (pc === hum){
        console.log(`It's a tie: you had ${hum} and pc's choice was ${pc}`)
    }else if(pc === "paper" && hum === "rock"){
        console.log(`pc wins, because ${pc} beats ${hum}`)
    }else if(pc === "rock" && hum === "paper"){
        console.log(`pc wins, because ${hum} beats ${pc}`)
    }else if(pc === "rock" && hum === "scissors"){
        console.log(`pc wins, because ${pc} beats ${hum}`)
    }else if(pc === "scissors" && hum === "rock"){
        console.log(`pc wins, because ${hum} beats ${pc}`)
    }else if(pc === "scissors" && hum === "paper"){
        console.log(`pc wins, because ${pc} beats ${hum}`)
    }else if(pc === "paper" && hum === "scissors"){
        console.log(`pc wins, because ${hum} beats ${pc}`)
    }else if(pc === "scissors" && hum === "rock"){
        console.log(`pc wins, because ${pc} beats ${hum}`)
    }else if(pc === "rock" && hum === "scissors"){
        console.log(`pc wins, because ${hum} beats ${pc}`)    
    }else{
        console.log("Something is missing or wrong word!")
    }
}



// paper > rock
// rock > scissors
// scissors > paper
// rock < paper
// paper < scissors
// scissors < rock