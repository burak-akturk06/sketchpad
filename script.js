const inputBox = document.getElementById("user-input-box");
const btn = document.getElementById("get-user-input-button");
const messageDisplay = document.getElementById("message-display");

btn.addEventListener("click", () => {

    checkInput(inputBox.value);
})

function checkInput(input){

    const convertedInput = Number(input);

    if (input === "" || !Number.isInteger(convertedInput) || convertedInput > 100){
        messageDisplay.textContent = "Please enter a valid number (max value: 100)";
        messageDisplay.style.color = "red";
    }

    else{
        messageDisplay.textContent = "Number: " + input;
        messageDisplay.style.color = "blue";
        inputBox.value = "";
    }
}




