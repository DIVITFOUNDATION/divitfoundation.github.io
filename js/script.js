// script.js

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
  
    if (menuToggle && navbar) {
      menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
      });
    }
  
    // Smooth Scrolling for Anchor Links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for fixed header
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Form Submission Handling (Example for Payment Page)
    const paymentForm = document.querySelector('#payment-form');
    if (paymentForm) {
      paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const amount = document.querySelector('#amount').value;
        if (amount && amount > 0) {
          alert(`Thank you for your donation of ₹${amount}!`);
          paymentForm.reset();
        } else {
          alert('Please enter a valid amount.');
        }
      });
    }
  
    // Contact Form Handling (Example for Contact Page)
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;
        
        if (name && email && message) {
          alert(`Thank you, ${name}! Your message has been sent.`);
          contactForm.reset();
        } else {
          alert('Please fill in all fields.');
        }
      });
    }
  });