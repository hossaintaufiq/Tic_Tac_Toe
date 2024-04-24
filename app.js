let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-btn");
let newGameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msgContainer");
let msg =document.querySelector("#msg");

let turnO=true; //player x, player y;

const resetGame = ()=>{
    turnO = true; 
    enableBoxes();
    msgContainer.classList.add("hide");

}

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

        checkWinner();
    })
})

const disableBox= ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes= ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner = (winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinner= ()=>{
    for(let pattern of winPattens){
        // console.log(pattern[0],pattern[1],pattern[2])
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText)

            let pos1Val= boxes[pattern[0]].innerText;
            let pos2Val= boxes[pattern[1]].innerText;
            let pos3Val= boxes[pattern[2]].innerText;

            if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
                if(pos1Val==pos2Val && pos2Val==pos3Val){
                //    console.log("Winner",pos1Val); 

                   showWinner(pos1Val);
            }
    }

   

}};

newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);
;
