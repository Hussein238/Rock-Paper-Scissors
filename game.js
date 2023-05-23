
 


let userScore=0;
let cpuScore=0;



  
        function getComputerChoice() {// Makes the computer pick rock, paper or scissors at random so we have an opponent to play with.
    const choices=
    ['ROCK', 'PAPER','SCISSORS'];
    let cpuPick=
    choices[Math.floor(Math.random()*choices.length)];

    return cpuPick;
    }

        function playRound() {
    let computerSelection=getComputerChoice();

    const playerPic=prompt('pick either Rock, Paper or scissors');
    let insensitivePlayerSelection=playerPic.toUpperCase();

    let result;
   let tie='Its a tie!';
let youLose=`YOU LOST! ${computerSelection} BEATS ${insensitivePlayerSelection}!`;
let youWin=`YOU WON! ${insensitivePlayerSelection} BEATS ${computerSelection}!`;

if (insensitivePlayerSelection===computerSelection) {
    result=tie;
    console.log(game());
    return result;
   
}else if(insensitivePlayerSelection=='ROCK'){
        if(computerSelection=='PAPER'){
            ++cpuScore;
            console.log(game());
            return youLose;
           
        }else{
            ++userScore;
            console.log(game());
            return youWin;
        }
}else if(insensitivePlayerSelection=='PAPER'){
    if(computerSelection=='SCISSORS'){
        ++cpuScore;
        console.log(game());
        return youLose;
       
    } else{
        ++userScore;
        console.log(game());
        return youWin;
        
    }
} else if(insensitivePlayerSelection=='SCISSORS'){
        if(computerSelection=='ROCK'){
            ++cpuScore;
            console.log(game());
            return youLose;

        } else{
           
            ++userScore;
            console.log(game());
            return youWin;
        }
    }
}
   
        function game(){

   


    if (userScore==5){
        
     alert (`You won with ${userScore} point(s)! and the computer lost with ${cpuScore} point(s)!`);
       
      
    }
    else if (cpuScore==5){
        alert (`You lost with ${userScore} point(s)! and the computer had ${cpuScore} point(s)!`);
      
    }
    else{
        return `Game on! You have ${userScore} point(s) and the AI has ${cpuScore} point(s)`;
    }  
}




   




