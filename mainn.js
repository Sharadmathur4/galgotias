const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const scrollRevealOption2 = {
  distance: "50px",
  origin: "left",
  duration: 1000,
};

const scrollRevealOption3 = {
  distance: "50px",
  origin: "top",
  duration: 1000,
};

const scrollRevealOption4 = {
  distance: "50px",
  origin: "right",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__content form", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal("h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal("card23", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal("border3", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h5", {
  ...scrollRevealOption3,
  delay: 500,
});
ScrollReveal().reveal("h5", {
  ...scrollRevealOption3,
  delay: 500,
});
ScrollReveal().reveal("iframe", {
  ...scrollRevealOption2 ,
  delay: 500,
});

ScrollReveal().reveal(".section__containere", {
  ...scrollRevealOption4,
  delay: 500,
});


const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});



ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});


