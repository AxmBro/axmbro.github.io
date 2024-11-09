export const routes = {
  "404": {
    route: "/routes/404.html",
  },
  "/": {
    route: "/routes/home.html",
  },
  "/projects": {
    route: "/routes/projects.html",
  },
  "/contact": {
    route: "/routes/contact.html",
  },
  "/better-bedrock-project": {
    route: "/routes/betterbedrock.html",
  },
  "/hometree-project": {
    route: "/routes/hometree.html",
  },
  "/simple-server-form-project": {
    route: "/routes/simple_server_form.html",
  },
  "/shop-server-form-project": {
    route: "/routes/shop_server_form.html",
  }
};

export let globalCache = {
  images: {}
}

export let THEME = localStorage.getItem("theme") ?? "dark";

export function setCurrentTheme(theme) {
  localStorage.setItem("theme", theme)
}

export function setNextTheme(theme) {
  THEME = theme;
}