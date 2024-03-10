function moveImage() {
  var img = document.getElementById("movingImg");
  var currentPosition = 0; // Initial position
  
  // Function to move the image
  function move() {
    if (currentPosition >= 200) {
      clearInterval(moveInterval); // Stop the movement when it reaches 200px
    } else {
      currentPosition += 10; // Move 10 pixels each time (you can adjust this value)
      img.style.left = currentPosition + "px"; // Set the new position
    }
  }
  
  // Call the move function every 20 milliseconds (faster than before)
  var moveInterval = setInterval(move, 20);
}
