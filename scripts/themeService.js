import { initImageLoaderSpecial } from "./imageLoader.js";

export function themeButtonHandler() {
  setTheme(true);
  const icons = document.querySelectorAll(".nav-button-theme");
  icons.forEach(element => {
    element.addEventListener("click", () => {
      setTheme();
    });
  });
}

function setTheme(init = false) {
  let currentTheme = localStorage.getItem("theme");

  // if localStorage value would be incorrect then set theme to dark
  if (!(currentTheme === "light" || currentTheme === "dark")) {
    currentTheme = "dark"
  }

  if (init) {
    currentTheme === "dark" ? setDarkTheme() : setLightTheme();
  } else {
    currentTheme === "dark" ? setLightTheme() : setDarkTheme();
  }
}

function setDarkTheme() {
  setThemeIcon("dark_mode");
  getAndSetPropertyCustom("--secondary-text-color", "rgb(24, 166, 255)");
  getAndSetPropertyCustom("--website-background-color", "rgb(22, 22, 22)");
  getAndSetPropertyCustom("--navbar-dropdown-background-color", "rgb(43, 43, 43)");
  getAndSetPropertyCustom("--primary-text-color", "rgb(255, 255, 255)");
  getAndSetPropertyCustom("--primary-description-text-color", "rgb(192, 192, 192)");
  localStorage.setItem("theme", "dark")
}

function setLightTheme() {
  setThemeIcon("light_mode");
  getAndSetPropertyCustom("--secondary-text-color", "rgb(27, 110, 243)");
  getAndSetPropertyCustom("--website-background-color", "rgb(242, 242, 242)");
  getAndSetPropertyCustom("--navbar-dropdown-background-color", "rgb(212, 212, 212)");
  getAndSetPropertyCustom("--primary-text-color", "rgb(0,0,0)");
  getAndSetPropertyCustom("--primary-description-text-color", "rgb(63,63,63)");
  localStorage.setItem("theme", "light")
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
