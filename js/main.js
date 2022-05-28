// Menu mobile
function toggleMobileMenu() {
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
}
toggleMobileMenu();

//Scroll review
function scrollReveal() {
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
    reset: true,
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

  const budgetFast = {
    duration: 600,
    delay: 200,
    easing: "ease",
    origin: "right",
    rotate: {
      x: 0,
      y: 0,
      z: 0,
    },
    cleanup: true,
    reset: true,
  };

  scrollReveal.reveal(".home-span", homeSpan);
  scrollReveal.reveal(".home-title", homeTitle);
  scrollReveal.reveal(".home-paragraph", homeParagraph);
  scrollReveal.reveal(".home-button", homeButton);
  scrollReveal.reveal(".budget-fast", budgetFast);
  scrollReveal.reveal(".cards-wraper", {
    duration: 600,
    delay: 300,
    easing: "ease",
    origin: "left",
    rotate: {
      x: 0,
      y: 100,
      z: 0,
    },
    cleanup: true,
    reset: true,
  });

  scrollReveal.reveal(".text", {
    duration: 800,
    delay: 200,
    easing: "ease",
    origin: "left",
    rotate: {
      x: 100,
      y: 0,
      z: 0,
    },
    cleanup: true,
    reset: true,
  });
  scrollReveal.reveal(".about-image", {
    duration: 800,
    delay: 200,
    easing: "ease",
    origin: "left",
    rotate: {
      x: 0,
      y: 0,
      z: 0,
    },
    cleanup: true,
    reset: true,
  });

  scrollReveal.reveal(".title", {
    duration: 800,
    delay: 200,
    easing: "ease",
    origin: "left",
    rotate: {
      x: 0,
      y: 0,
      z: 0,
    },
    cleanup: true,
    reset: true,
  });

  scrollReveal.reveal(".form", {
    duration: 800,
    delay: 200,
    easing: "ease",
    origin: "left",
    rotate: {
      x: 0,
      y: 0,
      z: 0,
    },
    cleanup: true,
    reset: true,
  });
}
scrollReveal();

//Scroll Header Indicator
function headerScrollBar() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
window.onscroll = () => {
  headerScrollBar();
};

//mudar o nome das variaves
async function getBrazilianUf() {
  function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }

  let selectUfLeaving = document.querySelector("#ufLeaving");
  let selectUfDestination = document.querySelector("#ufDestination");
  const url =
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome";

  await fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let saidas = data;

      return saidas.map(function (saida) {
        let optionDestination = createNode("option");
        let optionLeaving = createNode("option");

        optionDestination.textContent = `${saida.nome}`;
        optionLeaving.textContent = `${saida.nome}`;

        append(selectUfLeaving, optionLeaving);
        append(selectUfDestination, optionDestination);

        //console.log(optionLeaving);
      });
    });

  selectUfLeaving.addEventListener("change", () => {
    let optionLeaving = selectUfLeaving.children[selectUfLeaving.selectedIndex];
    let optionLivingText = optionLeaving.textContent;

    selectUfDestination.addEventListener("change", () => {
      let optionDestination =
        selectUfDestination.children[selectUfDestination.selectedIndex];
      let optionDestinationText = optionDestination.textContent;
      console.log(optionDestinationText);
    });
    console.log(optionLivingText);
  });
}

getBrazilianUf();
