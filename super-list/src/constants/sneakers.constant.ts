import { TSneakers } from "../types/sneakers.type";
import air_max_90 from "../../assets/air_max_90.jpeg";
import ultra from "../../assets/ultra_boost.jpg";
import balance574 from "../../assets/574.webp";
import suede from "../../assets/suede.jpg";
import leather from "../../assets/leather.webp";
import skool from "../../assets/skool.webp";
import chuck from "../../assets/chuck.png";
import kayano from "../../assets/kayano.webp";
import hovr from '../../assets/hovr.webp'
import dlites from '../../assets/dlites.webp'

export const sneakers: TSneakers[] = [
  {
    id: 1,
    photo: air_max_90,
    brand: "Nike",
    model: "Air Max 90",
    price: 150,
  },
  {
    id: 2,
    photo: ultra,
    brand: "Adidas",
    model: "Ultra Boost",
    price: 180,
  },
  {
    id: 3,
    photo: balance574,
    brand: "New Balance",
    model: "574",
    price: 80,
  },
  {
    id: 4,
    photo: suede,
    brand: "Puma",
    model: "Suede Classic",
    price: 70,
  },
  {
    id: 5,
    photo: leather,
    brand: "Reebok",
    model: "Classic Leather",
    price: 90,
  },
  {
    id: 6,
    photo: skool,
    brand: "Vans",
    model: "Old Skool",
    price: 60,
  },
  {
    id: 7,
    photo: chuck,
    brand: "Converse",
    model: "Chuck Taylor All Star",
    price: 55,
  },
  {
    id: 8,
    photo: kayano,
    brand: 'ASICS',
    model: 'Gel-Kayano 27',
    price: 160,
  },
  {
    id: 9,
    photo: hovr,
    brand: "Under Armour",
    model: "UA HOVR Phantom",
    price: 140,
  },
  {
    id: 10,
    photo: dlites,
    brand: "Skechers",
    model: "D'Lites",
    price: 75,
  },
];
