import contactImg from "./images/contact-footer.jpg";

export default function loadContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  /* ---------- Contact Section ---------- */
  const contactSection = document.createElement("section");
  contactSection.classList.add("contact-hero");

  /* Heading */
  const heading = document.createElement("h2");
  heading.classList.add("contact-title");
  heading.textContent = "EXPERIENCE EXCELLENT\nDINING AT ORIGIN";

  /* Button */
  const button = document.createElement("div");
  button.classList.add("contact-btn");
  button.textContent = "MAKE A\nRESERVATION\nTODAY";

  contactSection.appendChild(heading);
  contactSection.appendChild(button);

   const footer = document.createElement("section");
  footer.classList.add("contact-footer");
  footer.style.backgroundImage = `url(${contactImg})`;

  const info = document.createElement("div");
  info.classList.add("contact-info");

  info.innerHTML = `
    <p>123 Website St., Design By, ST Canvas</p>
    <p>thankyou@forvisiting.com</p>
    <p>(123) 456-7890</p>
    <p>@thankyoucanvas</p>
  `;

  footer.appendChild(info);

  content.appendChild(contactSection);
  content.appendChild(footer);
}
