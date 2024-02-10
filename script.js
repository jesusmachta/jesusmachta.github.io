document.addEventListener('DOMContentLoaded', function(){
    let bingoMatrix = [];
    let currentPlayerIndex = 0;
    let turnoActual = 0;
    let turnoCount = 0; // Variable para llevar el conteo de los turnos

    const startGame = document.getElementById('comenzar-button');
    const playAgain = document.getElementById('reiniciar-button');
    const rulesButton = document.getElementById('reglas-button');
    const gamerules = document.getElementById('GameRules');
    const Optiongoback = document.getElementById('OIrAtras-button');
    const Options = document.getElementById('level');
    const Gamecontent = document.getElementById('grid-container');
    const wordContainer = document.getElementById('wordContainer');
    const turnoContainer = document.getElementById('turno-actual');
    const nuevoTurnoButton = document.getElementById('nuevo-turno-button');

    function generateBingoMatrix(size) {
        const matrix = [];
        const numbers = Array.from({ length: 50 }, (_, i) => i + 1);
        for (let i = 0; i < size; i++) {
            matrix.push([]);
            for (let j = 0; j < size; j++) {
                const randomIndex = Math.floor(Math.random() * numbers.length);
                matrix[i].push(numbers[randomIndex]);
                numbers.splice(randomIndex, 1);
            }
        }
        return matrix;
    }

    function generateBingoCardHTML(playerIndex) {
        const playerCard = bingoMatrix[playerIndex];
        const playerContainer = document.getElementById(`player${playerIndex + 1}-card`);
        playerContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar el nuevo contenido
        for (let i = 0; i < playerCard.length; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < playerCard[i].length; j++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.textContent = playerCard[i][j];
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.dataset.player = playerIndex + 1;
                row.appendChild(cell);
            }
            playerContainer.appendChild(row);
        }
    }

    function switchPlayer(playerIndex) {
        const players = document.querySelectorAll('.player');
        players.forEach(player => player.classList.remove('active'));
        players[playerIndex].classList.add('active');
    }

    function startNewGame(level) {
        bingoMatrix = [];
        for (let i = 0; i < 4; i++) {
            bingoMatrix.push(generateBingoMatrix(level));
            generateBingoCardHTML(i);
        }
        switchPlayer(currentPlayerIndex);
        turnoActual = generateUniqueRandomNumber();
        updateTurnoDisplay();
    }

    function updateTurnoDisplay() {
        turnoContainer.textContent = `Bola actual: ${turnoActual}, Turno: ${turnoCount}`;
        markCellsWithNewNumber();
    }

    function markCellsWithNewNumber() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            if (parseInt(cell.textContent) === turnoActual) {
                cell.classList.add('marked');
                cell.classList.add('auto-marked');
            }
        });
    }

    function generateUniqueRandomNumber() {
        const usedNumbers = new Set();
        while (true) {
            const randomNumber = Math.floor(Math.random() * 50) + 1;
            if (!usedNumbers.has(randomNumber)) {
                usedNumbers.add(randomNumber);
                return randomNumber;
            }
        }
    }

    function markCell(cell) {
        cell.classList.add('marked');
    }

    function handleCellClick(event) {
        const cell = event.target;
        if (!cell.classList.contains('marked')) {
            markCell(cell);
            // Aquí puedes agregar la lógica para verificar si el número marcado coincide con el número anunciado
        }
    }

    function announceNextNumber() {
        // Lógica para anunciar el siguiente número del bingo
    }

    // Event listeners para los botones
    startGame.addEventListener('click', () => {
        const playerNames = [];
        const playerInputs = document.querySelectorAll('.player input');
        playerInputs.forEach(input => {
            const name = input.value.trim();
            if (name === '') {
                alert('Por favor, ingresa el nombre de todos los jugadores.');
                return;
            }
            if (playerNames.includes(name)) {
                alert('Por favor, ingresa nombres únicos para cada jugador.');
                return;
            }
            playerNames.push(name);
        });
        if (playerNames.length === 4) {
            startGame.style.display = 'none';
            rulesButton.style.display = 'none';
            Options.style.display = 'flex';
        }
    });

    Optiongoback.addEventListener('click', () => {
        startGame.style.display = 'flex';
        rulesButton.style.display = 'flex';
        Options.style.display = 'none';
    });

    rulesButton.addEventListener('click', () => {
        startGame.style.display = 'none';
        rulesButton.style.display = 'none';
        gamerules.style.display = 'flex';
    });

    playAgain.addEventListener('click', () => {
        location.reload();
    });

    const levelButtons = document.querySelectorAll('.lvlbtn');
    levelButtons.forEach(button => {
        button.addEventListener('click', () => {
            const level = parseInt(button.id[0]);
            Options.style.display = 'none';
            startNewGame(level);
        });
    });

    // Event listener para los números del cartón
    document.addEventListener('click', event => {
        if (event.target.classList.contains('cell')) {
            handleCellClick(event);
        }
    });

    // Event listener para el botón de nuevo turno
    nuevoTurnoButton.addEventListener('click', () => {
        if (turnoCount < 25) {
            turnoActual = generateUniqueRandomNumber();
            turnoCount++; // Incrementar el conteo de turnos
            updateTurnoDisplay();
            if (turnoCount === 25) {
                // Mostrar mensaje de fin del juego
                alert("¡Fin del juego! Se han alcanzado los 25 turnos.");
                // Puedes agregar aquí cualquier otra lógica que desees para finalizar el juego
            }
        } else {
            // Mostrar mensaje de fin del juego si se intenta generar más turnos después de alcanzar el límite
            alert("¡Fin del juego! Se han alcanzado los 25 turnos.");
            // Puedes agregar aquí cualquier otra lógica que desees para finalizar el juego
        }
    });
});