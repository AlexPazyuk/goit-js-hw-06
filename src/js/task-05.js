const nameInput = document.getElementById("name-input")
const nameOutput = document.getElementById("name-output")
let anonymous = "Anonymous"

nameOutput.textContent = anonymous

nameInput.addEventListener("input", (event) => {nameOutput.textContent = event.target.value || anonymous} )