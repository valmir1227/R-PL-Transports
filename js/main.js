// Menu mobile
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navigation-bar");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
window.addEventListener("scroll", () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
});

//swiper
const swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

const swiperTestimonials = new Swiper(".swiperTestimonials", {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 0,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
});
