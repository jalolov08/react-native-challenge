import { getRandomTimestamp } from "../utils/getRandomDate";
import messi from "../../assets/messi.png";
import ronaldo from "../../assets/ronaldo.jpg";
import neymar from "../../assets/neymar.webp";
import mbappe from "../../assets/mbappe.webp";
import modric from "../../assets/modric.jpg";
import virgil from "../../assets/virgil.webp";
import ramos from "../../assets/ramos.jpg";
import bruyne from "../../assets/bruyne.webp";
import robert from "../../assets/robert.webp";
import salah from "../../assets/salah.jpg";
import { User } from "../types/user.type";
const users: User[] = [
  {
    id: 1,
    fullName: "Lionel Messi",
    lastMessage: "Where is my ballon dor?",
    photo: messi,
    timestamp: getRandomTimestamp(),
  },
  {
    id: 2,
    fullName: "Cristiano Ronaldo",
    lastMessage: "I scored another hat-trick!",
    photo: ronaldo,
    timestamp: getRandomTimestamp(),
  },
  {
    id: 3,
    fullName: "Neymar Jr.",
    lastMessage: "See you at the next match!",
    photo: neymar,
    timestamp: getRandomTimestamp(),
  },
  {
    id: 4,
    fullName: "Kylian Mbappe",
    lastMessage: "Training hard for the next season.",
    photo: mbappe,
    timestamp: getRandomTimestamp(),
  },
  {
    id: 5,
    fullName: "Luka Modric",
    lastMessage: "Let's discuss strategy tomorrow.",
    photo: modric,
    timestamp: getRandomTimestamp(),
  },
  {
    id: 6,
    fullName: "Virgil van Dijk",
    lastMessage: "Defense wins championships.",
    photo: virgil,
    timestamp: getRandomTimestamp(),
  },
  {
    id: 7,
    fullName: "Sergio Ramos",
    lastMessage: "Always ready for the challenge.",
    photo: ramos,
    timestamp: getRandomTimestamp(),
  },
  {
    id: 8,
    fullName: "Kevin De Bruyne",
    lastMessage: "Assist is just as important as a goal.",
    photo: bruyne,
    timestamp: getRandomTimestamp(),
  },
  {
    id: 9,
    fullName: "Robert Lewandowski",
    lastMessage: "Another day, another goal.",
    photo: robert,
    timestamp: getRandomTimestamp(),
  },
  {
    id: 10,
    fullName: "Mohamed Salah",
    lastMessage: "Ready to make history.",
    photo: salah,
    timestamp: getRandomTimestamp(),
  },
];

export default users;
