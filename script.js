const display = document.getElementById("input");

function appendToDisplay(input){
    display.innerText += input;
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