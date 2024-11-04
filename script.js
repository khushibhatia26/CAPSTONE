// Get references to the input and display elements
const userInput = document.getElementById('userInput');
const displayText = document.getElementById('displayText');

// Add an event listener to update the display text in real time
userInput.addEventListener('input', function() {
    displayText.textContent = userInput.value;
});
