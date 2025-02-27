import { ECategoryItemType, TCategoryItem } from "../components/CategoryList";
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
    parentId: null,
  },
  {
    id: "bars002",
    title: "The Italian Cafe",
    time: "",
    img: imgItablian,
    imgDetails: imgItablianDetails,
    type: ECategoryItemType.category,
    parentId: null,
  },
  {
    id: "bars003",
    title: "Lobby Bar",
    time: "",
    img: imgLobby,
    imgDetails: imgLobbyDetails,
    type: ECategoryItemType.category,
    parentId: null,
  },
  {
    id: "bars004",
    title: "Asian Restaurant",
    time: "10:00-23:30",
    img: imgAsia,
    imgDetails: imgAsiaDetails,
    type: ECategoryItemType.category,
    parentId: null,
  },
];

function RestaurantsBars() {
  return (
    <div className="page restaurants-bars-page">
      <Category
        responseData={responseData}
        initView={{
          id: "bars",
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
