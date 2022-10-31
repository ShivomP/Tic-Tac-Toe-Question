const allSquares = document.querySelectorAll('.board__square')
const title = document.querySelector('.board__title')
let currentPlayer = 'X'
let gameOver= false
let board = new Array(9)

allSquares.forEach((square, i) => {
    square.addEventListener("click", () => {
        if(square.innerHTML || gameOver){
            return
        }
        square.innerHTML = currentPlayer
        board[i] = currentPlayer
        
        if (checkWin()){
            title.innerHTML = `${currentPlayer} Wins!`
            gameOver = true
            return
        }

        if(checkDraw()){
            title.innerHTML = `It's a Draw`
            gameOver = true
            return
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        title.innerHTML = `${currentPlayer}'s Turn`
    })
})

function reset(){
    gameOver = false
    title.innerHTML = `${currentPlayer}'s Turn`
    allSquares.forEach(square => {
        square.innerHTML = ''
    })
    board = new Array(9)
}

function checkWin(){
    const winCases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winCases.length; ++i){
        const matchingCases = winCases[i]
        let symbol1 = board [matchingCases[0]]
        let symbol2 = board [matchingCases[1]]
        let symbol3 = board [matchingCases[2]]

        if(!symbol1 || !symbol2 || !symbol3){
            continue
        }

        if (symbol1 === symbol2 && symbol2 === symbol3){
            return true
        }
    }
}

function checkDraw(){
    for (let i = 0; i < board.length; ++i){
        if(!board[i]){
            return false
        }
    }
    return true
}

