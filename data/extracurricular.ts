export type ExtracurricularActivity = {
  number: string;
  title: string;
  organization: string;
  category: string;
  description: string;
  image: string;
};

export type ExtracurricularGalleryItem = {
  title: string;
  category: string;
  image: string;
};

export const activities: ExtracurricularActivity[] = [
  {
    number: "01",
    title: "SENIOR EDITOR",
    organization: "Arts Club · Faculty of Technology",
    category: "EDITORIAL / DESIGN",
    description:
      "Served as a Senior Editor of the Arts Club, contributing to editorial activities, publication work, creative content and student media initiatives.",
    image: "/extracurricular/arts-club.jpg",
  },
  {
    number: "02",
    title: "EDITOR",
    organization: "Technomedia · Faculty of Technology",
    category: "MEDIA / COMMUNICATION",
    description:
      "Contributed as an Editor to Technomedia through creative content development, visual communication and publication activities.",
    image: "/extracurricular/technomedia.jpeg",
  },
];

export const gallery: ExtracurricularGalleryItem[] = [
 
  {
    title: "Arts Club Committee",
    category: "CLUB ACTIVITIES",
    image: "/extracurricular/arts-club-committee.jpg",
  },
  
  {
    title: "Technomedia Team",
    category: "MEDIA / PUBLICATION",
    image: "/extracurricular/technomedia-team.jpg",
  },

  
  {
    title: "Arts Club Editorial Team",
    category: "EDITORIAL / TEAM",
    image: "/extracurricular/magazine-editors.jpg",
  },
//   {
//     title: "Arts Club Magazine — Creative Writing",
//     category: "PUBLICATION",
//     image: "/extracurricular/magazine-pag3.jpg",
//   },
 
  
//   {
//     title: "Arts Club Magazine — Feature Article",
//     category: "PUBLICATION",
//     image: "/extracurricular/magazine-pag4.jpg",
//   },
//   {
//     title: "Arts Club Magazine — Photography",
//     category: "CREATIVE WORK",
//     image: "/extracurricular/magazine-pag5.jpg",
//   },
//   {
//     title: "Arts Club Magazine — Feature",
//     category: "PUBLICATION",
//     image: "/extracurricular/magazine-pag6.jpg",
//   },
//   {
//     title: "Technomedia Magazine — Film Review",
//     category: "PUBLICATION",
//     image: "/extracurricular/magazin-page.jpg",
//   },

//   {
//     title: "World Ocean Day",
//     category: "SOCIAL MEDIA DESIGN",
//     image: "/extracurricular/ocean-day.png",
//   }

  
];