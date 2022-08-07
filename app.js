// Selecting All nodes
// selection for app
let red = document.querySelector("#red");
let green = document.querySelector("#green");
let blue = document.querySelector("#blue");
let opa = document.querySelector("#opa");
let result = document.querySelector("#result");
let generate = document.querySelector("#generate");
let preview = document.querySelector("#box");
let output;


generate.addEventListener("click", ()=>{
    let redFinal=red.value;
    let greenFinal=green.value;
    let blueFinal=blue.value;
    let opaFinal=opa.value;

    // If all inputs are less equal then 255 and greater then equal 0 it will be valid
    //If 0<=opcity<=100 is will be valid
    //If we don't put any input then it will show invalid
    if(redFinal>=0 && redFinal<=255 && greenFinal>=0 && greenFinal<=255 && blueFinal>=0 && blueFinal<=255 && opaFinal>=0 && opaFinal<=100 && redFinal!="" && greenFinal!="" && blueFinal!=""){
        output=`rgba(${redFinal}, ${greenFinal}, ${blueFinal}, ${opaFinal/100})`;
    }else{
        output= `Invalid Inputs`;
    }
    result.value=output;
    preview.style.backgroundColor = `${output}`;

    //Preview Color Change
    if(output===`rgba(255, 255, 255, 1)`){
        preview.children[0].style.color="#2c3e50";
    }
});


// Generate Button sound effect 
let audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
generate.addEventListener("click", ()=>{
    audio.load();
    audio.play();
});