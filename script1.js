document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu functionality
  const hamburger = document.getElementById('hamburger');
  const navLeft = document.querySelector('.nav__left');
  const navRight = document.querySelector('.nav__right');

  hamburger.addEventListener('click', () => {
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
    // Toggle hamburger icon (optional)
    hamburger.classList.toggle('active');
  });

  // ScrollReveal options and animations
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
    easing: 'ease-in-out'
  };

  ScrollReveal().reveal(".letter-e", {
    duration: 1000,
    delay: 1000,
    ...scrollRevealOption
  });
  ScrollReveal().reveal("img", {
    duration: 1000,
    delay: 1500,
    ...scrollRevealOption
  });
  ScrollReveal().reveal(".text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
  });
  ScrollReveal().reveal(".text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
  });
  ScrollReveal().reveal(".explore", {
    duration: 1000,
    delay: 2500,
    ...scrollRevealOption
  });
  ScrollReveal().reveal("h5", {
    duration: 1000,
    interval: 500,
    delay: 3000,
    ...scrollRevealOption
  });
  ScrollReveal().reveal(".catalog", {
    duration: 1000,
    delay: 5000,
    ...scrollRevealOption
  });
  ScrollReveal().reveal(".print", {
    duration: 1000,
    delay: 5500,
    ...scrollRevealOption
  });
  ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 7000,
    ...scrollRevealOption
  });
});
