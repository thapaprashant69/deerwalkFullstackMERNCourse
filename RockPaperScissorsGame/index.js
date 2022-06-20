const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("yourChoice");
const resultDisplay = document.getElementById("result");

const buttonClicks = document.querySelectorAll("button");

let computerChoice,userText;

const result = () =>{
    if(userText === computerChoice){
        resultDisplay.innerHTML="Draw";
        return;
    }
    if(userText==="Paper" && computerChoice==="Scissors"){
        resultDisplay.innerHTML="Lose";
        return;
    }
    if(userText==="Paper" && computerChoice==="Rock"){
        resultDisplay.innerHTML="Win";
        return;
    }
    if(userText==="Rock" && computerChoice==="Scissors"){
        resultDisplay.innerHTML="Win";
        return;
    }
    if(userText==="Rock" && computerChoice==="Paper"){
        resultDisplay.innerHTML="Lose";
        return;
    }
    if(userText==="Scissors" && computerChoice==="Rock"){
        resultDisplay.innerHTML="Lose";
        return;
    }
    if(userText==="Scissors" && computerChoice==="Paper"){
        resultDisplay.innerHTML="Win";
        return;
    }
}

const computerChoiceFunction = () =>{
    let choices = Math.floor(Math.random()*buttonClicks.length)+1;
    switch(choices){
        case 1:
            computerChoice="Rock";
            computerChoiceDisplay.innerHTML='<img src="rock.png"></img>';
            break;
        case 2:
            computerChoice="Paper";
            computerChoiceDisplay.innerHTML='<img src="paper.png"></img>';
            break;
        case 3:
            computerChoice="Scissors";
            computerChoiceDisplay.innerHTML='<img src="scissors.png"></img>';
            break;         
    }
    result();
}

buttonClicks.forEach(userSelection=>userSelection.addEventListener("click",(e)=>{
    userText=e.target.id;
    switch(userText){
        case "Rock":
            computerChoice="Rock";
            userChoiceDisplay.innerHTML='<img src="rock.png"></img>';
            break;
        case "Paper":
            computerChoice="Paper";
            userChoiceDisplay.innerHTML='<img src="paper.png"></img>';
            break;
        case "Scissors":
            computerChoice="Scissors";
            userChoiceDisplay.innerHTML='<img src="scissors.png"></img>';
            break;         
    }
    computerChoiceFunction();
}))

