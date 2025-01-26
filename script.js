const display = document.getElementById("input");

function appendToDisplay(input){
    if (display.innerText === "0") {
        display.innerText = input;
    } else {
        display.innerText += input;
    }
}

function clearDisplay(){
    display.innerText = "";
}

function calculate(){
    try{
        display.innerText = eval(display.innerText);
    }
    catch(error){
        display.innerText = "Error";
    }
}