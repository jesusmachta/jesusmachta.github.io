document.addEventListener('DOMContentLoaded', function(){
    let jugadorActualIndex = 0;

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
    const level3x3 = document.getElementById('3');
    const level4x4 = document.getElementById('4');
    const level5x5 = document.getElementById('5');
    const iniciarJuego = document.getElementById('iniciar-button');
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
        iniciarJuego.style.display = 'block';
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
        iniciarJuego.style.display = 'block';
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
        iniciarJuego.style.display = 'block';
        playAgain.style.display = 'block';
    });
        

playAgain.addEventListener('click', () => {
    location.reload();
});
    
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

});

function crearJugador(){
    const jugador1 = document.getElementById('PlayerNum1').value;
    const jugador2 = document.getElementById('PlayerNum2').value;
    const jugador3 = document.getElementById('PlayerNum3').value;
    const jugador4 = document.getElementById('PlayerNum4').value;
    const jugadores = [jugador1, jugador2, jugador3, jugador4];
    const jugadoresFiltrados = jugadores.filter(jugador => jugador !== '');
    console.log(jugadoresFiltrados);
}

function crearMatriz(){
    const nivel = document.getElementById('lvlbtn').value;
    const matriz = [];
    for(let i = 0; i < nivel; i++){
        matriz[i] = [];
        for(let j = 0; j < nivel; j++){
            matriz[i][j] = 0;
        }
    }
    console.log(matriz);
}

function generarNumeroAleatorio(){
    return Math.floor(Math.random()* 50) + 1;
}

// Función para generar números únicos para el cartón
function generarNumerosUnicos(count, min, max) {
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

function generarCarton(){
    const nivel = document.getElementById('lvlbtn').value;
    const carton = [];
    for(let i = 0; i < nivel; i++){
        carton[i] = [];
        for(let j = 0; j < nivel; j++){
            carton[i][j] = generarNumeroAleatorio();
        }
    }
    console.log(carton);
}

// Función para verificar si el número sacado está en el cartón del jugador
function checkNumero(number) {
    let jugadorActualIndex = 0;
    const currentPlayer = jugadores[jugadorActualIndex];
    if (!currentPlayer.calledNumbers) {
        currentPlayer.calledNumbers = [];
    }
    currentPlayer.calledNumbers.push(number);
    showPlayerBoard();
    turns++;
    drawResult.textContent = `Número del turno: ${number}`;
    markNumberInBoard(number, jugadorActualIndex);
    updateScore(jugadorActualIndex);
    if (turns >= 25) {
        endGame();
    }

// Función para terminar el juego
function endGame() {
    let winner;
    let maxScore = 0;
    jugadores.forEach(jugador => {
        if (jugador.score > maxScore) {
            maxScore = jugador.score;
            winner = jugador;
        }
    });
    if (winner) {
        winner.wins++;
        saveScore();
        alert(`¡El jugador ${winner.name} ha ganado con un puntaje de ${winner.score}!`);
    } else {
        alert('¡Empate!');
    }
    menuSection.classList.remove('hidden');
    bingoGameSection.classList.add('hidden');
}}

function generarNumero(){
    const numero = generarNumeroAleatorio(1, 50);
    console.log(numero);
}

// Función para marcar el número en el cartón del jugador si lo tiene
function marcarNumeroEnCarton(number, jugadoresIndex) {
    const currentPlayer = jugadores[jugadoresIndex];
    const cells = document.querySelectorAll('.bingo-row:nth-child(' + (jugadoresIndex + 1) + ') .cell');
    cells.forEach(cell => {
        if (parseInt(cell.textContent) === number) {
            cell.classList.add('marked');
        }
    });
}

// function crearCarton(){
//     crearMatriz();
//     generarCarton();

// }

// function iniciarJuego(){
//     crearJugador();
//     crearCarton();
//     generarNumero();
//     marcarNumero();

// }


