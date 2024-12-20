// script.js

let counter = 0;

const counterDisplay = document.getElementById("counter");
const errorMessage = document.getElementById("error-message");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");

// Update the counter display
function updateCounter() {
  counterDisplay.textContent = counter;
  if (counter < 0) {
    errorMessage.classList.remove("hidden");
  } else {
    errorMessage.classList.add("hidden");
  }
}

// Increase counter
increaseBtn.addEventListener("click", () => {
  counter++;
  updateCounter();
});

// Decrease counter
decreaseBtn.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
  }
  updateCounter();
});

// Reset counter
resetBtn.addEventListener("click", () => {
  counter = 0;
  updateCounter();
});
