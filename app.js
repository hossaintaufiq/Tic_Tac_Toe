let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");

let turnO=true; //player x, player y;

const winPattens = [
    
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box clicked");
        // box.innerText="X";

        if (turnO){
            box.innerText="O";
            turnO = false;
        }
        else{
            box.innerText="X";
            turnO = true;
        }
        box.disabled=true;
    })
})