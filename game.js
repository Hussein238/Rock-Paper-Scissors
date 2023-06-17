




let userScore=0;
let cpuScore=0;



const total= document.querySelector('.total');


const ROCK = document.querySelector('#rock');
ROCK.addEventListener('click', () =>{
    total.innerText = (playRound('ROCK',getComputerChoice()));
    
});

const PAPER = document.querySelector('.paper');
PAPER.addEventListener('click', () =>{
    total.innerText = (playRound('PAPER',getComputerChoice()));
    
});

const SCISSORS = document.querySelector('.scissors');
SCISSORS.addEventListener('click', () => {
    total.innerText = (playRound('SCISSORS', getComputerChoice()));

});
  
        function getComputerChoice() {// Makes the computer pick ROCK, PAPER or SCISSORS at random so we have an opponent to play with.
    const choices=
    ['ROCK', 'PAPER','SCISSORS'];
    let cpuPick=
    choices[Math.floor(Math.random()*choices.length)];

    return cpuPick;
    }

const score = document.querySelector('.score');

    
    

        function playRound(playerPic,computerSelection) {
    
    let result;
   let tie='IT\'S A TIE!';
let youLose=`DAMN! ${computerSelection} BEATS ${playerPic}!`;
let youWin=`NICE! ${playerPic} BEATS ${computerSelection}!`;

if (playerPic===computerSelection) {
    result=tie;
   score.innerText=game();
    return result;
   
}else if(playerPic=='ROCK'){
        if(computerSelection=='PAPER'){
            ++cpuScore;
score.innerText=game();
            return youLose;
           
        }else{
            ++userScore;
score.innerText=game();
            return youWin;
        }
}else if(playerPic=='PAPER'){
    if(computerSelection=='SCISSORS'){
        ++cpuScore;
       score.innerText=game();
        return youLose;
       
    } else{
        ++userScore;
       score.innerText=game();
        return youWin;
        
    }
} else if(playerPic=='SCISSORS'){
        if(computerSelection=='ROCK'){
            ++cpuScore;
 score.innerText=game();
            return youLose;

        } else{
           
            ++userScore;
    score.innerText=game();  
            return youWin;
        }
    }
}
   score.innerText=game()
        function game(){
            
    if (userScore==5){
        
        const restart = document.createElement('button');
        restart.innerText= 'PLAY AGAIN?';
        restart.style = "font-size: xx-large; margin-top: 40px;"
        restart.addEventListener('click', ()=>{
            window.location.reload();
        })
        document.body.appendChild(restart);
        ROCK.disabled = true;
        PAPER.disabled = true;
        SCISSORS.disabled = true;
     return 'YOU WIN!';
      
    }
    else if (cpuScore==5){

        const restart = document.createElement('button');
        restart.innerText= 'PLAY AGAIN?';
        restart.style = "font-size: xx-large; margin-top: 40px;"
    restart.addEventListener('click', ()=>{
        window.location.reload();
       
    })
    document.body.appendChild(restart);
    ROCK.disabled = true;
    PAPER.disabled = true;
    SCISSORS.disabled = true;
    return 'YOU LOSE!';
      
    }
    else{
        return `YOU ${userScore}    -    ${cpuScore} AI`;
    }  
}


