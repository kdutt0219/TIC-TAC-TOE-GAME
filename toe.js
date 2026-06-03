let boxes =document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let  turn=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6, 7,8],
];

boxes.forEach((box) => {
    box .addEventListener("click",() =>{
        console.log("box was clicked");
        if(turn){
            box.innerText = "o";
            box.style.color = "red";
            turn = false;
        }
        else{
        box.innerText="x";
        box.style.color = "blue";
        turn = true;     
        }
         box.disabled = true;
         checkwinner();
        
    });
});

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.display = "inline-block";
    });
    msgcontainer.classList.add("hide");
}

const showWinner=(winner)=>{
   msg.innerText = ` congratulation🎉🎉 winner is ${winner}`;
   msgcontainer.classList.remove("hide");
  
   boxes.forEach((box) => {
       box.style.display = "none";
   });
};

const checkDraw = () => {
    let filled = true;
    boxes.forEach((box) => {
        if (box.innerText === "") {
            filled = false;
        }
    });

    if (filled) {
        msg.innerText = "It's a Draw 😅";
        msgcontainer.classList.remove("hide");
        disableBoxes();
    }
    
};



const checkwinner = () =>{
    let winnerFound = false;
    for(let pattern of winpatterns){
       let pos1val = boxes[pattern[0]].innerText; 
       let pos2val = boxes[pattern[1]].innerText; 
       let pos3val = boxes[pattern[2]].innerText;
    
      if(pos1val!=""&&pos2val!=""&&pos3val!="") {
        if(pos1val=== pos2val && pos2val=== pos3val){      
        showWinner(pos1val);
        winnerFound = true;
        break;
        }
    }
    
    }
    if (!winnerFound) {
        checkDraw();
    }
};

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);