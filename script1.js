document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu functionality
  const hamburger = document.getElementById('hamburger');
  const navLeft = document.querySelector('.nav__left');
  const navRight = document.querySelector('.nav__right');

  hamburger.addEventListener('click', () => {
    navLeft.classList.toggle('active');
    navRight.classList.toggle('active');
  });

  // ScrollReveal options and animations
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".container .letter-e", {
    duration: 1000,
    delay: 1000,
  });
  ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 1500,
  });
  ScrollReveal().reveal(".container .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .explore", {
    duration: 1000,
    delay: 2500,
  });
  ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 3000,
  });
  ScrollReveal().reveal(".container .catalog", {
    duration: 1000,
    delay: 5000,
  });
  ScrollReveal().reveal(".container .print", {
    duration: 1000,
    delay: 5500,
  });
  ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 7000,
  });
});
