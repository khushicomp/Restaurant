import menuImg from "./images/menu-hero.jpg"; // use your image
import brewImg from "./images/brewImg.jpg";
import wineImg from "./images/wineImg.jpg";
import favoritesBg from "./images/menu-favorites.jpg";

export default function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  /* ---------- Main container ---------- */
  const menuHero = document.createElement("section");
  menuHero.classList.add("menu-hero");

  /* ---------- Title ---------- */
  const title = document.createElement("h2");
  title.classList.add("menu-title");
  title.textContent = "ON THE MENU";

  /* ---------- Image wrapper ---------- */
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("menu-image-wrapper");

  const img = document.createElement("img");
  img.src = menuImg;
  img.alt = "Gourmet food";

  /* ---------- Oval badge ---------- */
  const badge = document.createElement("div");
  badge.classList.add("menu-badge");
  badge.textContent = "gourmet plates";

  imageWrapper.appendChild(img);
  imageWrapper.appendChild(badge);

   /* ---------- Assemble ---------- */
  menuHero.appendChild(title);
  menuHero.appendChild(imageWrapper);

  const strips = document.createElement("section");
  strips.classList.add("menu-strips");

  /* ----- Strip 1 ----- */
const strip1 = document.createElement("div");
strip1.classList.add("menu-strip");

   const img1 = document.createElement("img");
    img1.src = brewImg;
    img1.alt = "Craft brews";

    const label1 = document.createElement("div");
label1.classList.add("menu-strip-label");
label1.textContent = "craft brews";

strip1.appendChild(img1);
strip1.appendChild(label1);

/* ----- Strip 2 ----- */
const strip2 = document.createElement("div");
strip2.classList.add("menu-strip");

const img2 = document.createElement("img");
img2.src = wineImg;
img2.alt = "Wine pairings";

const label2 = document.createElement("div");
label2.classList.add("menu-strip-label");
label2.textContent = "wine & dish pairings";

strip2.appendChild(img2);
strip2.appendChild(label2);

strips.appendChild(strip1);
strips.appendChild(strip2);


/* ---------- Menu Favorites ---------- */
const favorites = document.createElement("section");
favorites.classList.add("menu-favorites");

/* background image */
favorites.style.backgroundImage = `url(${favoritesBg})`;

/* title */
const favTitle = document.createElement("h2");
favTitle.classList.add("favorites-title");
favTitle.textContent = "MENU FAVORITES";

/* grid */
const grid = document.createElement("div");
grid.classList.add("favorites-grid");

const favoritesData = [
  {
    name: "TRUFFLE PASTA",
    desc: "Handmade pasta tossed with truffle cream and aged parmesan.",
  },
  {
    name: "STEAK FRITES",
    desc: "Grilled steak served with crispy fries and herb butter.",
  },
  {
    name: "MARGHERITA PIZZA",
    desc: "San Marzano tomatoes, fresh mozzarella, and basil.",
  },
  {
    name: "BUTTER CHICKEN",
    desc: "Slow-cooked chicken in a rich, spiced tomato gravy.",
  },
  {
    name: "LEMON PIE",
    desc: "Zesty lemon filling with a buttery, crisp crust.",
  },
  {
    name: "CHOCO CHIP CAKE",
    desc: "Moist chocolate cake loaded with dark chocolate chips.",
  },
];


favoritesData.forEach(dish => {
  const item = document.createElement("div");
  item.classList.add("favorite-item");

  const title = document.createElement("h3");
  title.textContent = dish.name;

  const desc = document.createElement("p");
  desc.textContent = dish.desc;

  item.appendChild(title);
  item.appendChild(desc);
  grid.appendChild(item);
});


/* button */
const btn = document.createElement("div");
btn.classList.add("favorites-btn");
btn.textContent = "View our full menu";

/* assemble */
favorites.appendChild(favTitle);
favorites.appendChild(grid);
favorites.appendChild(btn);


 
  content.appendChild(menuHero);
  content.appendChild(strips);
  content.appendChild(favorites);
}
