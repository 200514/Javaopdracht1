import "./index.scss";

let counter=[0,0];

document.getElementById("player1Button").addEventListener("click",function(){clickOpButton(0)});
document.getElementById("player2Button").addEventListener("click",function(){clickOpButton(1)});

function clickOpButton(index){
    counter[index]++;
    document.getElementById("player1Clicks").innerHTML = counter[0];
    document.getElementById("player2Clicks").innerHTML = counter[1];
}