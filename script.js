document.addEventListener('DOMContentLoaded', function() {
  const projectImages = document.querySelectorAll('.projects img');

  projectImages.forEach(img => {
      img.addEventListener('click', function() {
          const projectName = this.nextElementSibling.nextElementSibling.textContent;
          alert(`${projectName}!`);
      });
  });

  const contactForm = document.querySelector('.contact-me form');

  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const message = document.getElementById('message').value;

          if (!name || !email || !message) {
              alert('Please fill in all fields.');
              event.preventDefault();
              return;
          }

          if (!email.includes('@')) 
            {
              alert('Please enter a valid email address.');
              event.preventDefault();
              return;
          }

          console.log('Form submitted:', { name, email, message });
          alert("Form submitted successfully! (Check console for data. This is a placeholder)");
      });
  }

  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault();
          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId) || document.querySelector(`.${targetId}`);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
          }
      });
  });
});