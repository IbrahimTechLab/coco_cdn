/* =========================
   COCO DESIGN – VISITE VIDEO IMMERSIVE
   ========================= */

import { scenes } from "./data.js";

const video = document.getElementById("videoPlayer");
const buttonsContainer = document.getElementById("sceneButtons");
const titleElement = document.getElementById("sceneTitle");
const muteBtn = document.getElementById("muteBtn");

let currentSceneIndex = 0;
let isMuted = true;


/* =========================
   CREATE NAV BUTTONS
   ========================= */

scenes.forEach((scene, index) => {

  const btn = document.createElement("button");

  btn.textContent = scene.titre;

  if(index === 0)
    btn.classList.add("active");

  btn.onclick = () => {

    loadScene(index);

  };

  buttonsContainer.appendChild(btn);

});


/* =========================
   LOAD SCENE
   ========================= */

function loadScene(index){

  const scene = scenes[index];

  currentSceneIndex = index;

  video.src = scene.panorama;

  video.play();

  titleElement.textContent = scene.titre;


  // Update active button
  document.querySelectorAll(".visite-navigation button")
    .forEach((btn, i)=>{

      btn.classList.toggle("active", i === index);

    });

}


/* =========================
   AUTO NEXT
   ========================= */

video.onended = () => {

  let next = currentSceneIndex + 1;

  if(next >= scenes.length)
    next = 0;

  loadScene(next);

};


/* =========================
   SOUND TOGGLE
   ========================= */

muteBtn.onclick = () => {

  isMuted = !isMuted;

  video.muted = isMuted;

  muteBtn.textContent = isMuted
    ? "🔇 Muet"
    : "🔊 Son";

};


/* =========================
   KEYBOARD CONTROL
   ========================= */

document.onkeydown = (e)=>{

  if(e.key === "ArrowRight"){

    let next = (currentSceneIndex+1) % scenes.length;
    loadScene(next);

  }

  if(e.key === "ArrowLeft"){

    let prev = currentSceneIndex-1;

    if(prev < 0)
      prev = scenes.length-1;

    loadScene(prev);

  }

};


/* =========================
   INIT
   ========================= */

loadScene(0);
