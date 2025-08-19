/* ================= Config ================= */
const WSP_NUMBER = "549XXXXXXXXXX"; // <- Reemplazá por tu número (sin +, sin espacios)
const DEFAULT_WSP_MSG = "Hola! Quiero una cotización.";

/* ================= Menú / UI ================= */
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");
const overlay   = document.getElementById("menuOverlay");

function toggleMenu(open) {
  if (!navLinks) return;
  const willOpen = open ?? !navLinks.classList.contains("open");
  navLinks.classList.toggle("open", willOpen);
  overlay?.classList.toggle("open", willOpen);
  hamburger?.classList.toggle("open", willOpen);
  hamburger?.setAttribute?.("aria-expanded", String(willOpen));
  document.body.style.overflow = willOpen ? "hidden" : "";
}

hamburger?.addEventListener("click", () => toggleMenu());
overlay?.addEventListener("click", () => toggleMenu(false));
document.querySelectorAll(".nav__link").forEach(a =>
  a.addEventListener("click", () => toggleMenu(false))
);

/* CTA del héroe */
const ctaHero = document.getElementById("ctaHero");
ctaHero?.addEventListener("click", (e) => {
  e.preventDefault();
  toWhatsapp(DEFAULT_WSP_MSG + " (Desde el héroe)");
});

/* Año en footer */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ======= Resolución inteligente de imágenes ======= */
// Si algún archivo tiene otro nombre/extensión, lo indicás acá:
const IMG_OVERRIDE = {
  // "caldera_prima_tec": "caldera_prima_tec2.png",
  // "diva_tecno_smart": "diva_tecno_smart.JPG",
};

function imgCandidates(base){
  if (IMG_OVERRIDE[base]) return [`img/${IMG_OVERRIDE[base]}`];
  return [
    `img/${base}.png`,
    `img/${base}.jpg`,
    `img/${base}.jpeg`,
    `img/${base}.webp`,
  ];
}

function setSmartImage(imgEl, base){
  const list = imgCandidates(base);
  let i = 0;
  const tryNext = () => {
    if (i >= list.length){ imgEl.src = "img/logo.png"; return; }
    imgEl.src = list[i++];
  };
  imgEl.onerror = tryNext;
  tryNext();
}

/* ================= WhatsApp helper ================= */
function toWhatsapp(message = DEFAULT_WSP_MSG) {
  const text = encodeURIComponent(message);
  const url  = `https://wa.me/${WSP_NUMBER}?text=${text}`;
  window.open(url, "_blank");
}

/* ================= Data de productos ================= */
const data = {
  "calderas-hogar": [
    { img:"caldera_prima_tec", title:"Caldera Prima Tec",
      desc:"Eficiencia 90%. Mantenimiento simple, hidráulica en composite que evita incrustaciones, pantalla digital y medición de flujo: más confort con menor consumo." },
    { img:"diva_tecno_smart", title:"Diva Tecno Smart (doble servicio)",
      desc:"+90% de rendimiento. Incluye termostato WiFi Zentraly, compatible con sonda externa, monitoreo en tiempo real y OTA." },
    { img:"diva_tecno", title:"Diva Tecno (doble servicio)",
      desc:"Intercambiador de placas. Agua para calefacción y sanitario con +90% de rendimiento. Estabilidad de temperatura con flujómetro." },
    { img:"caldera_diva_DS", title:"Caldera Diva DS (doble servicio)",
      desc:"Para todo tipo de vivienda. Eficiencia >90%. Diseño compacto y fácil mantenimiento." },
    { img:"diva_C", title:"Diva C (solo calefacción)",
      desc:"Para radiadores o piso radiante. +90% de eficiencia. 19.800/26.300/32.000 kcal/h (tiro forzado o natural) en GN o GLP." },
    { img:"caldera_CM", title:"Caldera CM (eléctrica)",
      desc:"Instalación/mantenimiento de bajo costo. 99,8% de eficiencia. Bomba de velocidad variable. Lista para doble servicio con tanque." }
  ],
  "calderas-centrales": [
    { img:"optima_condens", title:"Óptima Condens (mural de condensación)",
      desc:"Hasta 103% de rendimiento. Cascada hasta 15 equipos (2250 kW), modulación 1:6, intercambiador eficiente y aislación termoacústica." },
    { img:"caldera_magna", title:"Caldera Magna (alta potencia)",
      desc:"97.600 a 255.200 kcal/h. Se desarma para transporte. Gas o gasoil, tiro natural, apta instalación en batería." },
    { img:"caldera_modal_y_ellprex", title:"Modal / Ellprex",
      desc:"Generadores 93% de rendimiento, 220.000 a 710.000 kcal/h. Acero, gas o gasoil, tiro natural, batería." },
    { img:"caldera_XP", title:"Caldera XP (media potencia)",
      desc:"58.000 a 120.000 kcal/h. Quemador INOX y detector de tiraje. Gas/gasoil, tiro natural, apta batería." }
  ],
  "radiadores": [
    { img:"radiador_broen", title:"Radiador Broen",
      desc:"Frente plano minimalista. Confort y difusión homogénea. 2 a 12 elementos, multivía y válvula termostática opcional." },
    { img:"radiador_broen_plus", title:"Radiador Broen Plus",
      desc:"Varias alturas y combinaciones (2 a 12 elementos). Multivía, alto rendimiento y larga vida útil." },
    { img:"radiador_tropical", title:"Radiador Tropical",
      desc:"Aluminio inyectado, aleteado simple. Confort homogéneo. Compatibilidad con válvula termostática." },
    { img:"radiador_gamma", title:"Radiador Gamma (Alu + acero)",
      desc:"Resistente y apto para calderas de condensación. Hasta 32 bar, bajo mantenimiento." },
    { img:"radiador_L500E", title:"Eléctrico L500E",
      desc:"1000 y 1500 W. Radiación + convección. Termostato programable." }
  ],
  "toalleros": [
    { img:"domino", title:"Domino (agua)",
      desc:"Para circuito de radiadores. Toallas tibias y ambiente calefaccionado. Negro elegante y resistente." },
    { img:"scala", title:"Scala (agua)",
      desc:"Puesta rápida, rendimiento óptimo y gran resistencia (acero anticorrosión)." },
    { img:"scala_S", title:"Scala S (eléctrico)",
      desc:"Instalación simple, buena conductividad y dos potencias." },
    { img:"scala_E", title:"Scala E (eléctrico)",
      desc:"Calor al ambiente y toallas secas. Construcción en acero." },
    { img:"domino_D", title:"Domino D (eléctrico)",
      desc:"Color negro, programación y control de temperatura. Arranque rápido." },
    { img:"domino_S", title:"Domino S (eléctrico blanco)",
      desc:"Diseño minimalista. 80 y 150 cm. Fácil instalación." }
  ]
};

/* ================= Render dinámico ================= */
function createCard({img, title, desc}, categoryKey){
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `
    <div class="card__media">
      <img alt="${title}">
    </div>
    <div class="card__body">
      <h3 class="card__title">${title}</h3>
      <p class="card__desc">${desc}</p>
    </div>
    <div class="card__cta">
      <button class="btn btn--wsp">Cotizar por WhatsApp</button>
    </div>
  `;

  // Carga inteligente de imagen (png -> jpg -> jpeg -> webp -> logo)
  const imgEl = el.querySelector(".card__media img");
  setSmartImage(imgEl, img);

  // CTA dentro de la card
  el.querySelector("button").addEventListener("click", (ev) => {
    ev.stopPropagation();
    toWhatsapp(`Hola! Quiero cotizar: ${title} (${categoryKey.replace("-", " ")}).`);
  });

  // Click en toda la card -> set featured
  el.addEventListener("click", () => {
    setFeatured(categoryKey, {img, title, desc});
    document.getElementById(`feat-${categoryKey}`)?.scrollIntoView({behavior:"smooth", block:"start"});
  });

  return el;
}

function setFeatured(categoryKey, item){
  const feat = document.getElementById(`feat-${categoryKey}`);
  if(!feat) return;
  feat.innerHTML = `
    <div class="featured__media">
      <img id="feat-img-${categoryKey}" alt="${item.title}">
    </div>
    <div class="featured__body">
      <h3 class="featured__title">${item.title}</h3>
      <p class="featured__desc">${item.desc}</p>
      <div style="margin-top:.8rem">
        <button class="btn btn--wsp" id="feat-cta-${categoryKey}">Cotizar por WhatsApp</button>
      </div>
    </div>
  `;

  // Carga inteligente de imagen del destacado
  setSmartImage(document.getElementById(`feat-img-${categoryKey}`), item.img);

  document.getElementById(`feat-cta-${categoryKey}`).addEventListener("click", () => {
    toWhatsapp(`Hola! Me interesa: ${item.title} (${categoryKey.replace("-", " ")}).`);
  });
}

function renderAll(){
  Object.entries(data).forEach(([key, items]) => {
    const list  = document.getElementById(`cards-${key}`);
    const first = items[0];
    if(list && first) setFeatured(key, first);

    const frag = document.createDocumentFragment();
    items.forEach(it => frag.appendChild(createCard(it, key)));
    list && list.appendChild(frag);
  });
}
renderAll();

/* ================= Contacto -> WhatsApp ================= */
document.getElementById("btnWsp")?.addEventListener("click", () => {
  const val = document.getElementById("msg")?.value.trim();
  const msg = val ? `Hola! Me gustaría cotizar / consultar: ${val}` : DEFAULT_WSP_MSG;
  toWhatsapp(msg);
});
