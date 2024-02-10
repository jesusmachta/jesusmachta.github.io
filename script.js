
document.addEventListener('DOMContentLoaded', function(){
    let players = [];
    let currentPlayerIndex = 0;
    let turns = 0;

    const startGame = document.getElementById('comenzar-button');
    const playAgain = document.getElementById('reiniciar-button');
    const rulesButton = document.getElementById('reglas-button');
    const gamerules = document.getElementById('GameRules');
    const rulegoback = document.getElementById('RIrAtras-button');
    const Optiongoback = document.getElementById('OIrAtras-button');
    const Options = document.getElementById('level');
    const Gamecontent = document.getElementById('grid-container');
    const PlayerNum1 = document.getElementById('PlayerNum1');
    const PlayerNum2 = document.getElementById('PlayerNum2');
    const PlayerNum3 = document.getElementById('PlayerNum3');
    const PlayerNum4 = document.getElementById('PlayerNum4');
    const fonthide1 = document.getElementById('fonthide1');
    const fonthide2 = document.getElementById('fonthide2');
    const fonthide3 = document.getElementById('fonthide3');
    const fonthide4 = document.getElementById('fonthide4');
    const level3x3 = document.getElementById('3x3');
    const level4x4 = document.getElementById('4x4');
    const level5x5 = document.getElementById('5x5');
    
    level3x3.addEventListener('click', () => {
        Options.style.display = 'none';
        Gamecontent.style.display = 'grid';
        PlayerNum1.style.display = 'flex';
        PlayerNum2.style.display = 'flex';
        PlayerNum3.style.display = 'flex';
        PlayerNum4.style.display = 'flex';
        fonthide1.style.display = 'block';
        fonthide2.style.display = 'block';
        fonthide3.style.display = 'block';
        fonthide4.style.display = 'block';
        playAgain.style.display = 'block';
    });
    
    level4x4.addEventListener('click', () => {
        Options.style.display = 'none';
        Gamecontent.style.display = 'grid';
        PlayerNum1.style.display = 'flex';
        PlayerNum2.style.display = 'flex';
        PlayerNum3.style.display = 'flex';
        PlayerNum4.style.display = 'flex';
        fonthide1.style.display = 'block';
        fonthide2.style.display = 'block';
        fonthide3.style.display = 'block';
        fonthide4.style.display = 'block';
        playAgain.style.display = 'block';
    });
    
    level5x5.addEventListener('click', () => {
        Options.style.display = 'none';
        Gamecontent.style.display = 'grid';
        PlayerNum1.style.display = 'flex';
        PlayerNum2.style.display = 'flex';
        PlayerNum3.style.display = 'flex';
        PlayerNum4.style.display = 'flex';
        fonthide1.style.display = 'block';
        fonthide2.style.display = 'block';
        fonthide3.style.display = 'block';
        fonthide4.style.display = 'block';
        playAgain.style.display = 'block';
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

