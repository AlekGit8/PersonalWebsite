// JavaScript to handle button clicks
document.addEventListener('DOMContentLoaded', function() {
    const introButton = document.getElementById('introButton');
    const introMessage = document.getElementById('introMessage');
    const aboutButton = document.getElementById('aboutButton');
    const aboutMessage = document.getElementById('aboutMessage');

    introButton.addEventListener('click', function() {
        introMessage.classList.toggle('hidden');
        introButton.textContent = introMessage.classList.contains('hidden') ? 'Learn More' : 'Show Less';
    });

    aboutButton.addEventListener('click', function() {
        aboutMessage.classList.toggle('hidden');
        aboutButton.textContent = aboutMessage.classList.contains('hidden') ? 'Discover More' : 'Show Less';
    });
});