const blockSize = 25;
var board;
var context;

window.onload = function CreateBoard(row){
    console.log("hii");
    const myCanvas = document.getElementById("myCanvas");
    for(let i =0 ; i<10;i++){
        const row = document.createElement("div")
        for(let j =0 ; j<10;j++){
            const cell = document.createElement("div")
            row.appendChild(cell)
        }
        myCanvas.appendChild(row);
    }
   
}

//CreateBoard(10);