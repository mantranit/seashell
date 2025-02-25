import { useState } from "react";
import Category from "../components/Category";
import LeftBottomButtons from "../components/LeftBottomButtons";
import RightBottomButtons from "../components/RightBottomButtons";
import { t } from "i18next";

import imgBreakfasts from "../../assets/categories/dining/breakfasts.jpg";
import imgStarters from "../../assets/categories/dining/starters.jpg";
import imgSalads from "../../assets/categories/dining/salads.jpg";
import imgSoups from "../../assets/categories/dining/soups.jpg";
import imgMains from "../../assets/categories/dining/mains.jpg";
import imgDesserts from "../../assets/categories/dining/desserts.jpg";
import imgDrinks from "../../assets/categories/dining/drinks.jpg";
import imgHotDrinks from "../../assets/categories/dining/hot-drinks.jpg";
import imgAlcohol from "../../assets/categories/dining/alcohol.jpg";

function Dining() {
  const [list] = useState([
    {
      category: [],
      title: "Breakfasts",
      subtitle: "07:00-11:00",
      img: imgBreakfasts,
      path: "/dining/breakfasts",
    },
    {
      category: [],
      title: "Starters",
      subtitle: "07:00-23:00",
      img: imgStarters,
      path: "/dining/starters",
    },
    {
      category: [],
      title: "Salads",
      subtitle: "07:00-23:00",
      img: imgSalads,
      path: "/dining/salads",
    },
    {
      category: [],
      title: "Soups",
      subtitle: "10:00-20:00",
      img: imgSoups,
      path: "/dining/soups",
    },
    {
      category: [],
      title: "Mains",
      subtitle: "10:00-23:00",
      img: imgMains,
      path: "/dining/mains",
    },
    {
      category: [],
      title: "Desserts",
      subtitle: "24 hours",
      img: imgDesserts,
      path: "/dining/desserts",
    },
    {
      category: [],
      title: "Drinks",
      subtitle: "24 hours",
      img: imgDrinks,
      path: "/dining/drinks",
    },
    {
      category: [],
      title: "Hot Drinks",
      subtitle: "24 hours",
      img: imgHotDrinks,
      path: "/dining/hot-drinks",
    },
    {
      category: [],
      title: "Alcohol",
      subtitle: "",
      img: imgAlcohol,
      path: "/dining/alcohol",
    },
  ]);
  return (
    <div className="page restaurants-bars-page">
      <Category title={t("menu.Dining")} list={list} />
      <RightBottomButtons />
      <LeftBottomButtons showNavigation={true} />
    </div>
  );
}

export default Dining;
