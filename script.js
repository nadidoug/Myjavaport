// Function to set the background color
const setBackgroundColor = (color, button) => {
  document.body.style.backgroundColor = color;

  // Reset all buttons' appearances
  document.querySelectorAll('.button').forEach(btn => {
    btn.style.boxShadow = 'none';
  });

  // Highlight the clicked button
  button.style.boxShadow = `0 0 10px ${color}`;
};

// Function to generate a random hex color
const generateRandomHex = () => {
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += Math.floor(Math.random() * 16).toString(16).toUpperCase();
  }
  return hex;
};

// Event listener for all buttons
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
    const color = button.classList.contains('random') ? generateRandomHex() : button.getAttribute('data-color');
    setBackgroundColor(color, button);
  });
});