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
var swiper = new Swiper(".mySwiper", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});
