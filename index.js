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



function reveal() {
    
    var reveals = document.querySelectorAll(".container",".reveal");
    for (var i = 1; i < reveals.length; i++) {
      var prev = reveals[i-1].getBoundingClientRect().top;
      if (prev < 100) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


let imgLen = 0;
var positionx = new Array();
var positiony = new Array();
var j = 0;
for(var i = 20; i >= 5; i=i-0.25) {
  positiony[j] = 40-Math.sqrt(80*i) ;
  positionx[j] = i;
  j++;
}

  function trackScrollPosition() {
    const y = window.scrollY;
    const label = Math.min(Math.floor(y/14)+1, imgLen++);
    let position = positionx[label] + "vw " +positiony[label] +"vh";
    document.getElementById("star_img").style.translate = position;
    document.getElementById("star_img").style.width = (label/8.5) +"vh";
  }
  
  
  document.addEventListener("DOMContentLoaded", () => {
    addEventListener("scroll", (event) => {trackScrollPosition();});
  });
