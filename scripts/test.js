window.addEventListener("DOMContentLoaded", function () {
  console.log("Hello Console! TEST!");
  initBozy();
});

function initBozy() {
  interwal();
  preFecz();
}

function interwal() {
  const element = document.getElementById("timer");
  let s = 0

  setInterval(() => {
    element.innerHTML = `Timer: h:${Math.round(s/3600)} m:${Math.round(s/60)} s:${s}`;
    console.log(s);
    s++;
  }, 1000);
}

function preFecz() {
  const przycisk = document.getElementById("buton");
  const main = document.getElementById("main");
  const nowyElement = document.createElement("p")
  main.appendChild(nowyElement);

  przycisk.addEventListener("click", async () => {
    let feczData = await fetch("https://randomuser.me/api/?results=1");
    let dawajKurnaData = await feczData.json();
    let jsonData = JSON.stringify(dawajKurnaData);
    console.log(jsonData);

    nowyElement.innerHTML = jsonData
  });
}
