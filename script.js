const gameboard = () => {

}

const displayController = () => {
    
}

const player = (() => {

})();



const game = ["", "", "", "", "", "", "", "", ""];
const gb = document.getElementById("gameboard");
let count = 0;

for(let sym of game){
    let div = document.createElement("div");
    div.textContent = sym;
    div.dataset.num = count;
    div.addEventListener("click", displayController.abc);
    count ++;
    gb.appendChild(div);
}