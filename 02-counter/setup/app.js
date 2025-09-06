let counter = 0;

const value = document.getElementById("value");

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("increase")) {
      counter++;
    } else if (styles.contains("decrease")) {
      counter--;
    } else {
      counter = 0;
    }
    value.textContent = counter;
  });
});
