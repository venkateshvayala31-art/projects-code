console.log('JavaScript is running.');

window.addEventListener('DOMContentLoaded', () => {
  const myH1 = document.getElementById('myh1');
  if (myH1) {
    myH1.textContent = 'Welcome to my Portfolio!';
  }

  const showTimeButton = document.getElementById('showTime');
  const themeToggleButton = document.getElementById('themeToggle');
  const message = document.getElementById('message');

  if (showTimeButton && message) {
    showTimeButton.addEventListener('click', () => {
      const now = new Date();
      message.textContent = `Current time: ${now.toLocaleTimeString()}`;
    });
  }

  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      themeToggleButton.textContent = document.body.classList.contains('dark-mode')
        ? 'Light Mode'
        : 'Dark Mode';
    });
  }

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', event => {
      event.preventDefault();
      const formMessage = document.getElementById('formMessage');
      if (formMessage) {
        formMessage.textContent = 'Thank you! Your message was sent successfully.';
        formMessage.style.color = '#00ff7f';
      }
      contactForm.reset();
    });
  }
});
