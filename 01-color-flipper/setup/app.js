const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "pink"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

const randomNum = () => Math.floor(Math.random() * colors.length);

btn.addEventListener("click", () => {
  const newColor = randomNum();
  document.body.style.backgroundColor = colors[newColor];
  color.textContent = colors[newColor];
});
