// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Form submission handling (Basic)
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Basic form validation
  if (name && email && message) {
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
  } else {
    alert('Please fill out all fields before submitting.');
  }
});

// Animate elements when they come into view
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated', 'animate__fadeInUp');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

// Observe elements that should be animated when they come into view
document.querySelectorAll('.animate-on-scroll').forEach(element => {
  observer.observe(element);
});

// Additional hover effect for cards or buttons (Optional)
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease-in-out';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Highlight active section in navbar on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 50) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Ensure form elements are reset on page load
window.addEventListener('load', function () {
  document.querySelector('form').reset();
});
