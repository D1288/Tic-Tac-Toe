const cellContainer = document.querySelector('.cellContainer')
let gameBoard = [null, null, null, null, null, null, null, null, null]
const start = document.querySelector('.startButton')



function createCells() {
    for (i = 0; i < 9; i++) {
        gameBoard.push[i]
        const cells = document.createElement('div');
        cells.classList.add('cell', [i]);
        cellContainer.appendChild(cells)
    }
}



function startGame() {
    const nameInput = document.querySelector('.nameInput')
    const gameContainer = document.querySelector('.gameContainer')
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
        if (cell.textContent === '') {
            if (currentPlayer === player1) {
                cell.textContent = currentPlayer.marker
                gameBoard[Number(cell.classList[1])] = 1
                currentPlayer = player2
                displayText.textContent = `It is ${currentPlayer.name}'s turn`
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
                } else if (gameBoard[combo[0]] + gameBoard[combo[1]] + gameBoard[combo[2]] === -3) {
                    displayText.textContent = 'Player 2 Wins'
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
    })
}

reset()



