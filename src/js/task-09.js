function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector(".widget")
const colorWidget = widget.querySelector(".color")
const buttonColor = document.querySelector(".change-color")

buttonColor.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  colorWidget.textContent = randomColor;
})