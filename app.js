const blockSize = 25;
var board;
var context;
var board ;
var body;

window.onload = function Onload(){
 CreateBoard(10);
 addButton();
} 



function CreateBoard(size){
    board = document.createElement("div");
    body = document.getElementById("body");
    body.style.justifyContent="center";

    body.appendChild(board);
    board.style.display = "flex";
    board.style.flexDirection= "column";
    board.style.gap= "5px";
    board.style.position="absolute";
    board.style.top="31%";
    board.style.left= "46%";
    for(let i =0; i<size; i++){
        const row = document.createElement("div")
        row.style.display = "flex";
        row.style.flexDirection= "row";
        row.style.gap= "5px";
        for(let j =0; j<size; j++){
            const cell = document.createElement("div")
            cell.style.height = "20px";
            cell.style.width = "20px";
            cell.style.background = "red"
            row.appendChild(cell)
        }
        board.appendChild(row);
    }
   
}

function addButton(){
    const startButton = document.createElement("button")
    startButton.textContent = 'start game';
    body.appendChild(startButton);

}

