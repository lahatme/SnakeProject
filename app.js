const blockSize = 25;
var board;
var context;
var board ;
var body;
var snake;
var direction = [0,1];

window.onload = function Onload(){
 CreateBoard(10);
 addSnake();
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
async function startGame(){
    while(true){
    snakeMovement();
    await new Promise(r => setTimeout(r, 300));
    }
}

function addButton(){
    const startButton = document.createElement("button")
    startButton.textContent = 'start game';
    startButton.addEventListener("click", startGame);
    body.appendChild(startButton);

}

function addSnake(){
    snake = [[0,0]];
    let row = board.children[snake[0][0]];
    let cell = row.children[snake[0][1]];
    cell.style.background = "black"
}



function snakeMovement(){
    snake.forEach(element => {
        let oldRow = board.children[element[0]];
        let oldCell = oldRow.children[element[1]];
        oldCell.style.background = "red"
        if(element[0] === 9 && element[1]=== 9){
            direction = [0,-1];
        }else if(element[0] === 0 && element[1]=== 0){
            direction = [0,1];
        }else if(element[0] === 0 && element[1]===9){
            direction = [1,0];
        }else if(element[0] === 9 && element[1]=== 0){
            direction = [-1,0];
        }
        element[0] = element[0]+ direction[0];
        element[1] = element[1]+ direction[1];
        let row = board.children[element[0]];
        let cell = row.children[element[1]];
        cell.style.background = "black"
    });
}

