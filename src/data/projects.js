import img1 from "../assets/image1.webp";
import img2 from "../assets/image2.webp";
import img3 from "../assets/image3.webp";
import img4 from "../assets/image4.webp";
import img5 from "../assets/image5.webp";
import img6 from "../assets/image6.webp";
import img7 from "../assets/image7.webp";

import p1_1 from "../assets/p1_1.webp";
import p1_2 from "../assets/p1_2.webp";
import p1_3 from "../assets/p1_3.webp";
import p1_4 from "../assets/p1_4.webp";
import p1_5 from "../assets/p1_5.webp";

import p2_1 from "../assets/p2_1.webp";
import p2_2 from "../assets/p2_2.webp";
import p2_3 from "../assets/p2_3.webp";
import p2_4 from "../assets/p2_4.webp";
import p2_5 from "../assets/p2_5.webp";

import p3_1 from "../assets/p3_1.webp";
import p3_2 from "../assets/p3_2.webp";
import p3_3 from "../assets/p3_3.webp";
import p3_4 from "../assets/p3_4.webp";
import p3_5 from "../assets/p3_5.webp";
import p3_6 from "../assets/p3_6.webp";

import p4_1 from "../assets/p4_1.webp";
import p4_2 from "../assets/p4_2.webp";
import p4_3 from "../assets/p4_3.webp";
import p4_4 from "../assets/p4_4.webp";
import p4_5 from "../assets/p4_5.webp";

import p5_1 from "../assets/p5_1.webp";
import p5_2 from "../assets/p5_2.webp";
import p5_3 from "../assets/p5_3.webp";
import p5_4 from "../assets/p5_4.webp";
import p5_5 from "../assets/p5_5.webp";
import p5_6 from "../assets/p5_6.webp";
import p5_7 from "../assets/p5_7.webp";

import p6_1 from "../assets/p6_1.webp";
import p6_2 from "../assets/p6_2.webp";
import p6_3 from "../assets/p6_3.webp";
import p6_4 from "../assets/p6_4.webp";
import p6_5 from "../assets/p6_5.webp";
import p6_6 from "../assets/p6_6.webp";

import p7_1 from "../assets/p7_1.webp";
import p7_2 from "../assets/p7_2.webp";
import p7_3 from "../assets/p7_3.webp";
import p7_4 from "../assets/p7_4.webp";
import p7_5 from "../assets/p7_5.webp";
import p7_6 from "../assets/p7_6.webp";
import p7_7 from "../assets/p7_7.webp";

/* ================= PROJECT DATA ================= */

export const projects = [
  {
    id: 1,
    img: img1,
    title: "PR.01",
    name: "Steampunk Concept",
    bg: "#b1b399",
    color: "#edff24fc",

    projectType: "Poster Steampunk design concept",
    involvement: "Art direction / Design",
    date: "-2024",
    tools: ["Figma", "Photoshop", "Midjourney"],

    // thumbnail: img1,

    images: [
      img1, // first full screen image
      p1_1, // extra images below
      p1_2,
      p1_3,
      p1_4,
      p1_5,
    ],
  },
  {
    id: 2,
    img: img2,
    title: "PR.02",
    name: "Bachelor Maxwell",
    bg: "#f3af11",
    color: "#ffffff",

    projectType: "Magazine / story about Maxwell",
    involvement: "Story / Art Design",
    date: "-2024",
    tools: ["Figma", "Photoshop", "Midjourney", "After Effects"],

    images: [
      img2, // first full screen image
      p2_1, // extra images below
      p2_2,
      p2_3,
      p2_4,
      p2_5,
    ],
  },
  {
    id: 3,
    img: img3,
    title: "PR.03",
    name: "Christian Tagliavini",
    bg: "#190e0e",
    color: "#ffffff",

    projectType: "Portfolio site for Christian Tagliavini",
    involvement: "Art Direction / Design & Motion Design",
    date: "-2019",
    tools: ["Photoshop", "After Effects"],

    images: [
      img3, // first full screen image
      p3_1, // extra images below
      p3_2,
      p3_3,
      p3_4,
      p3_5,
      p3_6,
    ],
  },
  {
    id: 4,
    img: img4,
    title: "PR.04",
    name: "Asuka Langley",
    bg: "#81e0a6",
    color: "#000000",

    projectType: "Poster design for Christian Tagliavini",
    involvement: "Art Direction / Design ",
    date: "-2024",
    tools: ["Figma", "Photoshop", "Midjourney"],

    images: [
      img4, // first full screen image
      p4_1, // extra images below
      p4_2,
      p4_3,
      p4_4,
      p4_5,
    ],
  },
  {
    id: 5,
    img: img5,
    title: "PR.05",
    name: "Glow Concept",
    bg: "#0c0c47",
    color: "#090cf0",

    projectType: "Microsite for Matsuda Concept",
    involvement: "Art Direction / Design ",
    date: "-2024",
    tools: ["Figma", "Photoshop", "Midjourney"],

    images: [
      img5, // first full screen image
      p5_1, // extra images below
      p5_2,
      p5_3,
      p5_4,
      p5_5,
      p5_6,
      p5_7,
    ],
  },
  {
    id: 6,
    img: img6,
    title: "PR.06",
    name: "Gemmy Woud",
    bg: "#1e1a1a",
    color: "#dbbbbb",

    projectType: "Photography portfolio for Gemmy Woud",
    involvement: "Art Direction / Design Concept",
    date: "-2019",
    tools: ["Photoshop", "After Effects"],

    images: [
      img6, // first full screen image
      p6_1, // extra images below
      p6_2,
      p6_3,
      p6_4,
      p6_5,
      p6_6,
    ],
  },
  {
    id: 7,
    img: img7,
    title: "PR.07",
    name: "DAN J WILLS",
    bg: "#ffffff",
    color: "#141111",

    projectType: "Photography portfolio for Dan J Wills",
    involvement: "Art Direction / Design",
    date: "-2019",
    tools: ["Photoshop", "After Effects"],

    images: [
      img7, // first full screen image
      p7_1, // extra images below
      p7_2,
      p7_3,
      p7_4,
      p7_5,
      p7_6,
      p7_7,
    ],
  },
];