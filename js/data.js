/* =========================
   COCO DESIGN – DATA (Version Finale)
   ========================= */

export const siteInfo = {
  nom: "COCO DESIGN",
  fondateur: "Aziz Kouka Hassane",
  localisation: "Niamey, Niger",
  slogan: "Rendre visibles les choses les mieux cachées",
  description:
    "COCO DESIGN est une galerie et un atelier de création où l’art, le bois, la matière et l’espace dialoguent pour produire des œuvres uniques."
};

/* -------- VISITE GUIDÉE -------- */
export const scenes = [
  {
    id: "hall",
    titre: "Entrée de la galerie",
    panorama: "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00557.mp4",
    narration:
      "Bienvenue dans l’univers de COCO DESIGN. Ici, chaque espace est une invitation à ralentir et à regarder autrement."
  },
  {
    id: "tableaux",
    titre: "Salle des tableaux",
    panorama: "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00561.mp4",
    narration:
      "La peinture est le point de départ. Couleurs, textures et silences se rencontrent pour raconter l’invisible."
  },
  {
    id: "mobilier",
    titre: "Mobilier & aménagement",
    panorama: "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00564.mp4",
    narration:
      "Chez COCO DESIGN, l’art quitte le mur. Le bois devient forme, usage et émotion."
  }
];

/* -------- ŒUVRES -------- */
export const oeuvres = [
  {
    id: 1,
    titre: "Composition abstraite I",
    categorie: "Tableau",
    image: "https://github.com/user-attachments/assets/1770710162400.png",
    description:
      "Exploration libre de la couleur et du mouvement, où chaque couche révèle une intention."
  },
  {
    id: 2,
    titre: "Silence chromatique",
    categorie: "Tableau",
    image: "https://github-production-user-asset-6210df.s3.amazonaws.com/117551294/551454141-a3d997c2-b5fe-485a-99aa-a5ad4774e02a.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260218%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260218T132737Z&X-Amz-Expires=300&X-Amz-Signature=28e915183cf45db7a74e0d71a1e78c2d03e5293d64dd338da547c9a464e9882d&X-Amz-SignedHeaders=host",
    description:
      "Un dialogue intérieur entre matière, lumière et émotion retenue."
  },
  {
    id: 3,
    titre: "Mémoire du geste",
    categorie: "Tableau",
    image: "https://github-production-user-asset-6210df.s3.amazonaws.com/117551294/551454001-42c735de-6a45-42c2-bebb-c8fce2ddbd67.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20260218%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260218T134512Z&X-Amz-Expires=300&X-Amz-Signature=85947c84991fb10eeebec1f98c3849b95b29a5fcb8d07d6e37ed107f3008c3f2&X-Amz-SignedHeaders=host",
    description:
      "Une œuvre marquée par la répétition du geste et la profondeur du temps."
  },
  {
    id: 4,
    titre: "Émotion brute",
    categorie: "Tableau",
    image: "https://github.com/user-attachments/assets/1770874302713.png",
    description:
      "La matière s’exprime sans filtre, un mouvement de couleurs et de textures."
  },
  {
    id: 5,
    titre: "Lignes suspendues",
    categorie: "Tableau",
    image: "https://github.com/user-attachments/assets/1770874647484.png",
    description:
      "Une composition qui joue sur l’espace et la tension des formes."
  }
];

/* -------- MOBILIER -------- */
export const mobilier = [
  {
    id: 1,
    nom: "Fauteuil sculpté",
    materiau: "Bois massif",
    image: "https://github.com/user-attachments/assets/IMG_20260128_185913_188.jpg.jpeg",
    description:
      "Pièce unique, sculptée à la main, pensée pour le confort et la présence."
  },
  {
    id: 2,
    nom: "Table basse organique",
    materiau: "Bois & résine",
    image: "https://github.com/user-attachments/assets/IMG_20260215_111257_596.jpg.jpeg",
    description:
      "Une table qui épouse la forme naturelle du bois, entre stabilité et mouvement."
  }
];

/* -------- POSTERS / AFFICHES -------- */
export const posters = [
  {
    id: 1,
    titre: "Vernissage 2026-02-09-092108",
    image: "https://github.com/user-attachments/assets/poster_2026-02-09-092108.png"
  },
  {
    id: 2,
    titre: "Vernissage 2026-02-09-093429",
    image: "https://github.com/user-attachments/assets/poster_2026-02-09-093429.png"
  },
  {
    id: 3,
    titre: "Vernissage 2026-02-09-093525",
    image: "https://github.com/user-attachments/assets/poster_2026-02-09-093525.png"
  }
];

/* -------- PARTENAIRES -------- */
export const partenaires = [
  {
    nom: "Ambassade Culturelle",
    logo: "https://dummyimage.com/300x150/000/fff&text=Partenaire+1"
  },
  {
    nom: "Fondation Artistique",
    logo: "https://dummyimage.com/300x150/333/fff&text=Partenaire+2"
  },
  {
    nom: "Organisation Créative",
    logo: "https://dummyimage.com/300x150/555/fff&text=Partenaire+3"
  }
];

/* -------- LE SAVIEZ-VOUS -------- */
export const anecdotes = [
  {
    titre: "Visite d’ambassadeurs",
    texte:
      "Des ambassadeurs et hautes personnalités ont visité les locaux de COCO DESIGN, saluant l’originalité et la vision artistique du lieu."
  },
  {
    titre: "Créations sur mesure",
    texte:
      "Chaque pièce de mobilier peut être conçue sur mesure selon l’espace et la sensibilité du client."
  }
];

/* -------- VIDÉOS SUPPLÉMENTAIRES -------- */
export const videos = [
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00557.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00561.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00564.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00574.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00582.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00585.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00589.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00593.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00598.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00615.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00616.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00624.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00627.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00634.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00636.mp4",
  "https://ibrahimtechlab.github.io/coco_cdn/mp4_videos/00639.mp4"
];
