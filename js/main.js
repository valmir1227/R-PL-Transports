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

function darkMode() {
  const html = document.querySelector("html");
  const iconDarkMode = document.querySelector(".fa-sun");
  const buttonDarkMode = document.querySelector(".button-dark-mode");

  buttonDarkMode.addEventListener("click", () => {
    html.classList.toggle("dark-mode-theme");
    iconDarkMode.classList.toggle("fa-sun");
    iconDarkMode.classList.toggle("fa-moon");
  });
}
darkMode();

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

  scrollReveal.reveal(".home-span", homeSpan);
  scrollReveal.reveal(".home-title", homeTitle);
  scrollReveal.reveal(".home-paragraph", homeParagraph);
  scrollReveal.reveal(".scroll-review", {
    duration: 600,
    delay: 300,
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
}
scrollReveal();

//Scroll Bar Header Indicator
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
      const ufList = data;

      return ufList.map(function (ufList) {
        let optionDestination = createNode("option");
        let optionLeaving = createNode("option");

        optionDestination.textContent = `${ufList.nome}`;
        optionLeaving.textContent = `${ufList.nome}`;

        append(selectUfLeaving, optionLeaving);
        append(selectUfDestination, optionDestination);
      });
    });

  function budgetFast() {
    const budgetButton = document.getElementById("budgetButton");

    budgetButton.addEventListener("click", () => {
      optionLeaving = selectUfLeaving.children[selectUfLeaving.selectedIndex];
      let optionLeavingText = optionLeaving.textContent;
      let optionDestination =
        selectUfDestination.children[selectUfDestination.selectedIndex];
      optionDestinationText = optionDestination.textContent;

      let vehicleInput = document.getElementById("vehicle").value;
      let destinationCity = document.getElementById("destinationCity").value;
      let leavingCity = document.getElementById("leavingCity").value;

      if (
        !vehicleInput ||
        !leavingCity ||
        !optionLeavingText ||
        !destinationCity ||
        !optionDestinationText ||
        !vehicleInput
      ) {
        const body = document.querySelector("body");
        const divAlert = document.createElement("div");
        const alertMessage = document.createElement("span");
        const alertText = document.createTextNode(
          "?????? Preencha todos os campos do formul??rio."
        );

        divAlert.setAttribute("class", "alert-form-message");

        alertMessage.appendChild(alertText);

        divAlert.appendChild(alertMessage);

        body.appendChild(divAlert);
      } else {
        budgetButton.setAttribute(
          "href",
          `https://wa.me/553172147643?text=Ol?? gostaria de um or??amento: Local de saida ${leavingCity.toUpperCase()} - ${optionLeavingText.toUpperCase()} para ${destinationCity.toUpperCase()} - ${optionDestinationText.toUpperCase()}, ve??culo ${vehicleInput.toUpperCase()}`
        );
      }
    });
  }

  budgetFast();
}

getBrazilianUf();
