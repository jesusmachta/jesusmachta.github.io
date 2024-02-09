
document.addEventListener('DOMContentLoaded', function(){
    const startGame = document.getElementById('comenzar-button');
    const playAgain = document.getElementById('reiniciar-button');
    const rulesButton = document.getElementById('reglas-button');
    const gamerules = document.getElementById('GameRules');
    const rulegoback = document.getElementById('RIrAtras-button');
    const Optiongoback = document.getElementById('OIrAtras-button');
    const Options = document.getElementById('level');
    const Gamecontent = document.getElementById('grid-container');
    const PlayerCont1 = document.getElementById('PlayerNum1');
    const PlayerCont2 = document.getElementById('PlayerNum2');
    const PlayerCont3 = document.getElementById('PlayerNum3');
    const PlayerCont4 = document.getElementById('PlayerNum4');
    const fonthide1 = document.getElementById('fonthide1');
    const fonthide2 = document.getElementById('fonthide2');
    const level3x3 = document.getElementById('3x3');
    const level4x4 = document.getElementById('4x4');
    const level5x5 = document.getElementById('5x5');
    
    //for easy level
    level3x3.addEventListener('click', () => {
        //console.log('Button clicked');
        Options.style.display = 'none';
        Gamecontent.style.display = 'grid';
        PlayerCont.style.display = 'flex';
        BotContent.style.display = 'flex';
        fonthide1.style.display = 'block';
        fonthide2.style.display = 'block';
        playAgain.style.display = 'block';
        levelOption = 1;
        if(starter == 2){
            botturn();
            wordContainer.innerHTML = 'Bot started the Match';
        } else {
            wordContainer.innerHTML = 'Click on any number to start the match!';
        }
    });
    
    //for medium level
    level4x4.addEventListener('click', () => {
        //console.log('Button clicked');
        Options.style.display = 'none';
        Gamecontent.style.display = 'grid';
        PlayerCont.style.display = 'flex';
        BotContent.style.display = 'flex';
        fonthide1.style.display = 'block';
        fonthide2.style.display = 'block';
        playAgain.style.display = 'block';
        levelOption = 2;
        if(starter == 2){
            botturn();
            wordContainer.innerHTML = 'Bot started the Match';
        } else {
            wordContainer.innerHTML = 'Click on any number to start the match!';
        }
    });
    
    //for hard level
    level5x5.addEventListener('click', () => {
        //console.log('Button clicked');
        Options.style.display = 'none';
        Gamecontent.style.display = 'grid';
        PlayerCont.style.display = 'flex';
        BotContent.style.display = 'flex';
        fonthide1.style.display = 'block';
        fonthide2.style.display = 'block';
        playAgain.style.display = 'block';
        levelOption = 3;
        if(starter == 2){
            botturn();
            wordContainer.innerHTML = 'Bot started the Match';
        } else {
            wordContainer.innerHTML = 'Click on any number to start the match!';
        }
    });
    playAgain.addEventListener('click', () => {
        location.reload();
    });
    
    // for going back
    Optiongoback.addEventListener('click', () => {
        //console.log('Button clicked');
        startGame.style.display = 'flex';
        rulesButton.style.display = 'flex';
        Options.style.display = 'none';
        
        
    });
    rulegoback.addEventListener('click', () => {
        //console.log('Button clicked');
        startGame.style.display = 'flex';
        rulesButton.style.display = 'flex';
        gamerules.style.display = 'none';
        
        
    });
    //for game rules
    rulesButton.addEventListener('click', () => {
        //console.log('Button clicked');
        startGame.style.display = 'none';
        rulesButton.style.display = 'none';
        gamerules.style.display = 'flex';
        
    });
    
    // start to level page
    startGame.addEventListener('click', () => {
        //console.log('Button clicked');
        startGame.style.display = 'none';
        rulesButton.style.display = 'none';
        Options.style.display = 'flex';
        
    });
    });
    