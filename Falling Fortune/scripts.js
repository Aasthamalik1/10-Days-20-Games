
var game = document.querySelector(".game");
var pot = document.querySelector(".pot");
var gameWidth = game.offsetWidth;
var CoinInMotion=false;
var score=0;

function movePotLeft() {
    var potLeft = parseInt(window.getComputedStyle(pot).getPropertyValue("left"));
    if (potLeft > 100) {
        pot.style.left = (potLeft - 15) + 'px'; 
    }
}


function movePotRight() {
    var potLeft = parseInt(window.getComputedStyle(pot).getPropertyValue("left"));
    if (potLeft < gameWidth-100) { 
        pot.style.left = (potLeft + 15) + 'px'; 
    }
}


function control(e) {
    if (e.key === "ArrowLeft") {
        movePotLeft();
    }
    if (e.key === "ArrowRight") {
        movePotRight();
    }
}

window.addEventListener("keydown", control);

function coinGeneration(){
   if(CoinInMotion) return;
   CoinInMotion=true;

    var coin=document.createElement("div");
    coin.classList.add("coin");
    var coinLeft=Math.random()*(gameWidth-30);
    coin.style.left=coinLeft+'px';
   
    game.appendChild(coin);

    setTimeout(function(){
        coin.remove();
        CoinInMotion = false;
    },5000);
}

function startCoinGeneration(){
    setInterval(coinGeneration,4500);
}
 startCoinGeneration();

