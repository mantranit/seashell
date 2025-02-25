import { useEffect, useState } from "react";
import Category from "../components/Category";
import LeftBottomButtons from "../components/LeftBottomButtons";
import RightBottomButtons from "../components/RightBottomButtons";
import { t } from "i18next";

import imgBreakfasts from "../../assets/categories/dining/breakfasts.jpg";
import imgBreakfastsOatmeal from "../../assets/categories/dining/oatmeal-breakfast.jpg";
import imgBreakfastsPecan from "../../assets/categories/dining/pecan-pancakes.jpg";
import imgBreakfastsFrench from "../../assets/categories/dining/french-toast.jpg";
import imgBreakfastsBiscuits from "../../assets/categories/dining/biscuits-with-bacon.jpg";
import imgStarters from "../../assets/categories/dining/starters.jpg";
import imgSalads from "../../assets/categories/dining/salads.jpg";
import imgSoups from "../../assets/categories/dining/soups.jpg";
import imgMains from "../../assets/categories/dining/mains.jpg";
import imgDesserts from "../../assets/categories/dining/desserts.jpg";
import imgDrinks from "../../assets/categories/dining/drinks.jpg";
import imgHotDrinks from "../../assets/categories/dining/hot-drinks.jpg";
import imgAlcohol from "../../assets/categories/dining/alcohol.jpg";
import imgAlcoholCocktails from "../../assets/categories/dining/alcohol-cocktails.jpg";
import imgAlcoholBeer from "../../assets/categories/dining/alcohol-beer.jpg";
import imgAlcoholWine from "../../assets/categories/dining/alcohol-wine.jpg";
import imgAlcoholWhiskey from "../../assets/categories/dining/alcohol-whiskey.jpg";
import SubCategory from "../components/SubCategory";
import { useLocation } from "react-router";

const data = [
  {
    category: [],
    title: "Breakfasts",
    subtitle: "07:00-11:00",
    img: imgBreakfasts,
    path: "/dining/breakfasts",
    childrenType: "sub-category",
    children: [
      {
        title: "Oatmeal Breakfast",
        subtitle: "",
        img: imgBreakfastsOatmeal,
        path: "/dining/breakfasts/oatmeal-breakfast",
        type: "details",
      },
      {
        title: "Pecan Pancakes",
        subtitle: "",
        img: imgBreakfastsPecan,
        path: "/dining/breakfasts/pecan-pancakes",
        type: "details",
      },
      {
        title: "French Toast",
        subtitle: "",
        img: imgBreakfastsFrench,
        path: "/dining/breakfasts/french-toast",
        type: "details",
      },
      {
        title: "Biscuits n' Gravy with Bacon",
        subtitle: "",
        img: imgBreakfastsBiscuits,
        path: "/dining/breakfasts/biscuits-with-bacon",
        type: "details",
      },
    ],
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
    childrenType: "category",
    children: [
      {
        title: "Cocktails",
        subtitle: "24 hours",
        img: imgAlcoholCocktails,
        path: "/dining/alcohol/cocktails",
        type: "details",
      },
      {
        title: "Beer",
        subtitle: "24 hours",
        img: imgAlcoholBeer,
        path: "/dining/alcohol/beer",
        type: "details",
      },
      {
        title: "Wine",
        subtitle: "24 hours",
        img: imgAlcoholWine,
        path: "/dining/alcohol/wine",
        type: "details",
      },
      {
        title: "Whiskey",
        subtitle: "24 hours",
        img: imgAlcoholWhiskey,
        path: "/dining/alcohol/whiskey",
        type: "details",
      },
    ],
  },
];

function Dining() {
  const { pathname } = useLocation();
  const [type, setType] = useState("category");
  const [title, setTitle] = useState("Dining");
  const [list, setList] = useState(data);
  console.log("location", location);

  useEffect(() => {
    const flatData = data.flat(Infinity);
    const currentItem = flatData.find((item) => item.path === pathname);
    console.log("currentItem", currentItem);
    if (currentItem) {
      setTitle(currentItem.title);
      setList(currentItem.children || data);
      setType(currentItem?.childrenType || currentItem?.type || "category");
    }
  }, [pathname]);

  return (
    <div className="page restaurants-bars-page">
      {type === "category" && (
        <Category key={title} title={t(`${title}`)} list={list} />
      )}
      {type === "sub-category" && (
        <SubCategory key={title} title={t(`${title}`)} list={list} />
      )}
      <RightBottomButtons />
      <LeftBottomButtons showNavigation={true} />
    </div>
  );
}

export default Dining;
