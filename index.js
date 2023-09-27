// Your code here
document.addEventListener("DOMContentLoaded", () => {
    const dodger = document.getElementById("dodger");
  
    function moveDodgerLeft() {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      if (left > 0) {
        dodger.style.left = `${left - 1}px`;
      }
    }
  
    function moveDodgerRight() {
      const leftNumbers = dodger.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);
  
      const gameWidth = 400; // Adjust this value based on your game field width
  
      if (left < gameWidth - 40) {
        // 40 is the width of the dodger
        dodger.style.left = `${left + 1}px`;
      }
    }
  
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        moveDodgerLeft();
      } else if (event.key === "ArrowRight") {
        moveDodgerRight();
      }
    });
  });
  