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


// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Add 'active' class to the clicked button and the corresponding tab
    button.classList.add('active');
    const tab = button.getAttribute('data-tab');
    document.getElementById(`${tab}-tab`).classList.add('active');
  });
});

// Popup functionality
// const popup = document.getElementById('popup');
// const detailButtons = document.querySelectorAll('.detail-btn');
// const closeButton = document.querySelector('.close-btn');

// detailButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     popup.style.display = 'flex';
//   });
// });

// closeButton.addEventListener('click', () => {
//   popup.style.display = 'none';
// });

// // Close popup when clicking outside the content
// popup.addEventListener('click', (e) => {
//   if (e.target === popup) {
//     popup.style.display = 'none';
//   }
// });

// JavaScript for the hamburger menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburg = document.querySelector('.hamburg');
  const navContainer = document.querySelector('.nav-container');

  hamburg.addEventListener('click', () => {
      navContainer.classList.toggle('active');
  });
});
