const cellContainer = document.querySelector('.cellContainer')
const nameInput = document.querySelector('.nameInput')
let gameBoard = [null, null, null, null, null, null, null, null, null]
const start = document.querySelector('.startButton')
const gameContainer = document.querySelector('.gameContainer')

let running = false;


function createCells() {
    for (i = 0; i < 9; i++) {
        gameBoard.push[i]
        const cells = document.createElement('div');
        cells.classList.add('cell', [i]);
        cellContainer.appendChild(cells)
    }
}



function startGame() {
    running = true
    const displayText = document.querySelector('.displayText')
    const player1 = {
        name: 'Player 1',
        marker: 'X',
    }

    const player2 = {
        name: 'Player 2',
        marker: 'O',
    }

    nameInput.classList.add('hidden')
    gameContainer.classList.remove('hidden')
    createCells()

    let currentPlayer = player1
    displayText.textContent = `It is ${currentPlayer.name}'s turn`

    cellContainer.addEventListener('click', (e) => {
        let cell = e.target
        if (cell.textContent === '' && running === true) {
            if (currentPlayer === player1) {
                cell.textContent = currentPlayer.marker
                gameBoard[Number(cell.classList[1])] = 1
                currentPlayer = player2
                displayText.textContent = `It is ${currentPlayer.name}'s turn`
                // if(displayText.textContent === 'Player 1 Wins'){
                //     running = false;
                // }
            } else {
                cell.textContent = currentPlayer.marker
                gameBoard[Number(cell.classList[1])] = -1
                currentPlayer = player1
                displayText.textContent = `It is ${currentPlayer.name}'s turn`
            }
        }
        (() => {
            const winningCombos = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
            ]
            winningCombos.forEach(combo => {
                if (gameBoard[combo[0]] + gameBoard[combo[1]] + gameBoard[combo[2]] === 3) {
                    displayText.textContent = 'Player 1 Wins'
                    running = false
                } else if (gameBoard[combo[0]] + gameBoard[combo[1]] + gameBoard[combo[2]] === -3) {
                    displayText.textContent = 'Player 2 Wins'
                    running = false
                }
            })
        })()
    })
}

start.addEventListener('click', startGame)


function reset() {
    const resetButton = document.querySelector('.resetButton')
    resetButton.addEventListener('click', () => {
        gameBoard = [null, null, null, null, null, null, null, null, null]
        cellContainer.textContent = ''
        nameInput.classList.remove('hidden')
        gameContainer.classList.add('hidden')
        running = false
    })
}

reset()



