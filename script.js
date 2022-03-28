const gb = document.getElementById("gameboard");
const playAgain = document.getElementById("again");
const restart = document.getElementById("restart");
const players = document.querySelectorAll(".name svg");





const gameboard = (() => {
    const create = (gBoard) => {
        for(let i=0; i<9; i++){
            let div = document.createElement("div");
            div.dataset.num = i;
            div.addEventListener("click", disp);
            gBoard.appendChild(div);
        }
    };

    return {
        create,
    };
})();





const displayController = (() => {
    let game = [,,,,,,,,,];
    let currentSymbol = "X";
    let symbolsCounter = 0;
    let winner = false;
    const gameboard = document.getElementById("gameboard");
    const counterX = document.getElementById("mark-x");
    const counterO = document.getElementById("mark-o");
    const playAgain = document.getElementById("again");
    const congratulate = document.getElementById("congratulate");
    const playerOne = document.querySelector("#player-one .name");
    const playerTwo = document.querySelector("#player-two .name")

    const displaySymbol = (square) => {
        let num = square.dataset.num;
        if(game[num]) return;
        if(winner) return;

        game[num] = currentSymbol;
        square.textContent = currentSymbol;
        currentSymbol = currentSymbol === "X" ? "O" : "X";
        symbolsCounter++;
        
        

        if(symbolsCounter > 4){
            checkWinner();
        }else{
            playerOne.classList.toggle("my-turn");
            playerTwo.classList.toggle("my-turn");
        }
    }

    const checkWinner = () => {
        const arrX = [];
        const arrO = [];
        
        for(let i=0 ; i<game.length ; i++){
            if(!game[i]) continue;
            if(game[i]==="X"){
                arrX.push(i);
            }else{
                arrO.push(i);
            }
        }

        let regex = /(012)|(345)|(678)|(01?2?34?5?6)|(12?3?45?6?7)|(23?4?56?7?8)|(01?2?3?45?6?7?8)|(23?45?6)/g;

        let strX = arrX.join("");
        let strO = arrO.join("");

        if(regex.test(strX)){
            counterX.textContent++;
            winner = true;
            congratulate.textContent = `Congratulations ${counterX.parentNode.firstElementChild.lastElementChild.textContent}!`;
            playAgain.style.display = "flex";
        }else if(regex.test(strO)){
            counterO.textContent++;
            winner = true;
            congratulate.textContent = `Congratulations ${counterO.parentNode.firstElementChild.lastElementChild.textContent}!`;
            playAgain.style.display = "flex";
        }else if(arrO.length + arrX.length == 9){
            congratulate.textContent = "Tie :("
            playAgain.style.display = "flex";
        }else{
            playerOne.classList.toggle("my-turn");
            playerTwo.classList.toggle("my-turn");
        }
        //console.log(strO,strX,regex);
    }

    const newGame = () => {
        playAgain.style.display = "none";
        game = [,,,,,,,,,];
        symbolsCounter = 0;
        winner = false;
        gameboard.childNodes.forEach(div => {
            div.textContent = "";
        });
        playerOne.classList.toggle("my-turn");
        playerTwo.classList.toggle("my-turn");
    }

    const restartScores = () => {
        newGame();
        counterO.textContent = 0;
        counterX.textContent = 0;
    }

    return {
        displaySymbol,
        newGame,
        restartScores,
    }
})();





const player = (playerName, name) => {
    const newName = () => {
        
    }

    return{
        newName,
    }
};





gameboard.create(gb);
playAgain.addEventListener("click", displayController.newGame);
restart.addEventListener("click", displayController.restartScores);
players.forEach( player => player.addEventListener("click", changeName));


function disp(){
    displayController.displaySymbol(this);
}

function changeName(){
    let name = prompt("New name");
    if(!name) return;
    this.parentNode.lastElementChild.textContent = name;
}