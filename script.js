const inputBox = document.getElementById("user-input-box");
const btn = document.getElementById("get-user-input-button");
const messageDisplay = document.getElementById("message-display");

btn.addEventListener("click", () => {

    if(checkInput(inputBox.value)){
        clearGrids();
        createGrids(inputBox.value);
        inputBox.value = "";
    }
})

function checkInput(input){

    const convertedInput = Number(input);

    if (input === "" || !Number.isInteger(convertedInput) || convertedInput > 100){
        messageDisplay.textContent = "Please enter a valid number (max value: 100)";
        messageDisplay.style.color = "red";
        return false;
    }

    else{
        messageDisplay.textContent = "Number: " + input;
        messageDisplay.style.color = "blue";
        return true;
    }
}

function clearGrids(){
    const grids = document.querySelectorAll("#sketch-square > div");
    for(let i = 0; i < grids.length; i++){
        grids[i].remove();
    }
}

function createGrids(input){
    const sketchSquare = document.getElementById("sketch-square");


    for (let i = 0; i < input; i++) {
        const rowContainer = document.createElement("div");
        rowContainer.classList.add("row-container");
        sketchSquare.appendChild(rowContainer);
    }

    const gridRows = document.querySelectorAll("#sketch-square > div");
    for (let i = 0; i < input; i++) {
        for(let j = 0; j < input; j++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("grid-square");
        gridSquare.addEventListener("mousedown", (event) => {
            event.target.style.backgroundColor = "blue";
        })

        gridSquare.addEventListener("pointerenter", (event) => {
            if(event.buttons == 1){
                event.target.style.backgroundColor = "blue";
            }
        })    

        gridRows[j].appendChild(gridSquare);
        }
    }
}




