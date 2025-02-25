import { useState } from "react";
import LeftBottomButtons from "../components/LeftBottomButtons";
import Category from "../components/Category";
import RightBottomButtons from "../components/RightBottomButtons";
import { t } from "i18next";

import imgLounge from "../../assets/categories/bars/lounge.jpg";
import imgItablian from "../../assets/categories/bars/italian.jpg";
import imgLobby from "../../assets/categories/bars/lobby.jpg";
import imgAsia from "../../assets/categories/bars/asian.jpg";

function RestaurantsBars() {
  const [list] = useState([
    {
      title: "Lounge Bar",
      subtitle: "",
      img: imgLounge,
      path: "/restaurants-bars/lounge-bar",
    },
    {
      title: "The Italian Cafe",
      subtitle: "",
      img: imgItablian,
      path: "/restaurants-bars/the-italian-cafe",
    },
    {
      title: "Lobby Bar",
      subtitle: "",
      img: imgLobby,
      path: "/restaurants-bars/lobby-bar",
    },
    {
      title: "Asian Restaurant",
      subtitle: "10:00-23:30",
      img: imgAsia,
      path: "/restaurants-bars/asian-restaurant",
    },
  ]);
  return (
    <div className="page restaurants-bars-page">
      <Category title={t("menu.Restaurants & Bars")} list={list} />
      <RightBottomButtons />
      <LeftBottomButtons showNavigation={true} />
    </div>
  );
}

export default RestaurantsBars;
