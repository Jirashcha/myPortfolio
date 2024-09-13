const typewriterText = document.querySelector('.typewriter-text');
const texts = [' ', 'Student', 'Junior Data Engineer', 'Junior Software Developer', 'Microsoft Learn Student Ambassador']; // Add more words here
let index = 0;
let charIndex = 0;
let isErasing = false;

function type() {
  if (!isErasing && charIndex < texts[index].length) {
    typewriterText.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Speed of typing
  } else if (isErasing && charIndex > 0) {
    typewriterText.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(type, 80); // Speed of erasing
  } else {
    isErasing = !isErasing;
    if (!isErasing) {
      index = (index + 1) % texts.length; // Move to the next word
    }
    setTimeout(type, 500); // Wait before typing/erasing the next word
  }
}

document.addEventListener('DOMContentLoaded', type);
