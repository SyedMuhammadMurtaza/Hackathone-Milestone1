"use strict";
const toggleButton = document.getElementById('toggle-button');
const contentSection = document.getElementById('secSkills');
toggleButton.addEventListener('click', () => {
    if (contentSection.style.display === 'none') {
        contentSection.style.display = 'block';
        toggleButton.textContent = 'Hide Section';
    }
    else {
        contentSection.style.display = 'none';
        toggleButton.textContent = 'Show Section';
    }
});
