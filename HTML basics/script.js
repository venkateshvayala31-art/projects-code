// Form validation for the login form
document.querySelector('form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '') {
        alert('Please enter a username.');
        event.preventDefault();
        return;
    }

    if (password === '') {
        alert('Please enter a password.');
        event.preventDefault();
        return;
    }

    // Additional validation can be added here, e.g., password strength
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault();
        return;
    }

    alert('Login successful! (This is just a demo - no real backend)');
});

// Add click event to navigation buttons for feedback
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent !== 'Login') {
            alert(`Navigating to ${this.textContent} page.`);
        }
    });
});

// Simple animation for headings on load
document.addEventListener('DOMContentLoaded', function() {
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.style.opacity = '0';
        heading.style.transition = 'opacity 1s';
        setTimeout(() => {
            heading.style.opacity = '1';
        }, 500);
    });
});