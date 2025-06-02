// Dark/Light Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

// Check for saved user preference or use system preference
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
  body.classList.add("dark-mode");
  icon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});
// Typing effect 

var typed = new Typed('#element1', {
      strings: ['Software Developer', 'Video Editor','Frontend Designer'],
      typeSpeed: 50,
    });
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

//ResumeButton

document.getElementById('viewResumeBtn').addEventListener('click', function() {
    
    const driveUrl = 'https://drive.google.com/file/d/1nA7ycVL4tQd9pTS7CwfwwKsyLczrYiZo/view?usp=sharing';
    window.open(driveUrl, '_blank');
});

// Floating particles background
const particlesContainer = document.getElementById("particles");
const particleCount = 30;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  // Random size between 3px and 8px
  const size = Math.random() * 5 + 3;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  // Random position
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;

  // Random animation duration between 10s and 20s
  const duration = Math.random() * 10 + 10;
  particle.style.animationDuration = `${duration}s`;

  // Random delay
  particle.style.animationDelay = `${Math.random() * 10}s`;

  particlesContainer.appendChild(particle);
}

// Project slider functionality
const slider = document.querySelector(".projects-slider");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");
const projectCards = document.querySelectorAll(".project-card");
let currentIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projectCards.length;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projectCards.length) % projectCards.length;
  updateSlider();
});


// form 

$(document).ready(function() {
    // Show validation message on focus
    $('.form-control').focus(function() {
        $(this).next('.validation-message').show();
    });

    // Validate on input/blur
    $('.form-control').on('input blur', function() {
        validateField($(this));
    });

    // Form submission
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        let formIsValid = true;
        
        // Validate all fields
        $('.form-control').each(function() {
            if (!validateField($(this))) {
                formIsValid = false;
            }
        });
        
        if (formIsValid) {
            // Form is valid - process submission
            const formData = {
                name: $('#name').val().trim(),
                email: $('#email').val().trim(),
                subject: $('#subject').val().trim(),
                message: $('#message').val().trim()
            };
            
            console.log('Form submitted:', formData);
            showMessage('Thank you for your message! I will get back to you soon.', 'success');
            $('#contactForm')[0].reset();
            $('.form-control').removeClass('valid error');
        } else {
            showMessage('Please correct the errors in the form', 'error');
        }
    });

    function validateField(field) {
        const value = field.val().trim();
        const validationMsg = field.next('.validation-message');
        
        // Special handling for textarea
        if (field.is('textarea')) {
            if (value.length >= 10) {
                field.removeClass('error').addClass('valid');
                validationMsg.hide();
                return true;
            } else {
                field.removeClass('valid').addClass('error');
                validationMsg.show();
                return false;
            }
        }
        
        // For input fields
        if (field[0].checkValidity()) {
            field.removeClass('error').addClass('valid');
            validationMsg.hide();
            return true;
        } else {
            field.removeClass('valid').addClass('error');
            validationMsg.show();
            return false;
        }
    }

    function showMessage(text, type) {
        $('#form-message')
            .text(text)
            .removeClass('success error')
            .addClass(type)
            .fadeIn()
            .delay(5000)
            .fadeOut();
    }
});

// Update copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// 3D tilt effect for elements with tilt-effect class
const tiltElements = document.querySelectorAll(".tilt-effect");

tiltElements.forEach((element) => {
  element.addEventListener("mousemove", (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const angleX = (y - centerY) / 20;
    const angleY = (centerX - x) / 20;

    element.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.03)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform =
      "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
  });
});

// Scroll reveal animation
const scrollReveal = () => {
  const elements = document.querySelectorAll(
    "section, .section-title, .about-content, .about-img, .education-card, .timeline-item, .tech-stack, .project-card, .certification-card, .contact-info, .contact-form"
  );

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (elementPosition < screenPosition) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Set initial styles for animation
document
  .querySelectorAll(
    "section, .section-title, .about-content, .about-img, .education-card, .timeline-item, .tech-stack, .project-card, .certification-card, .contact-info, .contact-form"
  )
  .forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);
