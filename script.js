/* script.js */

// Select the button element and the div that contains the message
const button = document.querySelector('#my-button');
const messageDiv = document.querySelector('#message');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Display a message in the message div
  messageDiv.textContent = 'Thank you for visiting our website!';
});
