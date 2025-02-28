document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Form validation for the booking form
document.querySelector('form').addEventListener('submit', function(e) {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill in all required fields.');
  } else if (!emailPattern.test(email)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});
