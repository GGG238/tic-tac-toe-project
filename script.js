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
    let winner = false;
    const divResult = document.getElementById("result");
    const counterX = document.getElementById("mark-x");
    const counterO = document.getElementById("mark-o");

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
        }else if(regex.test(strO)){
            counterO.textContent++;
            winner = true;
        }
        //console.log(strO,strX,regex);
    }

    return {
        displaySymbol,
    }
})();





const player = (name, icon) => {
    
};





gameboard.create(gb);

function disp(){
    displayController.displaySymbol(this);
}




/*
const icons = ['<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>',
                '<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M20 22H4V20C4 17.8 7.6 16 12 16S20 17.8 20 20M8 9H16V10C16 12.2 14.2 14 12 14S8 12.2 8 10M19 4C18.4 4 18 4.4 18 5V6H16.5L15.1 3C15 2.8 14.9 2.6 14.7 2.5C14.2 2 13.4 1.9 12.7 2.2L12 2.4L11.3 2.1C10.6 1.8 9.8 1.9 9.3 2.4C9.1 2.6 9 2.8 8.9 3L7.5 6H6V5C6 4.4 5.6 4 5 4S4 4.4 4 5V6C4 7.1 4.9 8 6 8H18C19.1 8 20 7.1 20 6V5C20 4.5 19.6 4 19 4Z" /></svg>',
                '<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z" /></svg>',
                '<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6C8 3.79 9.79 2 12 2S16 3.79 16 6 14.21 10 12 10 8 8.21 8 6M17 22H18C19.1 22 20 21.1 20 20V15.22C20 14.1 19.39 13.07 18.39 12.56C17.96 12.34 17.5 12.13 17 11.94V22M12.34 17L15 11.33C14.07 11.12 13.07 11 12 11C9.47 11 7.29 11.7 5.61 12.56C4.61 13.07 4 14.1 4 15.22V22H6.34C6.12 21.55 6 21.04 6 20.5C6 18.57 7.57 17 9.5 17H12.34M10 22L11.41 19H9.5C8.67 19 8 19.67 8 20.5S8.67 22 9.5 22H10Z" /></svg>',
                '<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M13,8A4,4 0 0,1 9,12A4,4 0 0,1 5,8A4,4 0 0,1 9,4A4,4 0 0,1 13,8M17,18V20H1V18C1,15.79 4.58,14 9,14C13.42,14 17,15.79 17,18M20.5,14.5V16H19V14.5H20.5M18.5,9.5H17V9A3,3 0 0,1 20,6A3,3 0 0,1 23,9C23,9.97 22.5,10.88 21.71,11.41L21.41,11.6C20.84,12 20.5,12.61 20.5,13.3V13.5H19V13.3C19,12.11 19.6,11 20.59,10.35L20.88,10.16C21.27,9.9 21.5,9.47 21.5,9A1.5,1.5 0 0,0 20,7.5A1.5,1.5 0 0,0 18.5,9V9.5Z" /></svg>',
                '<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M16 8C16 10.21 14.21 12 12 12C9.79 12 8 10.21 8 8L8.11 7.06L5 5.5L12 2L19 5.5V10.5H18V6L15.89 7.06L16 8M12 14C16.42 14 20 15.79 20 18V20H4V18C4 15.79 7.58 14 12 14Z" /></svg>',
                '<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3C14.21 3 16 4.79 16 7S14.21 11 12 11 8 9.21 8 7 9.79 3 12 3M16 13.54C16 14.6 15.72 17.07 13.81 19.83L13 15L13.94 13.12C13.32 13.05 12.67 13 12 13S10.68 13.05 10.06 13.12L11 15L10.19 19.83C8.28 17.07 8 14.6 8 13.54C5.61 14.24 4 15.5 4 17V21H20V17C20 15.5 18.4 14.24 16 13.54Z" /></svg>',
                '<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M16 14.5C16 15.6 15.7 18 13.8 20.8L13 16L13.9 14.1C13.3 14.1 12.7 14 12 14S10.7 14.1 10.1 14.1L11 16L10.2 20.8C8.3 18.1 8 15.6 8 14.5C5.6 15.2 4 16.5 4 18V22H20V18C20 16.5 18.4 15.2 16 14.5M6 4.5C6 3.1 8.7 2 12 2S18 3.1 18 4.5C18 4.9 17.8 5.2 17.5 5.5C16.6 4.6 14.5 4 12 4S7.4 4.6 6.5 5.5C6.2 5.2 6 4.9 6 4.5M15.9 7.4C16 7.6 16 7.8 16 8C16 10.2 14.2 12 12 12S8 10.2 8 8C8 7.8 8 7.6 8.1 7.4C9.1 7.8 10.5 8 12 8S14.9 7.8 15.9 7.4M16.6 6.1C15.5 6.6 13.9 7 12 7S8.5 6.6 7.4 6.1C8.1 5.5 9.8 5 12 5S15.9 5.5 16.6 6.1Z" /></svg>',
                '<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M12,3C16.97,3 21,6.58 21,11C21,15.42 15,21 12,21C9,21 3,15.42 3,11C3,6.58 7.03,3 12,3M10.31,10.93C9.29,9.29 7.47,8.58 6.25,9.34C5.03,10.1 4.87,12.05 5.89,13.69C6.92,15.33 8.74,16.04 9.96,15.28C11.18,14.5 11.33,12.57 10.31,10.93M13.69,10.93C12.67,12.57 12.82,14.5 14.04,15.28C15.26,16.04 17.08,15.33 18.11,13.69C19.13,12.05 18.97,10.1 17.75,9.34C16.53,8.58 14.71,9.29 13.69,10.93M12,17.75C10,17.75 9.5,17 9.5,17C9.5,17.03 10,19 12,19C14,19 14.5,17 14.5,17C14.5,17 14,17.75 12,17.75Z" /></svg>',
                '<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M1,12C1,10.19 2.2,8.66 3.86,8.17C5.29,5.11 8.4,3 12,3C15.6,3 18.71,5.11 20.15,8.17C21.8,8.66 23,10.19 23,12C23,13.81 21.8,15.34 20.15,15.83C18.71,18.89 15.6,21 12,21C8.4,21 5.29,18.89 3.86,15.83C2.2,15.34 1,13.81 1,12M14.5,9.25A1.25,1.25 0 0,0 13.25,10.5A1.25,1.25 0 0,0 14.5,11.75A1.25,1.25 0 0,0 15.75,10.5A1.25,1.25 0 0,0 14.5,9.25M9.5,9.25A1.25,1.25 0 0,0 8.25,10.5A1.25,1.25 0 0,0 9.5,11.75A1.25,1.25 0 0,0 10.75,10.5A1.25,1.25 0 0,0 9.5,9.25M7.5,14C8.26,15.77 10,17 12,17C14,17 15.74,15.77 16.5,14H7.5M3,12C3,12.82 3.5,13.53 4.21,13.84C4.07,13.25 4,12.63 4,12C4,11.37 4.07,10.75 4.21,10.16C3.5,10.47 3,11.18 3,12M21,12C21,11.18 20.5,10.47 19.79,10.16C19.93,10.75 20,11.37 20,12C20,12.63 19.93,13.25 19.79,13.84C20.5,13.53 21,12.82 21,12Z" /></svg>',
                '<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M21,16C21,15.5 20.95,15.08 20.88,14.68L22.45,13.9L21.55,12.1L20.18,12.79C19.63,11.96 18.91,11.5 18.29,11.28L18.95,9.32L17.05,8.68L16.29,10.96C14.96,10.83 14.17,10.32 13.7,9.77L15.45,8.9L14.55,7.1L13,7.89C12.97,7.59 12.86,6.72 12.28,5.87L13.83,3.55L12.17,2.44L10.76,4.56C10.28,4.33 9.7,4.15 9,4.06V2H7V4.1C6.29,4.25 5.73,4.54 5.32,4.91L2.7,2.29L1.29,3.71L4.24,6.65C4,7.39 4,8 4,8H2V10H4.04C4.1,10.63 4.21,11.36 4.4,12.15L1.68,13.05L2.31,14.95L5,14.05C5.24,14.56 5.5,15.08 5.82,15.58L3.44,17.17L4.55,18.83L7.07,17.15C7.63,17.71 8.29,18.21 9.06,18.64L8.1,20.55L9.89,21.45L10.89,19.45L10.73,19.36C11.68,19.68 12.76,19.9 14,19.97V22H16V19.93C16.76,19.84 17.81,19.64 18.77,19.19L20.29,20.71L21.7,19.29L20.37,17.95C20.75,17.44 21,16.8 21,16M8.5,11A1.5,1.5 0 0,1 7,9.5A1.5,1.5 0 0,1 8.5,8A1.5,1.5 0 0,1 10,9.5A1.5,1.5 0 0,1 8.5,11M11,14A1,1 0 0,1 10,13A1,1 0 0,1 11,12A1,1 0 0,1 12,13A1,1 0 0,1 11,14M15.5,17A1.5,1.5 0 0,1 14,15.5A1.5,1.5 0 0,1 15.5,14A1.5,1.5 0 0,1 17,15.5A1.5,1.5 0 0,1 15.5,17Z" /></svg>',

                '<svg style="width:6rem;height:6rem" viewBox="0 0 24 24"><path fill="currentColor" d="M14,12H10V10H14M14,16H10V14H14M20,8H17.19C16.74,7.22 16.12,6.55 15.37,6.04L17,4.41L15.59,3L13.42,5.17C12.96,5.06 12.5,5 12,5C11.5,5 11.04,5.06 10.59,5.17L8.41,3L7,4.41L8.62,6.04C7.88,6.55 7.26,7.22 6.81,8H4V10H6.09C6.04,10.33 6,10.66 6,11V12H4V14H6V15C6,15.34 6.04,15.67 6.09,16H4V18H6.81C7.85,19.79 9.78,21 12,21C14.22,21 16.15,19.79 17.19,18H20V16H17.91C17.96,15.67 18,15.34 18,15V14H20V12H18V11C18,10.66 17.96,10.33 17.91,10H20V8Z" /></svg>'
            ];

const playersIcon = document.querySelectorAll(".show-icons");

playersIcon.forEach( div => {
    div.addEventListener("click", insertIcon);
});

function insertIcon(){
    this.innerHTML = icons[1];
}






            
const svg = document.querySelectorAll(".svg-name");
svg.forEach( s => {
    s.addEventListener("click", doSomething);
});

function doSomething(){
    alert("Ouch!");
}
*/
