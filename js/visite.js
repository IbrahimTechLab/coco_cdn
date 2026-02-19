/* =========================
   COCO DESIGN – VISITE JS
   ========================= */

import { scenes } from "./data.js";

const panoElement = document.getElementById("pano");

// Viewer Marzipano
const viewer = new Marzipano.Viewer(panoElement, {
  controls: {
    mouseViewMode: "drag"
  }
});

// Stockage des scènes
const marzipanoScenes = {};

// Création des scènes
scenes.forEach(sceneData => {
  const source = Marzipano.ImageUrlSource.fromString(
    sceneData.panorama
  );

  const geometry = new Marzipano.EquirectGeometry([{ width: 4000 }]);

  const limiter = Marzipano.RectilinearView.limit.traditional(
    1024,
    (120 * Math.PI) / 180
  );

  const view = new Marzipano.RectilinearView(null, limiter);

  const scene = viewer.createScene({
    source,
    geometry,
    view,
    pinFirstLevel: true
  });

  marzipanoScenes[sceneData.id] = scene;
});

// Démarrer sur la première scène
if (scenes.length > 0) {
  marzipanoScenes[scenes[0].id].switchTo();
}

// Fonction de navigation (future UI)
window.goToScene = function (sceneId) {
  if (marzipanoScenes[sceneId]) {
    marzipanoScenes[sceneId].switchTo();
  }
};
