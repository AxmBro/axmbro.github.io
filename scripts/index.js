import { routeNavButtonsSelection, routeInit } from "./router.js";
import { THEME, setNextTheme, setCurrentTheme } from "./constants.js";
import { initImageLoaderSpecial } from "./imageLoader.js";

window.addEventListener("DOMContentLoaded", () => {
  DOMinit();
});

function DOMinit() {
  routeInit();
  routeNavButtonsSelection();
  
  mobileNavToggleHandler();
  themeButtonHandler();
}

function mobileNavToggleHandler() {
  const mobileNav = document.querySelector(".mobile-nav-dropdown");
  const openToggle = document.getElementById("mobile-nav-toggle");
  const background = document.querySelector(".extra-background");

  openToggle.addEventListener("click", () => {
    const isVisible = openToggle.style.display !== "none";

    mobileNav.style.display = isVisible ? "block" : "none"
    openToggle.style.display = isVisible ? "none" : "block"
    background.style.display = isVisible ? "block" : "none"
  });

  background.addEventListener("click", () => {
    mobileNav.style.display = "none";
    openToggle.style.display = "block";
    background.style.display = "none";
  });
}


function themeButtonHandler() {
  setAllThemes();
  const icons = document.querySelectorAll(".nav-button-theme");
  icons.forEach(element => {
    element.addEventListener("click", () => {
      setAllThemes();
    });
  });
}

function setAllThemes() {
  if (THEME === "dark") {
    setCurrentTheme("dark");
    setThemeIcon("dark_mode");
    getAndSetPropertyCustom("--secondary-text-color", "rgb(24, 166, 255)");
    getAndSetPropertyCustom("--website-background-color", "rgb(22, 22, 22)");
    getAndSetPropertyCustom("--navbar-dropdown-background-color", "rgb(43, 43, 43)");
    getAndSetPropertyCustom("--primary-text-color", "rgb(255, 255, 255)");
    getAndSetPropertyCustom("--primary-description-text-color", "rgb(192, 192, 192)");
    setNextTheme("light");
  } else if (THEME === "light") {
    setCurrentTheme("light");
    setThemeIcon("light_mode");
    getAndSetPropertyCustom("--secondary-text-color", "rgb(27, 110, 243)");
    getAndSetPropertyCustom("--website-background-color", "rgb(242, 242, 242)");
    getAndSetPropertyCustom("--navbar-dropdown-background-color", "rgb(212, 212, 212)");
    getAndSetPropertyCustom("--primary-text-color", "rgb(0,0,0)");
    getAndSetPropertyCustom("--primary-description-text-color", "rgb(63,63,63)");
    setNextTheme("dark");
  }
}

function getAndSetPropertyCustom(property, value) {
  getComputedStyle(document.documentElement).getPropertyValue(property)
  document.documentElement.style.setProperty(property, value);
}

function setThemeIcon(imagePath) {
  const icons = document.querySelectorAll(".nav-button-theme")
  icons.forEach(element => {
    element.setAttribute("data-value", imagePath)
  }) 
  initImageLoaderSpecial("loadImageSpecialTheme")
}
