const textInput = document.getElementById("validation-input")

textInput.addEventListener("blur", blurBorderColor)

function blurBorderColor(event) {
    const inputDataLength = Number(textInput.dataset.length);
    const inputValueLength = Number(textInput.value.trim().length);
    if (inputDataLength === inputValueLength) {
        textInput.classList.add("valid");
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
   }
}
