import { routeNavButtonsSelection, routeInit } from "./router.js";
import { initImageLoaderSpecial } from "./imageLoader.js";
import { themeButtonHandler } from "./themeService.js";

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