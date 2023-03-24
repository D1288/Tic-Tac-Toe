(() => {
    const cellContainer = document.querySelector('.cellContainer')
    const nameInput = document.querySelector('.nameInput')
    const displayText = document.querySelector('.displayText')
    let gameBoard = [null, null, null, null, null, null, null, null, null]
    const start = document.querySelector('.startButton')
    const gameContainer = document.querySelector('.gameContainer')
    let running = false


    const player1 = 'X'
    const player2 = 'O'

    let currentPlayer = player1




    function createCells() {
        for (i = 0; i < 9; i++) {
            gameBoard.push[i]
            const cells = document.createElement('div')
            cells.classList.add('cell', [i])
            cellContainer.appendChild(cells)
        }
    }

    function startGame(e) {
        e.preventDefault()
        running = true
        nameInput.classList.add('hidden')
        gameContainer.classList.remove('hidden')
        createCells()

        displayText.textContent = `It is Player 1's turn`
        cellContainer.addEventListener('click', (e) => {
            let cell = e.target
            if (cell.textContent === '' && running === true) {
                if (currentPlayer === player1) {
                    cell.textContent = 'X'
                    gameBoard[Number(cell.classList[1])] = 1
                    console.log(gameBoard)
                    currentPlayer = player2
                    displayText.textContent = `It is Player 2's turn`
                } else if (currentPlayer === player2) {
                    cell.textContent = 'O'
                    gameBoard[Number(cell.classList[1])] = -1
                    console.log(gameBoard)
                    currentPlayer = player1
                    displayText.textContent = `It is Player 1's turn`
                }
            }
            checkWins()
        })
    }

    function checkWins() {
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
                displayText.textContent = `Player 1 wins!`
                running = false
                currentPlayer = player1
            } else if (gameBoard[combo[0]] + gameBoard[combo[1]] + gameBoard[combo[2]] === -3) {
                displayText.textContent = `Player 2 wins!`
                running = false
                currentPlayer = player1
            } else if (!gameBoard.includes(null)) {
                displayText.textContent = `It's a tie!`
                running = false
                currentPlayer = player1
            }
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
            currentPlayer = player1
            running = true
        })
    }

    reset()
})()
