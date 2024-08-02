document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu functionality
  const hamburger = document.getElementById('hamburger');
  const navLeft = document.querySelector('.nav__left');
  const navRight = document.querySelector('.nav__right');

  hamburger.addEventListener('click', () => {
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
    hamburger.classList.toggle('active'); // Optional: Add an active class to change hamburger icon on click
  });

  // ScrollReveal options and animations
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    mobile: true, // Ensure ScrollReveal works on mobile
    reset: true, // Reset animations on scroll back up
  };

  // Function to handle ScrollReveal on specific elements
  function revealElements() {
    ScrollReveal().reveal(".container .letter-e", {
      duration: 1000,
      delay: 500,
    });
    ScrollReveal().reveal(".container img.logo-img", {
      duration: 1000,
      delay: 1000,
    });
    ScrollReveal().reveal(".container .text__left", {
      ...scrollRevealOption,
      origin: "right",
      delay: 1500,
    });
    ScrollReveal().reveal(".container .text__right", {
      ...scrollRevealOption,
      origin: "left",
      delay: 1500,
    });
    ScrollReveal().reveal(".container .explore", {
      duration: 1000,
      delay: 2000,
    });
    ScrollReveal().reveal(".container h5", {
      duration: 1000,
      interval: 300,
      delay: 2500,
    });
    ScrollReveal().reveal(".container .catalog", {
      duration: 1000,
      delay: 3500,
    });
    ScrollReveal().reveal(".container .print", {
      duration: 1000,
      delay: 4000,
    });
    ScrollReveal().reveal(".footer p", {
      duration: 1000,
      delay: 5000,
    });
    ScrollReveal().reveal(".footer__links", {
      duration: 1000,
      delay: 5500,
    });
  }

  // Call the function to set up ScrollReveal
  revealElements();

  // Add event listener for resizing
  window.addEventListener('resize', () => {
    // Reset ScrollReveal for resize events if needed
    ScrollReveal().destroy(); // Destroy previous ScrollReveal
    revealElements(); // Reinitialize ScrollReveal
  });
});
