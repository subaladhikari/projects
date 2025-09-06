const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const randomNum = () => Math.floor(Math.random() * hex.length);
btn.addEventListener("click", function () {
  let newColor = `#`;
  for (let i = 0; i < 6; i++) {
    newColor += hex[randomNum()];
  }
  color.textContent = newColor;
  document.body.style.backgroundColor = newColor;
});
