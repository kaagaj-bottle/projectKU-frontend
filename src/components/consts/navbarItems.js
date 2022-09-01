import advisor from "../../images/punyaKoirala.jpg";
const navbarItems = [
  {
    id: 0,
    label: "Home",
    route: "/",
  },
  {
    id: 1,
    label: "About",
    route: "/about",
  },
  {
    id: 2,
    label: "Notices",
    route: "/notices",
  },
  {
    id: 3,
    label: "Gallery",
    route: "/gallery",
  },
  {
    id: 4,
    label: "Contact us",
    route: "/contact",
  },
  {
    id: 5,
    label: "Admin",
    route: "/admin",
  },
];

export const clubName = "KU INDOORS";
export const clubLogoLink = (
  <iframe
    src="https://drive.google.com/file/d/1agSQeC2MS4J_2LvP8ncU-T-ihsAeI0Pe/preview"
    width="640"
    height="480"
    allow="autoplay"
  ></iframe>
);
export const bgColour = "cyan";
export const drawerColor = "crimson";

export const cardInfo = {
  cardTitles: ["From Advisor", "From President", "From Secretary", "From Club"],
  imageLinks: [
    advisor,
    "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
  ],
  additionalTexts: [
    "addtional text",
    "additional text",
    "additional text",
    "additional text",
  ],
  cardText: [
    "This club is for the innovation of literature and indoor",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, explicabo?",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, explicabo?",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, explicabo?",
  ],
};

export const minHeight = "93vh";
export const cardColour = "#1ab3b3";
export default navbarItems;
