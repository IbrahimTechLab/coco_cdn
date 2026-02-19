/* =========================
   COCO DESIGN – HOTSPOTS
   ========================= */

import { oeuvres } from "./data.js";

export function createHotspots(scene) {
  const container = scene.hotspotContainer();

  oeuvres.forEach(oeuvre => {
    const hotspot = document.createElement("div");
    hotspot.classList.add("hotspot");

    hotspot.addEventListener("click", () => {
      showInfo(oeuvre);
    });

    container.createHotspot(hotspot, {
      yaw: Math.random() * Math.PI * 2 - Math.PI,
      pitch: Math.random() * 0.4 - 0.2
    });
  });
}

function showInfo(oeuvre) {
  let popup = document.querySelector(".info-popup");

  if (!popup) {
    popup = document.createElement("div");
    popup.className = "info-popup";
    document.body.appendChild(popup);
  }

  popup.innerHTML = `
    <h3>${oeuvre.titre}</h3>
    <p>${oeuvre.description}</p>
  `;

  popup.style.display = "block";
}
