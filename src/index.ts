const toggleButton = document.getElementById('toggle-button') as HTMLButtonElement;
const contentSection = document.getElementById('secSkills') as HTMLElement;

toggleButton.addEventListener('click', () => {
    if (contentSection.style.display === 'none') {
        contentSection.style.display = 'block';
        toggleButton.textContent = 'Hide Section';
    } else {
        contentSection.style.display = 'none';
        toggleButton.textContent = 'Show Section';
    }
});