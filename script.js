// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded');
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name === '' || email === '' || subject === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Here you can add the code to send the form data to your server or email service
    alert('Message sent!');

    // Optionally, reset the form after submission
    document.getElementById('contact-form').reset();
});
