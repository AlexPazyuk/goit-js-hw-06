const sizeControl = document.getElementById("font-size-control")
const textSpan = document.getElementById("text")

sizeControl.addEventListener("input", function() {
  const fontSize = sizeControl.value + "px";
    textSpan.style.fontSize = fontSize;
});

