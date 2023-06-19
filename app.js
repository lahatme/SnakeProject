const blockSize = 25;
var board;
var context;
var board ;
var body;
var snake;
var direction = [0,1];
var food ;
var isGameOver = false;
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
    document.addEventListener('keydown', (event) => { onkeydown(event.key)});
    addFood();
    while(!isGameOver){
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
    snake = [[0,0],[0,1],[0,2]];
    snake.forEach(element => {
        let row = board.children[element[0]];
        let cell = row.children[element[1]];
        cell.style.background = "black"
    });
    
}

function removeFood(){
    let foodRow = board.children[food[0]];
    let foodCell = foodRow.children[food[1]];
    foodCell.style.background = "red"
}

function addFood(){
    let xFood = Math.floor(Math.random() * 10);
    let yFood = Math.floor(Math.random() * 10);
    food = [xFood, yFood];
    let foodRow = board.children[food[0]];
    let foodCell = foodRow.children[food[1]];
    foodCell.style.background = "yellow"
}

function snakeMovement(){
    let element = snake[snake.length-1];
    let oldElement = [];       
    oldElement[0] = element[0];
    oldElement[1] = element[1];
    element[0] = element[0]+ direction[0];
    element[1] = element[1]+ direction[1];
    if(element[0] ===10 || element[0] === -1 || element[1] ===10 || element[1] === -1 ){
        gameOver();
        return;
    }
    let row = board.children[element[0]];
    let cell = row.children[element[1]];
    cell.style.background = "black";
    let oldRow = board.children[snake[0][0]];
    let oldCell = oldRow.children[snake[0][1]];
    if(food[0] === element[0] && food[1] === element[1]){
        addFood();
        snake.unshift([snake[0][0],snake[0][1]]);
    }else{ 
    oldCell.style.background = "red";
    }
    snake.slice(0,-1).reverse().forEach(shift => {
        let oldShift = [];
        oldShift[0] = shift[0];
        oldShift[1] = shift[1];
        shift[0] = oldElement[0];
        shift[1] = oldElement[1];
        oldElement[0] = oldShift[0];
        oldElement[1] = oldShift[1];       
    });
   
}


function gameOver(){
    let gameOver =  document.createElement("div")
    gameOver.textContent = "GAME OVER";
    gameOver.style.position = "absolute";
    gameOver.style.top = "25%";
    gameOver.style.left = "51%"
    body.appendChild(gameOver);
    isGameOver = true;

}

function onkeydown(key){
 if(key  === "ArrowRight"){
    direction = [0,1]
 }else if(key  === "ArrowLeft"){
    direction = [0,-1]
 }else if(key  === "ArrowUp"){
    direction = [-1,0]
 }else if(key  === "ArrowDown"){
    direction = [1,0]
 }
}



