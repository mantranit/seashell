import {
  ECategoryItemType,
  EOrderType,
  TCategoryItem,
} from "../components/CategoryList";
import Category from "../components/Category";
import LeftBottomButtons from "../components/LeftBottomButtons";
import RightBottomButtons from "../components/RightBottomButtons";

import imgLounge from "../../assets/categories/bars/lounge.jpg";
import imgLoungeDetails from "../../assets/categories/bars/lounge-details.jpg";
import imgItablian from "../../assets/categories/bars/italian.jpg";
import imgItablianDetails from "../../assets/categories/bars/italian-details.jpg";
import imgLobby from "../../assets/categories/bars/lobby.jpg";
import imgLobbyDetails from "../../assets/categories/bars/lobby-details.jpg";
import imgAsia from "../../assets/categories/bars/asian.jpg";
import imgAsiaDetails from "../../assets/categories/bars/asian-details.jpg";

const responseData: TCategoryItem[] = [
  {
    id: "bars001",
    title: "Lounge Bar",
    time: "",
    img: imgLounge,
    imgDetails: imgLoungeDetails,
    type: ECategoryItemType.category,
    parentId: "bars",
    description:
      "<p>In the extremely comfortable Lounge Bar you can relax and unwind, enjoying a choice of delicious coffees and teas, fruit juices and various drinks and snacks.</p><br/><p><strong>Open:</strong></br/>Daily 10am - 2pm</p>",
  },
  {
    id: "bars002",
    title: "The Italian Cafe",
    time: "",
    img: imgItablian,
    imgDetails: imgItablianDetails,
    type: ECategoryItemType.category,
    parentId: "bars",
    description:
      "<p>We welcome you to visit The Italian cafe. The Italian Cafe is a place to meet, to sit inside or out, somewhat to see and be seen.</p><br/><p><strong>Open:</strong></br/>Daily 9am - 11pm</p>",
  },
  {
    id: "bars003",
    title: "Lobby Bar",
    time: "",
    img: imgLobby,
    imgDetails: imgLobbyDetails,
    type: ECategoryItemType.category,
    parentId: "bars",
    description:
      "<p>The Lobby Bar offers cocktails, delectable bar food and rich selections of whiskeys.</p><br/><p><strong>Open:</strong><br/>24 hours a day</p>",
  },
  {
    id: "bars004",
    title: "Asian Restaurant",
    time: "10:00-23:30",
    img: imgAsia,
    imgDetails: imgAsiaDetails,
    type: ECategoryItemType.category,
    parentId: "bars",
    description:
      "<p>The restaurant was voted Best Asian restaurant and 37th best in the world. Celebrity guests include Steve Jobs and Elon Musk visited the restaurant.</p>",
    orderQuantity: 2,
    orderUnit: "pers",
    orderType: EOrderType.selectTime,
  },
];

function RestaurantsBars() {
  return (
    <div className="page restaurants-bars-page">
      <Category
        responseData={responseData}
        initView={{
          id: "bars",
          path: "/restaurants-bars",
          title: "Restaurants & Bars",
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

export default RestaurantsBars;
