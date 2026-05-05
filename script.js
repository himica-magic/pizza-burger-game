let board = ["", "", "", "", "", "", "", "", ""];


const cells = document.querySelectorAll('.cell');

const statusText = document.getElementById('status');

cells.forEach(cell => {
    cell.addEventListener('click', boxClicked)
}); //box clicked is being called when someone presses it
let cell_0 = "";
let cell_1 = "";
let cell_2 = "";
let cell_3 = "";
let cell_4 = "";
let cell_5 = "";
let cell_6 = "";
let cell_7 = "";
let cell_8 = "";
let gameOver = false;


function boxClicked(event) {
    if (gameOver) {
        return;
    }
    const cell = event.target;
    const boxNumber = cell.getAttribute('data-index');
    board[boxNumber] = "🍔";
    cell.innerText = "🍔";


    if (boxNumber === '0') {
        cell_0 = '🍔';
        console.log('Cell 0 selected');
    };


    if (boxNumber === '1') {
        cell_1 = '🍔';
        console.log('Cell 1 selected');
    };


    if (boxNumber === '2') {
        cell_2 = '🍔';
        console.log('Cell 2 selected');
    };


    if (boxNumber === '3') {
        cell_3 = '🍔';
        console.log('Cell 3 selected');
    };



    if (boxNumber === '4') {
        cell_4 = '🍔';
        console.log('Cell 4 selected');
    };


    if (boxNumber === '5') {
        cell_5 = '🍔';
        console.log('Cell 5 selected');
    };




    if (boxNumber === '6') {
        cell_6 = '🍔';
        console.log('Cell 6 selected');
    };




    if (boxNumber === '7') {
        cell_7 = '🍔';
        console.log('Cell 7 selected');
    };


    if (boxNumber === '8') {
        cell_8 = '🍔';
        console.log('Cell 8 selected');
    };
    checkWinner();
    printTurn("Pizza's Turn 🍕");
    setTimeout(computerMove, 500); // Wait half a second, then play 




}

function computerMove() {
    if (gameOver) {
        return;

    }

    let emptyBoxes = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            emptyBoxes.push(i);
        }

    }
    let randomBoxNumber = -1;
    if (emptyBoxes.length > 0)


    {
        let randomChoice = Math.floor(Math.random() * emptyBoxes.length);

        randomBoxNumber = emptyBoxes[randomChoice];
    }

    if (cell_0 === "" && randomBoxNumber === 0)


    {
        let cell = document.querySelector(`.cell[data-index="0"]`);

        board[0] = "🍕";
        cell.innerText = "🍕";
        cell_0 = "🍕"

    } else if (cell_1 === "" && randomBoxNumber === 1) {
        let cell = document.querySelector(`.cell[data-index="1"]`);

        board[1] = "🍕";
        cell.innerText = "🍕";
        cell_1 = "🍕"

    } else if (cell_2 === "" && randomBoxNumber === 2) {
        let cell = document.querySelector(`.cell[data-index="2"]`);

        board[2] = "🍕";
        cell.innerText = "🍕";
        cell_2 = "🍕"

    } else if (cell_3 === "" && randomBoxNumber === 3) {
        let cell = document.querySelector(`.cell[data-index="3"]`);

        board[3] = "🍕";
        cell.innerText = "🍕";
        cell_3 = "🍕"

    } else if (cell_4 === "" && randomBoxNumber === 4) {
        let cell = document.querySelector(`.cell[data-index="4"]`);

        board[4] = "🍕";
        cell.innerText = "🍕";
        cell_4 = "🍕"

    } else if (cell_5 === "" && randomBoxNumber === 5) {
        let cell = document.querySelector(`.cell[data-index="5"]`);

        board[5] = "🍕";
        cell.innerText = "🍕";
        cell_5 = "🍕"

    } else if (cell_6 === "" && randomBoxNumber === 6) {
        let cell = document.querySelector(`.cell[data-index="6"]`);

        board[6] = "🍕";
        cell.innerText = "🍕";
        cell_6 = "🍕"

    } else if (cell_7 === "" && randomBoxNumber === 7) {
        let cell = document.querySelector(`.cell[data-index="7"]`);

        board[7] = "🍕";
        cell.innerText = "🍕";
        cell_7 = "🍕"

    } else if (cell_8 === "" && randomBoxNumber === 8) {
        let cell = document.querySelector(`.cell[data-index="8"]`);

        board[8] = "🍕";
        cell.innerText = "🍕";
        cell_8 = "🍕"

    }
    checkWinner();
    printTurn("Burgers's Turn 🍔");

}

function resetGame() {


    location.reload();

}

function printTurn(player) {
    if (gameOver) {
        return;
    }
    const statusText = document.getElementById('status');
    statusText.innerText = player;
}

function checkWinner() {
    console.log("checking winner");
    const statusText = document.getElementById('status');

    let winner = "";
    if (cell_0 === cell_1 && cell_1 === cell_2 && cell_0 != "") {
        winner = cell_0;
        gameOver = true;
        statusText.innerText = winner + " won!"
        let winningCell = document.querySelector(`.cell[data-index="0"]`);
        winningCell.classList.add("win");
        winningCell = document.querySelector(`.cell[data-index="1"]`);
        winningCell.classList.add("win");

        winningCell = document.querySelector(`.cell[data-index="2"]`);
        winningCell.classList.add("win");




        return;

    }
    if (cell_3 === cell_4 && cell_4 === cell_5 && cell_3 != "") {
        winner = cell_3;
        statusText.innerText = winner + " won!"
        gameOver = true;
        let winningCell = document.querySelector(`.cell[data-index="3"]`);
        winningCell.classList.add("win");
        winningCell = document.querySelector(`.cell[data-index="4"]`);
        winningCell.classList.add("win");

        winningCell = document.querySelector(`.cell[data-index="5"]`);
        winningCell.classList.add("win");
        return;

    }

    if (cell_6 === cell_7 && cell_7 === cell_8 && cell_6 != "") {
        winner = cell_6;
        statusText.innerText = winner + " won!"
        gameOver = true;
        let winningCell = document.querySelector(`.cell[data-index="6"]`);
        winningCell.classList.add("win");
        winningCell = document.querySelector(`.cell[data-index="7"]`);
        winningCell.classList.add("win");

        winningCell = document.querySelector(`.cell[data-index="8"]`);
        winningCell.classList.add("win");
        return;

    }
    if (cell_0 === cell_4 && cell_4 === cell_8 && cell_0 != "") {
        winner = cell_0;
        statusText.innerText = winner + " won!"
        gameOver = true;
        let winningCell = document.querySelector(`.cell[data-index="0"]`);
        winningCell.classList.add("win");
        winningCell = document.querySelector(`.cell[data-index="4"]`);
        winningCell.classList.add("win");

        winningCell = document.querySelector(`.cell[data-index="8"]`);
        winningCell.classList.add("win");
        return;

    }

    if (cell_2 === cell_4 && cell_4 === cell_6 && cell_2 != "") {
        winner = cell_2;
        statusText.innerText = winner + " won!"
        gameOver = true;
        let winningCell = document.querySelector(`.cell[data-index="2"]`);
        winningCell.classList.add("win");
        winningCell = document.querySelector(`.cell[data-index="4"]`);
        winningCell.classList.add("win");

        winningCell = document.querySelector(`.cell[data-index="6"]`);
        winningCell.classList.add("win");
        return;

    }

    if (cell_2 === cell_5 && cell_5 === cell_8 && cell_2 != "") {
        winner = cell_2;
        statusText.innerText = winner + " won!"
        gameOver = true;
        let winningCell = document.querySelector(`.cell[data-index="2"]`);
        winningCell.classList.add("win");
        winningCell = document.querySelector(`.cell[data-index="5"]`);
        winningCell.classList.add("win");

        winningCell = document.querySelector(`.cell[data-index="8"]`);
        winningCell.classList.add("win");
        return;

    }
    if (cell_1 === cell_4 && cell_4 === cell_7 && cell_1 != "") {
        winner = cell_1;
        statusText.innerText = winner + " won!"
        gameOver = true;
        let winningCell = document.querySelector(`.cell[data-index="1"]`);
        winningCell.classList.add("win");
        winningCell = document.querySelector(`.cell[data-index="4"]`);
        winningCell.classList.add("win");

        winningCell = document.querySelector(`.cell[data-index="7"]`);
        winningCell.classList.add("win");
        return;

    }

    if (cell_0 === cell_3 && cell_3 === cell_6 && cell_0 != "") {
        winner = cell_0;
        statusText.innerText = winner + " won!"
        gameOver = true;
        let winningCell = document.querySelector(`.cell[data-index="0"]`);
        winningCell.classList.add("win");
        winningCell = document.querySelector(`.cell[data-index="3"]`);
        winningCell.classList.add("win");

        winningCell = document.querySelector(`.cell[data-index="6"]`);
        winningCell.classList.add("win");
        return;

    }

    let emptyBoxes = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
            emptyBoxes.push(i);
        }

    }

    if (emptyBoxes.length === 0) {

        statusText.innerText = "Tied Game!";
        gameOver = true;
    }

}




//for hw just copy the code and then change the number to 123.. Write 8 conditions to win using the varibals cell_0 to something

//for the conditionals it is cell_0 to cell_2 - cell_0 to cell_6 - cell_2 to cell_8 - cell_1 to cell_7 - cell_3 to cell_5 - cell_0 to cell_8 - cell_2 to cell 6
