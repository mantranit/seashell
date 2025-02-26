import { useState } from "react";
import Category, {
  ECategoryItemType,
  TCategoryItem,
} from "../components/Category";
import LeftBottomButtons from "../components/LeftBottomButtons";
import RightBottomButtons from "../components/RightBottomButtons";
import { useNavigate } from "react-router";

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

const responseData: TCategoryItem[] = [
  {
    category: [],
    title: "Breakfasts",
    subtitle: "07:00-11:00",
    img: imgBreakfasts,
    path: "/dining/breakfasts",
    type: ECategoryItemType.category,
    children: [
      {
        title: "Oatmeal Breakfast",
        subtitle: "",
        img: imgBreakfastsOatmeal,
        path: "/dining/breakfasts/oatmeal-breakfast",
        type: ECategoryItemType.subcategory,
        tags: ["Vegan"],
        price: 16,
      },
      {
        title: "Pecan Pancakes",
        subtitle: "",
        img: imgBreakfastsPecan,
        path: "/dining/breakfasts/pecan-pancakes",
        type: ECategoryItemType.subcategory,
        tags: ["Vegan"],
        price: 8,
      },
      {
        title: "French Toast",
        subtitle: "",
        img: imgBreakfastsFrench,
        path: "/dining/breakfasts/french-toast",
        type: ECategoryItemType.subcategory,
        tags: ["French Cuisine", "Vegan"],
        price: 11,
      },
      {
        title: "Biscuits n' Gravy with Bacon",
        subtitle: "",
        img: imgBreakfastsBiscuits,
        path: "/dining/breakfasts/biscuits-with-bacon",
        type: ECategoryItemType.subcategory,
        tags: ["French Cuisine"],
        price: 16,
      },
    ],
  },
  {
    category: [],
    title: "Starters",
    subtitle: "07:00-23:00",
    img: imgStarters,
    path: "/dining/starters",
    type: ECategoryItemType.category,
  },
  {
    category: [],
    title: "Salads",
    subtitle: "07:00-23:00",
    img: imgSalads,
    path: "/dining/salads",
    type: ECategoryItemType.category,
  },
  {
    category: [],
    title: "Soups",
    subtitle: "10:00-20:00",
    img: imgSoups,
    path: "/dining/soups",
    type: ECategoryItemType.category,
  },
  {
    category: [],
    title: "Mains",
    subtitle: "10:00-23:00",
    img: imgMains,
    path: "/dining/mains",
    type: ECategoryItemType.category,
  },
  {
    category: [],
    title: "Desserts",
    subtitle: "24 hours",
    img: imgDesserts,
    path: "/dining/desserts",
    type: ECategoryItemType.category,
  },
  {
    category: [],
    title: "Drinks",
    subtitle: "24 hours",
    img: imgDrinks,
    path: "/dining/drinks",
    type: ECategoryItemType.category,
  },
  {
    category: [],
    title: "Hot Drinks",
    subtitle: "24 hours",
    img: imgHotDrinks,
    path: "/dining/hot-drinks",
    type: ECategoryItemType.category,
  },
  {
    category: [],
    title: "Alcohol",
    subtitle: "",
    img: imgAlcohol,
    path: "/dining/alcohol",
    type: ECategoryItemType.category,
    children: [
      {
        title: "Cocktails",
        subtitle: "24 hours",
        img: imgAlcoholCocktails,
        path: "/dining/alcohol/cocktails",
        type: ECategoryItemType.category,
        children: [
          {
            title: "Oatmeal Breakfast",
            subtitle: "",
            img: imgBreakfastsOatmeal,
            path: "/dining/alcohol/cocktails/oatmeal-breakfast",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "Pecan Pancakes",
            subtitle: "",
            img: imgBreakfastsPecan,
            path: "/dining/alcohol/cocktails/pecan-pancakes",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "French Toast",
            subtitle: "",
            img: imgBreakfastsFrench,
            path: "/dining/alcohol/cocktails/french-toast",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "Biscuits n' Gravy with Bacon",
            subtitle: "",
            img: imgBreakfastsBiscuits,
            path: "/dining/alcohol/cocktails/biscuits-with-bacon",
            type: ECategoryItemType.subcategory,
          },
        ],
      },
      {
        title: "Beer",
        subtitle: "24 hours",
        img: imgAlcoholBeer,
        path: "/dining/alcohol/beer",
        type: ECategoryItemType.category,
        children: [
          {
            title: "Oatmeal Breakfast",
            subtitle: "",
            img: imgBreakfastsOatmeal,
            path: "/dining/alcohol/beer/oatmeal-breakfast",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "Pecan Pancakes",
            subtitle: "",
            img: imgBreakfastsPecan,
            path: "/dining/alcohol/beer/pecan-pancakes",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "French Toast",
            subtitle: "",
            img: imgBreakfastsFrench,
            path: "/dining/alcohol/beer/french-toast",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "Biscuits n' Gravy with Bacon",
            subtitle: "",
            img: imgBreakfastsBiscuits,
            path: "/dining/alcohol/beer/biscuits-with-bacon",
            type: ECategoryItemType.subcategory,
          },
        ],
      },
      {
        title: "Wine",
        subtitle: "24 hours",
        img: imgAlcoholWine,
        path: "/dining/alcohol/wine",
        type: ECategoryItemType.category,
        children: [
          {
            title: "Oatmeal Breakfast",
            subtitle: "",
            img: imgBreakfastsOatmeal,
            path: "/dining/alcohol/wine/oatmeal-breakfast",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "Pecan Pancakes",
            subtitle: "",
            img: imgBreakfastsPecan,
            path: "/dining/alcohol/wine/pecan-pancakes",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "French Toast",
            subtitle: "",
            img: imgBreakfastsFrench,
            path: "/dining/alcohol/wine/french-toast",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "Biscuits n' Gravy with Bacon",
            subtitle: "",
            img: imgBreakfastsBiscuits,
            path: "/dining/alcohol/wine/biscuits-with-bacon",
            type: ECategoryItemType.subcategory,
          },
        ],
      },
      {
        title: "Whiskey",
        subtitle: "24 hours",
        img: imgAlcoholWhiskey,
        path: "/dining/alcohol/whiskey",
        type: ECategoryItemType.category,
        children: [
          {
            title: "Oatmeal Breakfast",
            subtitle: "",
            img: imgBreakfastsOatmeal,
            path: "/dining/alcohol/whiskey/oatmeal-breakfast",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "Pecan Pancakes",
            subtitle: "",
            img: imgBreakfastsPecan,
            path: "/dining/alcohol/whiskey/pecan-pancakes",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "French Toast",
            subtitle: "",
            img: imgBreakfastsFrench,
            path: "/dining/alcohol/whiskey/french-toast",
            type: ECategoryItemType.subcategory,
          },
          {
            title: "Biscuits n' Gravy with Bacon",
            subtitle: "",
            img: imgBreakfastsBiscuits,
            path: "/dining/alcohol/whiskey/biscuits-with-bacon",
            type: ECategoryItemType.subcategory,
          },
        ],
      },
    ],
  },
];

function Dining() {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      list: responseData,
      title: "Dining",
      startCursorX: 0,
      startCursorY: 0,
    },
  ]);

  const goNext = (nextData: any) => {
    const { title, cursorX, cursorY } = nextData;
    setData((currentData) => {
      currentData[currentData.length - 1].startCursorX = cursorX;
      currentData[currentData.length - 1].startCursorY = cursorY;
      const nextList = currentData[currentData.length - 1].list.find(
        (item) => item.title === title
      );
      if (nextList && nextList.children) {
        return [
          ...currentData,
          {
            list: nextList.children || [],
            title: nextList.title,
            startCursorX: 0,
            startCursorY: 0,
          },
        ];
      }
      return currentData;
    });
  };

  const goBack = () => {
    setData((currentData) => {
      if (currentData.length > 1) {
        currentData.pop();
      } else {
        navigate(-1);
      }
      return [...currentData];
    });
  };

  return (
    <div className="page restaurants-bars-page">
      <Category
        key={data[data.length - 1].title}
        data={data[data.length - 1]}
        goNext={goNext}
        goBack={goBack}
      />
      <LeftBottomButtons showNavigation={true} />
      <RightBottomButtons />
    </div>
  );
}

export default Dining;
