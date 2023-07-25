const gameBoard = document.querySelector("#gameboard");
const gameInfo = document.querySelector("#gameinfo");
const gameCells = [
    "","","",
    "","","",
    "","",""
]

let move = "green";
gameInfo.textContent = "Green Always go first!";

function createGameBoard() {
    gameCells.forEach((index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener("click", function addMove(e) {
            
            const moveDisplay = document.createElement("div");
            moveDisplay.classList.add(move)
            e.target.append(moveDisplay)
            move = move === "green" ? "red" : "green"
            gameInfo.textContent = "It is now " + move + "'s turn to go"
            e.target.removeEventListener("click", addMove)
            checkScore()

        })
        gameBoard.append(cellElement)
    })
}
createGameBoard()

function checkScore() {
    const allSquares = document.querySelectorAll(".square");
    const winCond = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ]

    winCond.forEach(array => {
        const circleWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains("red"))

            if (circleWins) {
                gameInfo.textContent = "Red Has Won the game!"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })

    winCond.forEach(array => {
        const crossWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains("green"))

            if (crossWins) {
                gameInfo.textContent = "Green Has Won the game!"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })


    //NEED TO WORK ON TIE GAME FUNCTION IT SOMEWHAT WORKS BUT NOT ALL THE TIME???
    winCond.forEach(array => {
        const tieWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains("green" || "red"))

            if (tieWins) {
                gameInfo.textContent = "Tie Game!"
                allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
                return
            }
    })


    

}


