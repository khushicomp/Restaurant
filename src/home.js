import landingImg from "./images/food.jpg";
import landingImg2 from "./images/food2.jpg";
import landingImg3 from "./images/food-menu.jpg";
import landingImg4 from "./images/seat-booking.jpg";
import landingImg5 from "./images/food-online.jpg";
import newsImg from "./images/news-bg.jpg";
import testimonialImg from "./images/testimonials-bg.jpg";

export default function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const header = document.querySelector("header");

  const oldHeroText = header.querySelector(".home-overlay");
  if (oldHeroText) oldHeroText.remove();

  const overlay = document.createElement("div");
  overlay.classList.add("home-overlay");

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to Origin Restaurant";

  const text = document.createElement("p");
  text.textContent = "The best food made with love and logic.";

  overlay.appendChild(heading);
  overlay.appendChild(text);
  header.appendChild(overlay);

  const section = document.createElement("section");
  section.classList.add("landing-section");

  const sectionHeading = document.createElement("h2");
  sectionHeading.textContent = "Why Choose Us?";

  const sectionText = document.createElement("p");
  sectionText.textContent =
    "At Origin Restaurant, we combine fresh ingredients, skilled chefs, and a warm atmosphere to give you an unforgettable dining experience.";

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image-wrapper");

  const img = document.createElement("img");
  img.src = landingImg;
  img.classList.add("landing-image");

  const img2 = document.createElement("img");
  img2.src = landingImg2;
  img2.classList.add("landing-image2");

  imageWrapper.appendChild(img);
  imageWrapper.appendChild(img2);

  // -------- Dark Section --------
  const page = document.createElement("div");
  page.classList.add("new-page");

  const pageHeading = document.createElement("h2");
  pageHeading.textContent = "Order & Explore";
  pageHeading.classList.add("page-heading-main");

  const pagetext = document.createElement("p");
  pagetext.textContent = "An explosion of authentic flavors served straight";
  pagetext.classList.add("page-text-main");

  const pagetext2 = document.createElement("p");
  pagetext2.textContent = "from our kitchen to your plate.";
  pagetext2.classList.add("page-text-sub");

  

  const hLine = document.createElement("div");
  hLine.classList.add("dash-horizontal");


  

  const textBox = document.createElement("div");
  textBox.classList.add("feature-text");

  const pagetext3 = document.createElement("p");
  pagetext3.textContent =
    "Don't just upload a PDF. Use a mobile-friendly text menu with prices and descriptions.";
  pagetext3.classList.add("page-text-sub2");

  const img3 = document.createElement("img");
  img3.src = landingImg3;
  img3.classList.add("landing-image3");

  textBox.appendChild(pagetext3);
  textBox.appendChild(img3);
  const hLine1 = document.createElement("div");
  hLine1.classList.add("dash-horizontal");

  const textBox2 = document.createElement("div");
  textBox2.classList.add("feature-text");

  

  const pagetext4 = document.createElement("p");
  pagetext4.textContent =
    "An integrated booking widget (like OpenTable or Resy) or a simple contact form.";
  pagetext4.classList.add("page-text-sub2");

  const img4 = document.createElement("img");
  img4.src = landingImg4;
  img4.classList.add("landing-image3");

  
  textBox2.appendChild(img4);
   
  textBox2.appendChild(pagetext4);

  const hLine2 = document.createElement("div");
  hLine2.classList.add("dash-horizontal");

  const textBox3 = document.createElement("div");
  textBox3.classList.add("feature-text");

  

  const pagetext5 = document.createElement("p");
  pagetext5.textContent =
    "A direct link to your delivery partners or your in-house ordering system.";
  pagetext5.classList.add("page-text-sub2");

  const img5 = document.createElement("img");
  img5.src = landingImg5;
  img5.classList.add("landing-image3");

  
  
   
  textBox3.appendChild(pagetext5);
  textBox3.appendChild(img5);
  

  page.appendChild(pageHeading);
  
  page.appendChild(pagetext);
  page.appendChild(pagetext2);
  
  page.appendChild(hLine);
  
  page.appendChild(textBox);
  page.appendChild(hLine1);
  
  page.appendChild(textBox2);

  page.appendChild(hLine2);
  page.appendChild(textBox3);

  const page2 = document.createElement("div");
  page2.classList.add("new-page2");

  const line=document.createElement("p");
  line.textContent="Where quality ingredients meet careful craftsmanship,";
  line.classList.add("page-text-main1");

  const line2=document.createElement("p");
  line2.textContent="creating food worth coming back for !"
  line2.classList.add("page-text-sub1");

  page2.appendChild(line);
  page2.appendChild(line2);

 

  /* ---------- In the News Section ---------- */
  const newsSection = document.createElement("section");
  newsSection.classList.add("news-section");
  newsSection.style.backgroundImage = `url(${newsImg})`;

  const title = document.createElement("h2");
  title.classList.add("news-title");
  title.textContent = "IN THE NEWS";

  const box = document.createElement("div");
  box.classList.add("news-box");

  box.innerHTML = `
    <p>
      Origin Restaurant is redefining comfort dining with a focus on quality ingredients, thoughtful preparation, and a menu that evolves with the seasons.
      <span>— THE FOOD HUB</span>
    </p>

    <p>
      Known for its calm atmosphere and carefully curated dishes, Origin Restaurant blends modern presentation with familiar flavors that resonate.
      <span>— ONLINE CUPBOARD</span>
    </p>

    <p>
      With a commitment to craftsmanship and consistency, Origin Restaurant stands out as a destination for diners who value substance over trends.
      <span>— EAT THE WORLD</span>
    </p>
  `;

  newsSection.appendChild(title);
  newsSection.appendChild(box);

  const tsection = document.createElement("section");
  tsection.classList.add("testimonials-section");
  tsection.style.backgroundImage = `url(${testimonialImg})`;

  const ttitle = document.createElement("h2");
  ttitle.classList.add("testimonials-title");
  ttitle.textContent = "FROM CUSTOMERS";

  const tbox = document.createElement("div");
  tbox.classList.add("testimonials-box");

  

  tbox.innerHTML = `
    <p>
      “Every dish feels thoughtfully crafted. The flavors are balanced, the ingredients feel fresh, and the experience keeps us coming back.”
      <span>— Ananya, Pune</span>
    </p>

    <p>
      “From the ambience to the plating, everything feels intentional. It’s rare to find food that feels both comforting and refined.”
      <span>— Rohan, Baner</span>
    </p>

    <p>
      “This is our go-to place for special evenings. Consistently great food, warm service, and a calm, welcoming atmosphere.”
      <span>— Meera, Wakad</span>
    </p>
  `;

  tsection.appendChild(tbox);
  tsection.appendChild(ttitle);


  const footer = document.createElement("footer");
  footer.classList.add("site-footer");

  
  footer.innerHTML = `
    <div class="footer-top">
      <h2>Built around flavor, atmosphere,<br>and the joy of dining well.</h2>
      <button class="footer-cta">JOIN US TONIGHT</button>
    </div>

    <div class="footer-divider"></div>

    <div class="footer-columns">
      <div class="footer-brand">
        <p class="footer-tagline">A website makes it real✨💫</p>
      </div>

      <div class="footer-col">
        <h4>Products</h4>
        <p>Website Templates</p>
        <p>Domains</p>
        <p>Online Stores</p>
        <p>Email Campaigns</p>
        <p>Pricing</p>
      </div>

      <div class="footer-col">
        <h4>Solutions</h4>
        <p>Restaurants</p>
        <p>Photography</p>
        <p>Fitness</p>
        <p>Creators</p>
        <p>Enterprise</p>
      </div>

      <div class="footer-col">
        <h4>Support</h4>
        <p>Help Center</p>
        <p>Forum</p>
        <p>Webinars</p>
        <p>Hire an Expert</p>
      </div>

      <div class="footer-col">
        <h4>Company</h4>
        <p>About</p>
        <p>Careers</p>
        <p>Press</p>
        <p>Contact</p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 Origin Restaurant. All rights reserved.😉</p>
    </div>
  `;


  section.appendChild(sectionHeading);
  section.appendChild(sectionText);
  section.appendChild(imageWrapper);
  section.appendChild(page);
  section.appendChild(page2);
  section.appendChild(newsSection);
  section.appendChild(tsection);
  section.appendChild(footer);
  

  content.appendChild(section);
}
