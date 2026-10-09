/*
  CHROMINK STUDIO CONFIGURATION
  Replace the placeholder with the studio's WhatsApp number in international format:
  Kenya example: 254712345678 (no +, spaces, or leading 0).
  Do not publish a real number without the owner's permission.
*/
const WHATSAPP_NUMBER = "254752712890";
const PROMOTION_END_DATE = ""; // Optional: "2026-12-31". Leave blank if no end date is confirmed.

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#mainNav");

menuToggle.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));

document.querySelector("#year").textContent = new Date().getFullYear();

if (PROMOTION_END_DATE) {
  const end = new Date(`${PROMOTION_END_DATE}T23:59:59`);
  if (!Number.isNaN(end.getTime())) {
    const strip = document.querySelector(".promo-strip");
    const note = document.createElement("span");
    note.textContent = `Offer ends ${end.toLocaleDateString(undefined, {year:"numeric", month:"short", day:"numeric"})}`;
    strip.appendChild(note);
  }
}

function whatsappUrl(message) {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, "");
  if (!digits || digits.includes("XXXXXXXX") || digits.length < 8) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

document.querySelector("#floatingWhatsApp").addEventListener("click", event => {
  event.preventDefault();
  const url = whatsappUrl("Hello ChromInk Studio! I'd like to ask about booking a tattoo appointment, the 20% promotion, and the $150 USD initial deposit terms.");
  if (!url) {
    alert("Please configure WHATSAPP_NUMBER in script.js with the studio's WhatsApp number before using booking links.");
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
});

document.querySelectorAll(".style-chip").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector("#tattooStyle").value = button.dataset.style;
    document.querySelector("#booking").scrollIntoView({behavior:"smooth"});
  });
});

document.querySelector("#bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const name = String(data.get("customerName")).trim();
  const date = String(data.get("customerDate"));
  const style = String(data.get("tattooStyle"));
  const size = String(data.get("tattooSize") || "Not sure");
  const description = String(data.get("designDescription")).trim();

  const message = [
    "Hello ChromInk Studio! I'd like to request a tattoo appointment.",
    "",
    `Name: ${name}`,
    `Preferred date: ${date}`,
    `Tattoo style: ${style}`,
    `Approximate size: ${size}`,
    `Design idea: ${description}`,
    "",
    "Please confirm availability, the final quote, eligibility for the 20% discount, and the terms of the $150 USD initial deposit. I understand this is a request, not a confirmed booking."
  ].join("\n");

  const url = whatsappUrl(message);
  const status = document.querySelector("#formMessage");
  if (!url) {
    status.textContent = "Setup needed: edit script.js and replace WHATSAPP_NUMBER with the studio's WhatsApp number in international format.";
    return;
  }
  status.textContent = "WhatsApp is opening with your request. Review the message and press Send to contact the studio.";
  window.open(url, "_blank", "noopener,noreferrer");
});
