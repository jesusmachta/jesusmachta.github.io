
document.addEventListener('DOMContentLoaded', function(){
    let players = [];
    let currentPlayerIndex = 0;
    let turns = 0;

    const startGame = document.getElementById('comenzar-button');
    const empezarJuego = document.getElementById('empezar-button');
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
    const playerForm = document.getElementById('player-form');
    const drawNumberButton = document.getElementById('draw-number');
    
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
        drawNumberButton.style.display = 'block';
        /*startGame.style.display = 'block';*/
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
        drawNumberButton.style.display = 'block';
        /*startGame.style.display = 'block';*/
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
        drawNumberButton.style.display = 'block';
        playAgain.style.display = 'block';
        
    });
    playAgain.addEventListener('click', () => {
        location.reload();
    });

    /*empezarJuego.addEventListener('click', () => {
        location.reload();
    });*/
    

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

    rulesButton.addEventListener('click', () => {
        //console.log('Button clicked');
        startGame.style.display = 'none';
        rulesButton.style.display = 'none';
        gamerules.style.display = 'flex';
        
    });
    
    startGame.addEventListener('click', () => {
        //console.log('Button clicked');
        startGame.style.display = 'none';
        rulesButton.style.display = 'none';
        Options.style.display = 'flex';
        
    });

    playerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const PlayerNum1 = document.getElementById('PlayerNum1').value;
        const PlayerNum2 = document.getElementById('PlayerNum2').value;
        const PlayerNum3 = document.getElementById('PlayerNum3').value;
        const PlayerNum4 = document.getElementById('PlayerNum4').value;
        const boardSize = parseInt(document.getElementById('board-size').value);
        
        // Crear jugadores
        players = [
            { name: PlayerNum1, score: 0, wins: 0, board: generateBingoBoard(boardSize) },
            { name: PlayerNum2, score: 0, wins: 0, board: generateBingoBoard(boardSize) },
            { name: PlayerNum3, score: 0, wins: 0, board: generateBingoBoard(boardSize) },
            { name: PlayerNum4, score: 0, wins: 0, board: generateBingoBoard(boardSize) }
        ];

        // Mostrar el juego de Bingo
        menuSection.classList.add('hidden');
        bingoGameSection.classList.remove('hidden');
        showPlayerBoard();
    })
    
    drawNumberButton.addEventListener('click', function () {
        const number = generateRandomNumber();
        checkNumber(number);
        location.reload();
    });;

    // Función para generar un número aleatorio único
    function generateRandomNumber() {
        return Math.floor(Math.random() * 50) + 1;
    }
    // Función para generar números únicos para el cartón
    function generateUniqueNumbers(count, min, max) {
        const numbers = [];
        for (let i = min; i <= max; i++) {
            numbers.push(i);
        }
        return shuffleArray(numbers).slice(0, count);
    }
    
    // Función para mezclar un array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Función para verificar si el número sacado está en el cartón del jugador
    function checkNumber(number) {
        const currentPlayer = players[currentPlayerIndex];
        if (!currentPlayer.calledNumbers) {
            currentPlayer.calledNumbers = [];
        }
        currentPlayer.calledNumbers.push(number);
        showPlayerBoard();
        turns++;
        drawResult.textContent = `Número del turno: ${number}`;
        markNumberInBoard(number, currentPlayerIndex);
        updateScore(currentPlayerIndex);
        if (turns >= 25) {
            endGame();
        }
    }

    function updateScore(playerIndex) {
        const currentPlayer = players[playerIndex];
        currentPlayer.score++;
        scoreDisplay.textContent = currentPlayer.score;
    }
    
    function saveScore() {
        localStorage.setItem('players', JSON.stringify(players));
    }
    
    
});

