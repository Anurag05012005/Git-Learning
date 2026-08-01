let turn = "O";

// Array to store game state
let boardArray = ["", "", "", "", "", "", "", "", ""];

const board = document.querySelector(".board");
const cells = document.querySelectorAll(".cell");
const winningMessage = document.getElementById("winningmessage");
const restartButton = document.getElementById("restartButton");

// Winning combinations
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Click Event
board.addEventListener("click", (event) => {

    const element = event.target;

    // Click only on cells
    if (!element.classList.contains("cell")) {
        return;
    }

    let index = element.id;

    // Prevent overwriting
    if (boardArray[index] != "") {
        return;
    }

    // Put O or X
    element.innerHTML = turn;
    boardArray[index] = turn;

    // Check Winner
    if (checkWinner()) {
        winningMessage.innerHTML = turn + " Wins!";
        board.style.pointerEvents = "none";
        return;
    }

    // Check Draw
    if (!boardArray.includes("")) {
        winningMessage.innerHTML = "Match Draw!";
        return;
    }

    // Change Turn
    if (turn == "O") {
        turn = "X";
    } else {
        turn = "O";
    }

});

// Function to check winner
function checkWinner() {

    for (let pattern of winPattern) {

        let a = pattern[0];
        let b = pattern[1];
        let c = pattern[2];

        if (
            boardArray[a] != "" &&
            boardArray[a] == boardArray[b] &&
            boardArray[b] == boardArray[c]
        ) {
            return true;
        }
    }

    return false;
}

// Restart Game
restartButton.addEventListener("click", () => {

    turn = "O";

    boardArray = ["", "", "", "", "", "", "", "", ""];

    cells.forEach((cell) => {
        cell.innerHTML = "";
    });

    winningMessage.innerHTML = "";

    board.style.pointerEvents = "auto";

});