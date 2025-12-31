import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";
import "./style.css";
import heroBg from "./images/restaurant.jpg";

/* ---------- Background helpers ---------- */
function setHomeBackground() {
  const header = document.querySelector("header");

  header.style.backgroundImage = `url(${heroBg})`;
  header.style.backgroundSize = "cover";
  header.style.backgroundPosition = "center";
  header.style.backgroundRepeat = "no-repeat";
  header.style.minHeight = "800px";
}

function clearHeaderBackground() {
  const header = document.querySelector("header");

  header.style.backgroundImage = "";
  header.style.minHeight = "";

  const heroText = header.querySelector(".home-overlay");
  if (heroText) heroText.remove();
}

/* ---------- Buttons ---------- */
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

/* ---------- Initial load ---------- */
setHomeBackground();
loadHome();

/* ---------- Tab switching ---------- */
homeBtn.addEventListener("click", () => {
  setHomeBackground();
  loadHome();
});

menuBtn.addEventListener("click", () => {
  clearHeaderBackground();
  loadMenu();
});

contactBtn.addEventListener("click", () => {
  clearHeaderBackground();
  loadContact();
});
