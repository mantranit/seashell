import {
  ECategoryItemType,
  EOrderType,
  TCategoryItem,
} from "../components/CategoryList";
import Category from "../components/Category";
import LeftBottomButtons from "../components/LeftBottomButtons";
import RightBottomButtons from "../components/RightBottomButtons";

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
    id: "dining001",
    category: [],
    title: "Breakfasts",
    time: "07:00-11:00",
    img: imgBreakfasts,
    type: ECategoryItemType.category,
    parentId: "dining",
  },
  {
    id: "dining00101",
    title: "Oatmeal Breakfast",
    time: "07:00-11:00",
    img: imgBreakfastsOatmeal,
    imgDetails: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    description:
      "Our Oatmeal is served warm with your choice of Fried Apples, Pecans, Raisins, Fresh Sliced Bananas or 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 16,
    parentId: "dining001",
    orderQuantity: 1,
    orderUnit: "",
    orderType: EOrderType.chooseOptions,
    orderOptions: [
      {
        name: "Double Size (600g)",
        price: 4,
      },
      {
        name: "Choose Your Topping",
        price: 3,
        select: [
          "None",
          "Fried Apples",
          "Sliced Banana",
          "100% Pure Natural Syrup",
          "Pecan",
        ],
      },
    ],
  },
  {
    id: "dining00102",
    title: "Pecan Pancakes",
    time: "07:00-11:00",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    description:
      "Three Buttermilk Pancakes loaded with pecans and served with real Butter and a warm bottle of 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 8,
    parentId: "dining001",
  },
  {
    id: "dining00103",
    title: "French Toast",
    time: "07:00-11:00",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    description:
      "Four slices of our own Sourdough Bread (regular or whole-wheat) dipped in egg then grilled to perfection. Served with any Fruit Topping or 100% Pure Natural Syrup.",
    tags: ["French Cuisine", "Vegan"],
    price: 11,
    parentId: "dining001",
  },
  {
    id: "dining00104",
    title: "Biscuits n' Gravy with Bacon",
    time: "07:00-11:00",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    description:
      "Three buttermilk biscuits with sawmill gravy and thick-sliced bacon.",
    tags: ["French Cuisine"],
    price: 16,
    parentId: "dining001",
  },
  {
    id: "dining002",
    category: [],
    title: "Starters",
    time: "07:00-23:00",
    img: imgStarters,
    type: ECategoryItemType.category,
    parentId: "dining",
  },
  {
    id: "dining00201",
    title: "Oatmeal Breakfast",
    time: "07:00-11:00",
    img: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    description:
      "Our Oatmeal is served warm with your choice of Fried Apples, Pecans, Raisins, Fresh Sliced Bananas or 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 16,
    parentId: "dining002",
  },
  {
    id: "dining00202",
    title: "Pecan Pancakes",
    time: "07:00-11:00",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    description:
      "Three Buttermilk Pancakes loaded with pecans and served with real Butter and a warm bottle of 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 8,
    parentId: "dining002",
  },
  {
    id: "dining00203",
    title: "French Toast",
    time: "07:00-11:00",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    description:
      "Four slices of our own Sourdough Bread (regular or whole-wheat) dipped in egg then grilled to perfection. Served with any Fruit Topping or 100% Pure Natural Syrup.",
    tags: ["French Cuisine", "Vegan"],
    price: 11,
    parentId: "dining002",
  },
  {
    id: "dining00204",
    title: "Biscuits n' Gravy with Bacon",
    time: "07:00-11:00",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    description:
      "Three buttermilk biscuits with sawmill gravy and thick-sliced bacon.",
    tags: ["French Cuisine"],
    price: 16,
    parentId: "dining002",
  },
  {
    id: "dining003",
    category: [],
    title: "Salads",
    time: "07:00-23:00",
    img: imgSalads,
    type: ECategoryItemType.category,
    parentId: "dining",
  },
  {
    id: "dining00301",
    title: "Oatmeal Breakfast",
    time: "07:00-11:00",
    img: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    description:
      "Our Oatmeal is served warm with your choice of Fried Apples, Pecans, Raisins, Fresh Sliced Bananas or 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 16,
    parentId: "dining003",
  },
  {
    id: "dining00302",
    title: "Pecan Pancakes",
    time: "07:00-11:00",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    description:
      "Three Buttermilk Pancakes loaded with pecans and served with real Butter and a warm bottle of 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 8,
    parentId: "dining003",
  },
  {
    id: "dining00303",
    title: "French Toast",
    time: "07:00-11:00",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    description:
      "Four slices of our own Sourdough Bread (regular or whole-wheat) dipped in egg then grilled to perfection. Served with any Fruit Topping or 100% Pure Natural Syrup.",
    tags: ["French Cuisine", "Vegan"],
    price: 11,
    parentId: "dining003",
  },
  {
    id: "dining00304",
    title: "Biscuits n' Gravy with Bacon",
    time: "07:00-11:00",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    description:
      "Three buttermilk biscuits with sawmill gravy and thick-sliced bacon.",
    tags: ["French Cuisine"],
    price: 16,
    parentId: "dining003",
  },
  {
    id: "dining004",
    category: [],
    title: "Soups",
    time: "10:00-20:00",
    img: imgSoups,
    type: ECategoryItemType.category,
    parentId: "dining",
  },
  {
    id: "dining00401",
    title: "Oatmeal Breakfast",
    time: "07:00-11:00",
    img: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    description:
      "Our Oatmeal is served warm with your choice of Fried Apples, Pecans, Raisins, Fresh Sliced Bananas or 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 16,
    parentId: "dining004",
  },
  {
    id: "dining00402",
    title: "Pecan Pancakes",
    time: "07:00-11:00",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    description:
      "Three Buttermilk Pancakes loaded with pecans and served with real Butter and a warm bottle of 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 8,
    parentId: "dining004",
  },
  {
    id: "dining00403",
    title: "French Toast",
    time: "07:00-11:00",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    description:
      "Four slices of our own Sourdough Bread (regular or whole-wheat) dipped in egg then grilled to perfection. Served with any Fruit Topping or 100% Pure Natural Syrup.",
    tags: ["French Cuisine", "Vegan"],
    price: 11,
    parentId: "dining004",
  },
  {
    id: "dining00404",
    title: "Biscuits n' Gravy with Bacon",
    time: "07:00-11:00",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    description:
      "Three buttermilk biscuits with sawmill gravy and thick-sliced bacon.",
    tags: ["French Cuisine"],
    price: 16,
    parentId: "dining004",
  },
  {
    id: "dining005",
    category: [],
    title: "Mains",
    time: "10:00-23:00",
    img: imgMains,
    type: ECategoryItemType.category,
    parentId: "dining",
  },
  {
    id: "dining00501",
    title: "Oatmeal Breakfast",
    time: "07:00-11:00",
    img: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    description:
      "Our Oatmeal is served warm with your choice of Fried Apples, Pecans, Raisins, Fresh Sliced Bananas or 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 16,
    parentId: "dining005",
  },
  {
    id: "dining00502",
    title: "Pecan Pancakes",
    time: "07:00-11:00",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    description:
      "Three Buttermilk Pancakes loaded with pecans and served with real Butter and a warm bottle of 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 8,
    parentId: "dining005",
  },
  {
    id: "dining00503",
    title: "French Toast",
    time: "07:00-11:00",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    description:
      "Four slices of our own Sourdough Bread (regular or whole-wheat) dipped in egg then grilled to perfection. Served with any Fruit Topping or 100% Pure Natural Syrup.",
    tags: ["French Cuisine", "Vegan"],
    price: 11,
    parentId: "dining005",
  },
  {
    id: "dining00504",
    title: "Biscuits n' Gravy with Bacon",
    time: "07:00-11:00",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    description:
      "Three buttermilk biscuits with sawmill gravy and thick-sliced bacon.",
    tags: ["French Cuisine"],
    price: 16,
    parentId: "dining005",
  },
  {
    id: "dining006",
    category: [],
    title: "Desserts",
    time: "24 hours",
    img: imgDesserts,
    type: ECategoryItemType.category,
    parentId: "dining",
  },
  {
    id: "dining00601",
    title: "Oatmeal Breakfast",
    time: "07:00-11:00",
    img: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    description:
      "Our Oatmeal is served warm with your choice of Fried Apples, Pecans, Raisins, Fresh Sliced Bananas or 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 16,
    parentId: "dining006",
  },
  {
    id: "dining00602",
    title: "Pecan Pancakes",
    time: "07:00-11:00",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    description:
      "Three Buttermilk Pancakes loaded with pecans and served with real Butter and a warm bottle of 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 8,
    parentId: "dining006",
  },
  {
    id: "dining00603",
    title: "French Toast",
    time: "07:00-11:00",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    description:
      "Four slices of our own Sourdough Bread (regular or whole-wheat) dipped in egg then grilled to perfection. Served with any Fruit Topping or 100% Pure Natural Syrup.",
    tags: ["French Cuisine", "Vegan"],
    price: 11,
    parentId: "dining006",
  },
  {
    id: "dining00604",
    title: "Biscuits n' Gravy with Bacon",
    time: "07:00-11:00",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    description:
      "Three buttermilk biscuits with sawmill gravy and thick-sliced bacon.",
    tags: ["French Cuisine"],
    price: 16,
    parentId: "dining006",
  },
  {
    id: "dining009",
    category: [],
    title: "Drinks",
    time: "24 hours",
    img: imgDrinks,
    type: ECategoryItemType.category,
    parentId: "dining",
  },
  {
    id: "dining00901",
    title: "Oatmeal Breakfast",
    time: "07:00-11:00",
    img: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    description:
      "Our Oatmeal is served warm with your choice of Fried Apples, Pecans, Raisins, Fresh Sliced Bananas or 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 16,
    parentId: "dining009",
  },
  {
    id: "dining00902",
    title: "Pecan Pancakes",
    time: "07:00-11:00",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    description:
      "Three Buttermilk Pancakes loaded with pecans and served with real Butter and a warm bottle of 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 8,
    parentId: "dining009",
  },
  {
    id: "dining00903",
    title: "French Toast",
    time: "07:00-11:00",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    description:
      "Four slices of our own Sourdough Bread (regular or whole-wheat) dipped in egg then grilled to perfection. Served with any Fruit Topping or 100% Pure Natural Syrup.",
    tags: ["French Cuisine", "Vegan"],
    price: 11,
    parentId: "dining009",
  },
  {
    id: "dining00904",
    title: "Biscuits n' Gravy with Bacon",
    time: "07:00-11:00",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    description:
      "Three buttermilk biscuits with sawmill gravy and thick-sliced bacon.",
    tags: ["French Cuisine"],
    price: 16,
    parentId: "dining009",
  },
  {
    id: "dining007",
    category: [],
    title: "Hot Drinks",
    time: "24 hours",
    img: imgHotDrinks,
    type: ECategoryItemType.category,
    parentId: "dining",
  },
  {
    id: "dining00701",
    title: "Oatmeal Breakfast",
    time: "07:00-11:00",
    img: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    description:
      "Our Oatmeal is served warm with your choice of Fried Apples, Pecans, Raisins, Fresh Sliced Bananas or 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 16,
    parentId: "dining007",
  },
  {
    id: "dining00702",
    title: "Pecan Pancakes",
    time: "07:00-11:00",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    description:
      "Three Buttermilk Pancakes loaded with pecans and served with real Butter and a warm bottle of 100% Pure Natural Syrup.",
    tags: ["Vegan"],
    price: 8,
    parentId: "dining007",
  },
  {
    id: "dining00703",
    title: "French Toast",
    time: "07:00-11:00",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    description:
      "Four slices of our own Sourdough Bread (regular or whole-wheat) dipped in egg then grilled to perfection. Served with any Fruit Topping or 100% Pure Natural Syrup.",
    tags: ["French Cuisine", "Vegan"],
    price: 11,
    parentId: "dining007",
  },
  {
    id: "dining00704",
    title: "Biscuits n' Gravy with Bacon",
    time: "07:00-11:00",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    description:
      "Three buttermilk biscuits with sawmill gravy and thick-sliced bacon.",
    tags: ["French Cuisine"],
    price: 16,
    parentId: "dining007",
  },
  {
    id: "dining008",
    category: [],
    title: "Alcohol",
    time: "",
    img: imgAlcohol,
    type: ECategoryItemType.category,
    parentId: "dining",
  },
  {
    id: "dining00801",
    title: "Cocktails",
    time: "24 hours",
    img: imgAlcoholCocktails,
    type: ECategoryItemType.category,
    parentId: "dining008",
  },
  {
    id: "dining0080101",
    title: "Oatmeal Breakfast",
    time: "24 hours",
    img: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    parentId: "dining00801",
  },
  {
    id: "dining0080102",
    title: "Pecan Pancakes",
    time: "24 hours",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    parentId: "dining00801",
  },
  {
    id: "dining0080103",
    title: "French Toast",
    time: "24 hours",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    parentId: "dining00801",
  },
  {
    id: "dining0080104",
    title: "Biscuits n' Gravy with Bacon",
    time: "24 hours",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    parentId: "dining00801",
  },
  {
    id: "dining00802",
    title: "Beer",
    time: "24 hours",
    img: imgAlcoholBeer,
    type: ECategoryItemType.category,
    parentId: "dining008",
  },
  {
    id: "dining0080201",
    title: "Oatmeal Breakfast",
    time: "24 hours",
    img: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    parentId: "dining00802",
  },
  {
    id: "dining0080202",
    title: "Pecan Pancakes",
    time: "24 hours",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    parentId: "dining00802",
  },
  {
    id: "dining0080203",
    title: "French Toast",
    time: "24 hours",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    parentId: "dining00802",
  },
  {
    id: "dining0080204",
    title: "Biscuits n' Gravy with Bacon",
    time: "24 hours",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    parentId: "dining00802",
  },
  {
    id: "dining00803",
    title: "Wine",
    time: "24 hours",
    img: imgAlcoholWine,
    type: ECategoryItemType.category,
    parentId: "dining008",
  },
  {
    id: "dining0080301",
    title: "Oatmeal Breakfast",
    time: "24 hours",
    img: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    parentId: "dining00803",
  },
  {
    id: "dining0080302",
    title: "Pecan Pancakes",
    time: "24 hours",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    parentId: "dining00803",
  },
  {
    id: "dining0080303",
    title: "French Toast",
    time: "24 hours",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    parentId: "dining00803",
  },
  {
    id: "dining0080304",
    title: "Biscuits n' Gravy with Bacon",
    time: "24 hours",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    parentId: "dining00803",
  },
  {
    id: "dining00804",
    title: "Whiskey",
    time: "24 hours",
    img: imgAlcoholWhiskey,
    type: ECategoryItemType.category,
    parentId: "dining008",
  },
  {
    id: "dining0080401",
    title: "Oatmeal Breakfast",
    time: "24 hours",
    img: imgBreakfastsOatmeal,
    type: ECategoryItemType.subcategory,
    parentId: "dining00804",
  },
  {
    id: "dining0080402",
    title: "Pecan Pancakes",
    time: "24 hours",
    img: imgBreakfastsPecan,
    type: ECategoryItemType.subcategory,
    parentId: "dining00804",
  },
  {
    id: "dining0080403",
    title: "French Toast",
    time: "24 hours",
    img: imgBreakfastsFrench,
    type: ECategoryItemType.subcategory,
    parentId: "dining00804",
  },
  {
    id: "dining0080404",
    title: "Biscuits n' Gravy with Bacon",
    time: "24 hours",
    img: imgBreakfastsBiscuits,
    type: ECategoryItemType.subcategory,
    parentId: "dining00804",
  },
];

function Dining() {
  return (
    <div className="page restaurants-bars-page">
      <Category
        responseData={responseData}
        initView={{
          id: "dining",
          title: "Dining",
          parentId: null,
          startCursorX: 0,
          startCursorY: 0,
        }}
      />
      <LeftBottomButtons showNavigation={true} />
      <RightBottomButtons />
    </div>
  );
}

export default Dining;
