/* =========================
   COCO DESIGN – MAIN JS
   ========================= */

import { siteInfo } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  console.clear();

  console.log(
    `%c${siteInfo.nom}`,
    "font-size:18px; font-weight:bold; color:#4A2F1B"
  );
  console.log(
    "%cL’art comme espace vivant.",
    "font-size:12px; color:#6F665E"
  );

  initScrollReveal();
});

/* ---------------------------------
   Scroll reveal (sélectif & sûr)
---------------------------------- */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach(el => observer.observe(el));
}

/* ---------------------------------
   Extensions futures possibles :
   - Menu burger animé (GSAP)
   - Transitions pages
   - Audio d’ambiance
---------------------------------- */
