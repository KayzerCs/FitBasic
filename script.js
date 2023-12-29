let navbar = document.querySelector("nav");
let inshape = document.getElementById("imgInshape");
let popup = document.querySelector(".pop-up");
let btnClose = document.getElementById("closeBtn");
let playOne = true;
let sideBar = document.getElementById("side-bar");
let headerP = document.querySelector(".p-header");
let Btn = document.getElementById("btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    navbar.style.height = "70px";
  } else {
    navbar.style.height = "90px";
  }

  if (window.scrollY > 90) {
    inshape.style.opacity = 1;
    inshape.style.transform = "translateX(35%)";
  }

  if ((window.scrollY > 280) & playOne) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playOne = false;
  }
});

btnClose.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(600px)";
});

Btn.addEventListener("click", () => {
    sideBar.classList.toggle("active");
});
