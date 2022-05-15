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
const swiper = new Swiper(".maySwiper", {
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});

//Scroll review

window.scrollReveal = ScrollReveal({ reset: true });

const homeSpan = {
  duration: 600,
  delay: 800,
  easing: "ease",
  origin: "left",
  rotate: {
    x: 80,
    y: 0,
    z: 0,
  },
  cleanup: true,
};

const homeTitle = {
  ...homeSpan,
  delay: 600,
};

const homeParagraph = {
  ...homeSpan,
  delay: 400,
};

const homeButton = {
  ...homeParagraph,
  delay: 200,
};

scrollReveal.reveal(".home-span", homeSpan);
scrollReveal.reveal(".home-title", homeTitle);
scrollReveal.reveal(".home-paragraph", homeParagraph);
scrollReveal.reveal(".home-button", homeButton);
scrollReveal.reveal(".budget-fast", {
  duration: 600,
  delay: 200,
  easing: "ease",
  origin: "left",
  rotate: {
    x: 0,
    y: 100,
    z: 0,
  },
  cleanup: true,
});
//Scroll Header Indicator
window.onscroll = () => {
  myFunction();
};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
