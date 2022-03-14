const gb = document.getElementById("gameboard");

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
    const game = [,,,,,,,,,];
    let currentSymbol = "X";
    let symbolsCounter = 0;

    const displaySymbol = (square) => {
        let num = square.dataset.num;
        if(game[num]) return;

        game[num] = currentSymbol;
        square.textContent = currentSymbol;
        currentSymbol = currentSymbol === "X" ? "O" : "X";
        symbolsCounter++;
        
        if(symbolsCounter > 4){
            checkWinner();
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

        let regex = /(012||345||678||034||147||258||048||246)/g;

        let strX = arrX.join("");
        let strO = arrO.join("");

        if(regex.test(strX)){
            console.log("X won!");
        }else if(regex.test(strO)){
            console.log("O won!");
        }
        console.log(arrX, arrO);
    }

    return {
        displaySymbol,
    }
})();

const player = () => {

};



gameboard.create(gb);

function disp(){
    displayController.displaySymbol(this);
}