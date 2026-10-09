// CUSTOMIZE THESE SETTINGS
// WhatsApp expects country code + number, digits only.
// 0752712890 is configured as Kenya: 254752712890.
const WHATSAPP_NUMBER = "254752712890";
const PROMOTION_START = "5 October 2026";
const PROMOTION_END = "30 October 2026";
const DISCOUNT_PERCENT = 20;

// Edit service names, descriptions and original USD prices here.
const SERVICES = [
 {name:"Fine line",description:"Delicate linework and subtle, personal designs.",price:100,icon:"✳"},
 {name:"Custom tattoo",description:"A one-of-a-kind concept built around your story.",price:180,icon:"✦"},
 {name:"Color piece",description:"Vivid color, contrast, and expressive energy.",price:220,icon:"◈"},
 {name:"Large / session",description:"Bigger concepts and detailed multi-session work.",price:350,icon:"✺"}
];
const money = amount => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}).format(amount);
document.getElementById("serviceGrid").innerHTML = SERVICES.map((s,i) => `
 <article class="service-card"><span class="service-index">0${i+1} / SERVICE</span><span class="service-icon">${s.icon}</span>
 <h3>${s.name}</h3><p>${s.description}</p><div class="price-row"><span class="old-price">${money(s.price)}</span><strong class="new-price">${money(s.price*(1-DISCOUNT_PERCENT/100))}</strong></div></article>`).join("");

const generalMessage = `Hello! I'd like to ask about tattoo services, availability, the ${DISCOUNT_PERCENT}% promotion (${PROMOTION_START} – ${PROMOTION_END}), and the $150 USD initial booking deposit. Please confirm deposit terms before I pay.`;
function waLink(message){return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;}
["quickWhatsApp","contactWhatsApp"].forEach(id=>{const a=document.getElementById(id);a.href=waLink(generalMessage);a.target="_blank";a.rel="noopener noreferrer";});
document.getElementById("bookingForm").addEventListener("submit",e=>{
 e.preventDefault();if(!e.currentTarget.reportValidity())return;
 const name=document.getElementById("name").value.trim(),date=document.getElementById("date").value,
 style=document.getElementById("style").value,size=document.getElementById("size").value,
 description=document.getElementById("description").value.trim();
 const message=[
 "Hello! I'd like to request a tattoo appointment.","",
 `Name: ${name}`,`Preferred date: ${date}`,`Tattoo style: ${style}`,`Approximate size: ${size}`,`Design description: ${description}`,"",
 `I saw the ${DISCOUNT_PERCENT}% promotion (${PROMOTION_START} – ${PROMOTION_END}).`,
 "I understand the initial booking deposit is listed as $150 USD. Please confirm deposit terms and appointment availability before I pay.",
 "Please let me know the next steps. Thank you!"
 ].join("\n");
 document.getElementById("formStatus").textContent="Opening WhatsApp with your appointment details…";
 window.open(waLink(message),"_blank","noopener,noreferrer");
});
const date=document.getElementById("date"),now=new Date();date.min=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);
document.getElementById("year").textContent=new Date().getFullYear();
const menu=document.querySelector(".menu"),nav=document.getElementById("nav");
menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));menu.setAttribute("aria-label",open?"Close navigation":"Toggle navigation");menu.textContent=open?"×":"☰";});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");menu.textContent="☰";}));
