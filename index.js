let clickedOnce = false;
let div = document.getElementById("santa_img");

function toggleFunc() {
    div.style.animation = "";
    clickedOnce = false;
}

function onClick(){
    if(!clickedOnce){
        clickedOnce = true;
        new Audio("./audio.mp3").play();
        div.style.animation = "move 5s infinite";
        setTimeout(toggleFunc, 5000);
    }
}


document.addEventListener("click",onClick);
