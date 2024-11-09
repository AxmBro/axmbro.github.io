import { routes } from "./constants.js";
import { initImageLoader } from "./imageLoader.js";

export function routeInit() {
  routeHandler();
  window.addEventListener("popstate", () => {
    routeHandler();
  });
}

export function routeNavButtonsSelection() {
  const navButtonsList = document.querySelectorAll(`.nav-item`);
  navButtonsList.forEach((button) => {
    button.addEventListener("click", (e) => {
      const hrefValue = button.getAttribute("href");
      e.preventDefault();
      history.pushState("", "", hrefValue);
      routeHandler(hrefValue);
    });
  })
}

let cacheHTMLText = {}
let lastPath = null

export async function routeHandler(path = location.pathname) {
  if (path === "/index.html") path = "/";
  //prevent spamming :S
  if (path === lastPath) {
    document.querySelector(".mobile-nav-dropdown").style.display = "none";
    document.getElementById("mobile-nav-toggle").style.display = "block";
    document.querySelector(".extra-background").style.display = "none";
    return
  };
  const content = document.getElementById("content");

  //check if route is correct
  if (!routes[path]) {
    history.replaceState("", "", "/404");
    removeNavButtonsStyles()

    if (!cacheHTMLText[path]) {
      const html = await fetch(routes["404"].route).then((response) => response.text());
      cacheHTMLText[path] = html
      content.innerHTML = html;
    } else {
      content.innerHTML = cacheHTMLText[path];
    }

    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    initImageLoader();
    lastPath = "404"
    return
  }

  //if there isnt already content, fetch it. Otherwise load it
  if (!cacheHTMLText[path]) {
    const html = await fetch(routes[path].route).then((response) => response.text());
    cacheHTMLText[path] = html
    content.innerHTML = html;
  } else {
    content.innerHTML = cacheHTMLText[path];
  }

  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  initImageLoader();
  setStylesForNavButtons(path);
  updateRoutesFromHTMLElements();
  lastPath = path
}

//must be called because it must refresh elements with .openRoute class in HTML and handle everything in given route
function updateRoutesFromHTMLElements() {
  const elements = document.querySelectorAll(".openRoute");

  elements.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();

      const hrefValue = element.getAttribute("href");
      history.pushState("", "", hrefValue);
      routeHandler(hrefValue);
    });
  });
}

function setStylesForNavButtons(path) {
  removeNavButtonsStyles()
  if (path.includes("/projects/")) return

  let button = "";

  //if route / set it to "home" else change "/projects" -> "projects" to match correct names in html
  button = path === "/" ? (button = "home") : button = path.replace("/", "");
  
  const buttonsList = document.querySelectorAll(`.nav-button-${button}`);
  buttonsList.forEach((element) => {
    element.style.textDecoration = "underline";
  });
}

function removeNavButtonsStyles() {
  const navButtonsList = document.querySelectorAll(`.nav-item`);
  navButtonsList.forEach((element) => {
    element.style.textDecoration = "none";
  });
  
  document.querySelector(".mobile-nav-dropdown").style.display = "none";
  document.getElementById("mobile-nav-toggle").style.display = "block";
  document.querySelector(".extra-background").style.display = "none";
}
