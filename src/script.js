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

    // Add event listener for sending message
    document.getElementById('send-message').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const message = document.getElementById('contact-message').value;

        console.log('Attempting to send data...'); // Add this line for debugging

        fetch('http://localhost:3000/submit', { // Ensure this URL matches your server
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));
    });

    // Test fetch request
    fetch('http://localhost:3000/submit', {
        method: 'POST',
        body: JSON.stringify({ test: 'data' }),
    })
    .then(response => console.log('Response:', response))
    .catch(error => console.error('Error:', error));
});