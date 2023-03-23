let score = 0;

let red = 0;
let green = 0;
let blue = 0;

let diameter = 200;

function OnButtonClick(){
    score += 1;
    document.getElementById("score").innerHTML = score;
    red = getRandomInt(256);
    green = getRandomInt(256);
    blue = getRandomInt(256);

    let rgbCode = "rgb(" + red.toString() + "," + green.toString() + "," + blue.toString() + ")";

    document.getElementById("background").style.backgroundColor= rgbCode;

    diameter -=100
    
    document.getElementById("button").style.width = diameter.toString() + "px";
    document.getElementById("button").style.height = diameter.toString() + "px";   

    if(diameter <=0){
        document.getElementById("score").innerHTML = "You won!";
        document.getElementById("button").innerHTML = "";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}