function play(){
    hideElementById('home');
    hideElementById('score');
    showElementById('play-ground');
    setTextElementValueById('current-score',0);
    setTextElementValueById('current-life',3);

    continueGame();
}

function continueGame(){
   const alphabet = getARandomAlphabet();
  
    const show = document.getElementById('show');
    show.innerText = alphabet;

    addBackgroundColor(alphabet);
}

function getARandomAlphabet(){
    const alphabetList = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetList.split('');
    
    const randomNumber = Math.round(Math.random() * 25);
    
    const randomAlphabet = alphabets[randomNumber];
  
    return randomAlphabet;
}

function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function addBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValue = parseInt(element.innerText);
    return elementValue;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('score');

    const finalScore = getTextElementValueById('current-score');
    setTextElementValueById('final-score',finalScore);
}

document.addEventListener('keyup', function(event){
    const playerPressed = event.key;

    if(playerPressed === 'Escape'){
        gameOver();
    }

    const currentAlphabetElement = document.getElementById('show');
    const currentAlphabet = currentAlphabetElement.innerText.toLowerCase();
    
    if(playerPressed === currentAlphabet){
        removeBackgroundColorById(currentAlphabet);
        const currentScore = getTextElementValueById('current-score');
        const updateScore =  currentScore + 1;
        setTextElementValueById('current-score',updateScore);
        continueGame();
    }else{
        const currentLife = getTextElementValueById('current-life');
        const updateLife =  currentLife - 1;
        setTextElementValueById('current-life',updateLife);
        
        if(updateLife === 0){
            removeBackgroundColorById(currentAlphabet);
            gameOver();
        }
       
    }
    


})