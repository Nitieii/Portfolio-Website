/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => el.addEventListener("click", toggleSkills));

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((content) => {
      content.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    modal(i);
  });
});

modalCloses.forEach((close) => {
  close.addEventListener("click", function () {
    modalViews.forEach((modal) => {
      modal.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
const swiper = new Swiper(".portfolio__container", {
  // Optional parameters
  loop: true,
  cssMode: true,
  autoplay: {
    delay: 3000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  mousewheel: true,
});

/*==================== TESTIMONIAL ====================*/
const swiperTestimonial = new Swiper(".testimonial__container", {
  // Optional parameters
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href="#' + sectionId + '"]')
        .classList.add("active-link");
    } else {
      document
        .querySelector('.nav__menu a[href="#' + sectionId + '"]')
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");

  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
};

if (selectedTheme) {
  document.body.classList[selectedTheme == "dark" ? "add" : "remove"](
    darkTheme
  );

  themeButton.classList[selectedIcon == "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== TYPED JS ====================*/
let typed = new Typed(".auto-type", {
  strings: ["Ngo Tuan Anh", "Developer", "Designer"],
  typeSpeed: 90,
  backspeed: 130,
  loop: true,
});