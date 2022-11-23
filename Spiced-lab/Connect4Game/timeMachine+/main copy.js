// What will we need? Everything what we learned in the past 3 weeks:
//  - getting HTMLElements from the DOM
//  - global variables which holds information about the game and status
//  - multiple event listener
//  - working with arrays and doing different kind of for-loops
//  - adding classes dynamically to HTMLElements with JS

// Later as well:
//  - working with own created JS objects which hold multiple information in one variable
//    example: let gameResult = { winner: 'player1', winningChips: [2,3,4,5] }
//    access winner for example with: gameResult.winner

// 1. DEFINE GLOBAL VARIABLES

let holesElements = Array.from(document.getElementsByClassName("hole"));
let columnElements = Array.from(document.getElementsByClassName("column"));
let wholeContainerArray = Array.from(
    document.getElementsByClassName("container")
);

let playerToMove = 1;
let nrOfColumns = 7;
let nrOfRows = 6;
let gameResults;

let holes = [
    0,
    0,
    0,
    0,
    0,
    0, // first column
    0,
    0,
    0,
    0,
    0,
    0, // second column
    0,
    0,
    0,
    0,
    0,
    0, // third column
    0,
    0,
    0,
    0,
    0,
    0, // fourth column
    0,
    0,
    0,
    0,
    0,
    0, // fifth column
    0,
    0,
    0,
    0,
    0,
    0, // sixth column
    0,
    0,
    0,
    0,
    0,
    0, // seventh column
];

// 2. CREATE MULTIPLE EVENT LISTENER

for (let columnIdx = 0; columnIdx < columnElements.length; columnIdx++) {
    columnElements[columnIdx].addEventListener("click", () => {
        const result = fillColumn(columnIdx); //
        const successful = result.success;
        const filledIdx = result.filledIdx;
        const diagonalIndex = result.diagonalIndex;

        if (successful) {
            const hasColumnWin = checkColumnWin(columnIdx);
            // console.log(hasColumnWin);
            const hasRowWin = checkRowWin(filledIdx);
            // console.log(hasRowWin);
            const hasDiagonalWin = checkForDiagonalWin();
            // console.log(hasDiagonalWin)
            const isDraw = checkForDraw();
            // console.log(isDraw);
            // --> check if game has ended and log winner or draw

            if (hasColumnWin || hasRowWin || hasDiagonalWin) {
                gameResults = playerToMove;
                if (playerToMove === 1) {
                    //  console.log(gameResults)

                    alert("Player red has Won! Press Start a new game");
                } else if (playerToMove === 2) {
                    // console.log(gameResults)

                    alert("Player yellow has Won! Press Start a new game");
                }

                if (playerToMove === 1) {
                    playerToMove = 2;
                } else {
                    playerToMove = 1;
                }
            } else if (isDraw) {
                //   use at least alert() function to show draw

                alert("DRAW - Press reset Button Above!");
            }
        }
    });
}

function animateWin() {
    let index = 0;
    setTimeout(() => {
        if (gameResults === 1 || gameResults === 2) {
            wholeContainerArray[index].classList.add("left");

            index = index + 1;
            index = index === wholeContainerArray.length ? 0 : index;
            wholeContainerArray[index].classList.add("right");
        }
        animateWin();
    }, 3000);
}
animateWin();

function fillColumn(columnIdx) {
    const startIdx = columnIdx * 6; // i multiplies by the number of rows;
    const endIdx = startIdx + 6; // startIdx + number of rows

    for (let i = startIdx; i < endIdx; i++) {
        if (holes[i] === 0) {
            holes[i] = playerToMove;
            holesElements[i].classList.add("player" + playerToMove);
            return { success: true, filledIdx: i };
        }
    }
    return { success: false };
}

function checkColumnWin(columnIdx) {
    const startIdx = columnIdx * nrOfRows; // i multiplies by the number of rows;
    const endIdx = startIdx + nrOfRows; // startIdx + number of rows
    let countChips = 0;
    let lastChip;

    for (let i = startIdx; i < endIdx; i++) {
        if (holes[i] === 0) {
            return false;
        }
        // if holes[i] is 0 then return false;

        if (holes[i] !== lastChip) {
            lastChip = holes[i];
            countChips = 1; // resetting countChips
        } else {
            countChips++;
        }
        if (countChips === 4) {
            return true;
        }
        // we check if countChips is equals to 4
        // return true because we have a column win
    }
    return false;
}

function checkRowWin(filledIdx) {
    // filledIdx is potentially from 0 to 41
    // const startIdx = remained numbers of filledIndex and nrOfRows (use % operator)
    // const endIdx = nrOfRows multiplies by nrOfColumns
    const startIdx = filledIdx % nrOfRows;
    const endIdx = nrOfRows * nrOfColumns;

    let countChips = 0;
    let lastChip;
    // for-loop with startIdx; and endIdx; and we increase i by the nrOfRows
    // if holes[i] is 0 then set countChips to zero;

    for (let i = startIdx; i < endIdx; i += nrOfRows) {
        // console.log('hole: ', holes[i], i)
        if (holes[i] === 0) {
            countChips = 0;
        } else if (holes[i] !== lastChip) {
            lastChip = holes[i];
            countChips = 1; // resetting countChips
        } else {
            countChips++;
        }
        if (countChips === 4) {
            return true;
        }
    }
    return false;
    // we check if countChips is equals to 4
    // return true because we have a column win
    // return false
}

function checkForDiagonalWin() {
    for (
        let diagonalIndex = 0;
        diagonalIndex < winIndices.length;
        diagonalIndex++
    ) {
        // winInices.forEach(winPattern => {
        // const hasWin = winPattern.every(winIndex => { // 0, 7, 14, 21
        const hasWin = winIndices[diagonalIndex].every((winIndex) => {
            // 0, 7, 14, 21
            let currentHolePlayer = holes[winIndex]; // numnber of the player who owns this hole
            let doesPlayerOwnCurrentHole = currentHolePlayer != 0; // equal to the current player that moves
            return doesPlayerOwnCurrentHole; // we set hasWin to this
        });
        if (hasWin) {
            return true;
        }
    }

    return false;
}

function checkForDraw() {
    for (let i = 0; i < holes.length; i++) {
        if (holes[i] === 0) {
            return false;
        }
    }
    return true;
}

const winIndices = [
    // starting from first row; second column
    [0, 7, 14, 21], // index 0
    [7, 14, 21, 28], // index 1
    [14, 21, 28, 35], // index 2

    // starting from first row; second column
    [6, 13, 20, 27], // index 3
    [13, 20, 27, 34], // index 4
    [20, 27, 34, 41], // index 5

    // starting from first row; third column
    [12, 19, 26, 33], // index 6
    [19, 26, 33, 40], // index 7

    // starting from first row; fourth column
    [18, 25, 32, 39], // index 8

    // starting from second row; first column
    [1, 8, 15, 22], // index 9
    [8, 15, 22, 29], // index 10

    // starting from third row; first column
    [2, 9, 16, 23], // index 11

    // starting from first row; 7th/last column
    [36, 31, 26, 21], // index 12
    [31, 26, 21, 16], // index 13
    [26, 21, 16, 11], // index 14

    // starting from first row; 6th column
    [30, 25, 20, 15], // index 15
    [25, 20, 15, 10], // index 16
    [20, 15, 10, 5], // index 17

    // starting from first row; 5th column
    [24, 19, 14, 9], // index 18
    [19, 14, 9, 4], // index 19

    // starting from first row; 4th column
    [18, 13, 8, 3], // index 20

    // starting from second row; 7th/last column
    [37, 32, 27, 22], // index 21
    [32, 27, 22, 18], // index 22

    // starting from third row; 7th/last column
    [38, 33, 28, 23], // index 23
];
