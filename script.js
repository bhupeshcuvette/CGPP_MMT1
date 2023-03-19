let computerScoreValue = document.getElementById("computer-score");
let userScoreValue = document.getElementById("user-score");
let gamePlayType = document.getElementById("gameplay-type");
let allRules = document.getElementById("all-rules");
let rulesClose = document.getElementById("rules-close");
let rulesDisplayButton = document.getElementById("rules-display-button");
let nextDisplayButton = document.getElementById("next-display-button");
let gameResultDisplay = document.getElementById("game-result-display");
let userChoiceType = document.getElementById("user-choice-type");
let gameResultText = document.getElementById("game-result-text");
let againstPC = document.getElementById("against-pc");
let playAgainReplay = document.getElementById("play-again-replay");
let computerChoiceType = document.getElementById("computer-choice-type");

let winnerfirstcircleLeft = document.getElementById("winner-first-circle-left");
let winnersecondcircleLeft = document.getElementById("winner-second-circle-left");
let winnerthirdcircleLeft = document.getElementById("winner-third-circle-left");
let winnerfirstcircleRight = document.getElementById("winner-first-circle-right");
let winnersecondcircleRight = document.getElementById("winner-second-circle-right");
let winnerthirdcircleRight = document.getElementById("winner-third-circle-right");

let userScoreValueLocal= localStorage.getItem('userScoreValue');
if(userScoreValueLocal===null || userScoreValueLocal==='undefined'){
    localStorage.setItem('userScoreValue',0);
}
else{
    localStorage.setItem('userScoreValue',userScoreValueLocal);
}

let computerScoreValueLocal = localStorage.getItem('computerScoreValue');
if(computerScoreValueLocal===null || computerScoreValueLocal==='undefined'){
    localStorage.setItem('computerScoreValue',0);
}
else{
    localStorage.setItem('computerScoreValue',computerScoreValueLocal);
}



const gameTypes=["rocktype","papertype","scissortype"];

let randomComputerGameSelection=()=>{
    let computerChoice=gameTypes[Math.floor(Math.random()*3)];
    return computerChoice;
}

const userSelection = (buttonType)=>{
    let choiceofUser=buttonType; 
    let choiceofPC= randomComputerGameSelection();
    gamePlayType.style.display='none';
    gameResultDisplay.style.display='block';

    //conditions in which User wins against Computer
    if(choiceofUser === 'rocktype' && choiceofPC === 'scissortype'){
        userChoiceType.innerHTML='<image src="images/rock-image.png">';
        userChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #0074B6;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';
        //userChoiceType.classList.add("winner-first-circle-left","winner-second-circle-left","winner-third-circle-left");

        computerChoiceType.innerHTML='<image src="images/scissor-image.png">';
        computerChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #BD00FF;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        //userScoreValue.innerText++;
        localStorage.userScoreValue = Number(localStorage.userScoreValue) + 1;
        userScoreValue.innerText = localStorage.userScoreValue;
        
        winnerfirstcircleLeft.style.display='block';
        winnersecondcircleLeft.style.display='block';
        winnerthirdcircleLeft.style.display='block';
        winnerfirstcircleRight.style.display='none';
        winnersecondcircleRight.style.display='none';
        winnerthirdcircleRight.style.display='none';

        gameResultText.innerText='YOU WIN';
        againstPC.style.display='block';
        playAgainReplay.innerText = 'PLAY AGAIN';

        rulesDisplayButton.style.cssText='left: 986px;top: 675px;';
        allRules.style.cssText='left:714px;top:250px;';
        nextDisplayButton.style.display='block';

    }
    else if(choiceofUser === 'papertype' && choiceofPC === 'rocktype'){
        userChoiceType.innerHTML='<image src="images/paper-image.png">';
        userChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #FFA943;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';
        //userChoiceType.classList.add("winner-first-circle-left","winner-second-circle-left","winner-third-circle-left");

        computerChoiceType.innerHTML='<image src="images/rock-image.png">';
        computerChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #0074B6;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        //userScoreValue.innerText++;
        localStorage.userScoreValue = Number(localStorage.userScoreValue) + 1;
        userScoreValue.innerText = localStorage.userScoreValue;
        

        winnerfirstcircleLeft.style.display='block';
        winnersecondcircleLeft.style.display='block';
        winnerthirdcircleLeft.style.display='block';
        winnerfirstcircleRight.style.display='none';
        winnersecondcircleRight.style.display='none';
        winnerthirdcircleRight.style.display='none';

        gameResultText.innerText='YOU WIN';
        againstPC.style.display='block';
        playAgainReplay.innerText = 'PLAY AGAIN';


        rulesDisplayButton.style.cssText='left: 986px;top: 675px;';
        allRules.style.cssText='left:714px;top:250px;';
        nextDisplayButton.style.display='block';
    }
    else if(choiceofUser === 'scissortype' && choiceofPC === 'papertype'){
        userChoiceType.innerHTML='<image src="images/scissor-image.png">';
        userChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #BD00FF;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';
        //userChoiceType.classList.add("winner-first-circle-left","winner-second-circle-left","winner-third-circle-left");

        computerChoiceType.innerHTML='<image src="images/paper-image.png">';
        computerChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #FFA943;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        //userScoreValue.innerText++;
        localStorage.userScoreValue = Number(localStorage.userScoreValue) + 1;
        userScoreValue.innerText = localStorage.userScoreValue;
        

        winnerfirstcircleLeft.style.display='block';
        winnersecondcircleLeft.style.display='block';
        winnerthirdcircleLeft.style.display='block';
        winnerfirstcircleRight.style.display='none';
        winnersecondcircleRight.style.display='none';
        winnerthirdcircleRight.style.display='none';

        gameResultText.innerText='YOU WIN';
        againstPC.style.display='block';
        playAgainReplay.innerText = 'PLAY AGAIN';

        rulesDisplayButton.style.cssText='left: 986px;top: 675px;';
        allRules.style.cssText='left:714px;top:250px;';
        nextDisplayButton.style.display='block';

    } 

    //conditions in which User looses against Computer
    else if(choiceofUser === 'rocktype' && choiceofPC ==='papertype') {
        userChoiceType.innerHTML='<image src="images/rock-image.png">';
        userChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #0074B6;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        computerChoiceType.innerHTML='<image src="images/paper-image.png">';
        computerChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #FFA943;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';
        //computerChoiceType.classList.add("winner-first-circle-right","winner-second-circle-right","winner-third-circle-right");

        //computerScoreValue.innerText++;
        localStorage.computerScoreValue = Number(localStorage.computerScoreValue) + 1;
        computerScoreValue.innerText = localStorage.computerScoreValue; 
       

        winnerfirstcircleLeft.style.display='none';
        winnersecondcircleLeft.style.display='none';
        winnerthirdcircleLeft.style.display='none';
        winnerfirstcircleRight.style.display='block';
        winnersecondcircleRight.style.display='block';
        winnerthirdcircleRight.style.display='block';

        gameResultText.innerText='YOU LOST';
        againstPC.style.display='block';
        playAgainReplay.innerText = 'PLAY AGAIN';
        rulesDisplayButton.style.cssText='left: 1136px;top: 675px;';
        allRules.style.cssText="left: 964px;top: 250px;";
        nextDisplayButton.style.display='none';

    }

    else if(choiceofUser === 'papertype' && choiceofPC ==='scissortype'){
        userChoiceType.innerHTML='<image src="images/paper-image.png">';
        userChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #FFA943;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        computerChoiceType.innerHTML='<image src="images/scissor-image.png">';
        computerChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #BD00FF;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';
        //computerChoiceType.classList.add("winner-first-circle-right","winner-second-circle-right","winner-third-circle-right");

        //computerScoreValue.innerText++;
        localStorage.computerScoreValue = Number(localStorage.computerScoreValue) + 1;
        computerScoreValue.innerText = localStorage.computerScoreValue; 
        

        winnerfirstcircleLeft.style.display='none';
        winnersecondcircleLeft.style.display='none';
        winnerthirdcircleLeft.style.display='none';
        winnerfirstcircleRight.style.display='block';
        winnersecondcircleRight.style.display='block';
        winnerthirdcircleRight.style.display='block';

        gameResultText.innerText='YOU LOST';
        againstPC.style.display='block';
        playAgainReplay.innerText = 'PLAY AGAIN';
        rulesDisplayButton.style.cssText='left: 1136px;top: 675px;';
        allRules.style.cssText="left: 964px;top: 250px;";
        nextDisplayButton.style.display='none';

    }

    else if(choiceofUser === 'scissortype' && choiceofPC ==='rocktype')
    {
        userChoiceType.innerHTML='<image src="images/scissor-image.png">';
        userChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #BD00FF;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        computerChoiceType.innerHTML='<image src="images/rock-image.png">';
        computerChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #0074B6;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';
        //computerChoiceType.classList.add("winner-first-circle-right","winner-second-circle-right","winner-third-circle-right");

        //computerScoreValue.innerText++;
        localStorage.computerScoreValue = Number(localStorage.computerScoreValue) + 1;
        computerScoreValue.innerText = localStorage.computerScoreValue; 
        

        winnerfirstcircleLeft.style.display='none';
        winnersecondcircleLeft.style.display='none';
        winnerthirdcircleLeft.style.display='none';
        winnerfirstcircleRight.style.display='block';
        winnersecondcircleRight.style.display='block';
        winnerthirdcircleRight.style.display='block';

        gameResultText.innerText='YOU LOST';
        againstPC.style.display='block';
        playAgainReplay.innerText = 'PLAY AGAIN';
        rulesDisplayButton.style.cssText='left: 1136px;top: 675px;';
        allRules.style.cssText="left: 964px;top: 250px;";
        nextDisplayButton.style.display='none';
    } 

    //conditions in which User draws against Computer
    else if(choiceofUser === 'rocktype' && choiceofPC === 'rocktype')
    {
        userChoiceType.innerHTML='<image src="images/rock-image.png">';
        userChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #0074B6;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        computerChoiceType.innerHTML='<image src="images/rock-image.png">';
        computerChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #0074B6;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        winnerfirstcircleLeft.style.display='none';
        winnersecondcircleLeft.style.display='none';
        winnerthirdcircleLeft.style.display='none';
        winnerfirstcircleRight.style.display='none';
        winnersecondcircleRight.style.display='none';
        winnerthirdcircleRight.style.display='none';

        gameResultText.innerText= 'TIE UP';
        againstPC.style.display='none';
        playAgainReplay.innerText = 'REPLAY';
        rulesDisplayButton.style.cssText='left: 1136px;top: 675px;';
        allRules.style.cssText="left: 964px;top: 250px;";
        nextDisplayButton.style.display='none';

    }

    else if(choiceofUser === 'papertype' && choiceofPC === 'papertype')
    {
        userChoiceType.innerHTML='<image src="images/paper-image.png">';
        userChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #FFA943;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        computerChoiceType.innerHTML='<image src="images/paper-image.png">';
        computerChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #FFA943;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        winnerfirstcircleLeft.style.display='none';
        winnersecondcircleLeft.style.display='none';
        winnerthirdcircleLeft.style.display='none';
        winnerfirstcircleRight.style.display='none';
        winnersecondcircleRight.style.display='none';
        winnerthirdcircleRight.style.display='none';

        gameResultText.innerText= 'TIE UP';
        againstPC.style.display='none';
        playAgainReplay.innerText = 'REPLAY';
        rulesDisplayButton.style.cssText='left: 1136px;top: 675px;';
        allRules.style.cssText="left: 964px;top: 250px;";
        nextDisplayButton.style.display='none';

    }

    else if(choiceofUser === 'scissortype' && choiceofPC === 'scissortype')
    {
        userChoiceType.innerHTML='<image src="images/scissor-image.png">';
        userChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #BD00FF;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        computerChoiceType.innerHTML='<image src="images/scissor-image.png">';
        computerChoiceType.style.cssText='background: #FFFFFF;box-shadow: inset 3px 0px 21px 1px rgba(0, 0, 0, 0.2);border: 16px solid #BD00FF;filter: drop-shadow(-1px 1px 11px rgba(0, 0, 0, 0.35));';

        winnerfirstcircleLeft.style.display='none';
        winnersecondcircleLeft.style.display='none';
        winnerthirdcircleLeft.style.display='none';
        winnerfirstcircleRight.style.display='none';
        winnersecondcircleRight.style.display='none';
        winnerthirdcircleRight.style.display='none';

        gameResultText.innerText= 'TIE UP';
        againstPC.style.display='none';
        playAgainReplay.innerText = 'REPLAY';
        rulesDisplayButton.style.cssText='left: 1136px;top: 675px;';
        allRules.style.cssText="left: 964px;top: 250px;";
        nextDisplayButton.style.display='none';

    }

}

userScoreValue.innerText = localStorage.getItem('userScoreValue');
computerScoreValue.innerText = localStorage.getItem('computerScoreValue');


const ruleboxOpen =()=>{
    allRules.style.display='block';
}

const ruleboxClose =()=>{
    allRules.style.display='none';
}

const letsPlayAgainReplay =()=>{
    gamePlayType.style.display='block';
    gameResultDisplay.style.display='none';
    rulesDisplayButton.style.cssText='left: 1136px;top: 675px;';
    allRules.style.cssText="left: 964px;top: 250px;";
    nextDisplayButton.style.display='none';
}

const gotoCelebration=()=>{
    window.open("winneranimation.html",'_self');
}







