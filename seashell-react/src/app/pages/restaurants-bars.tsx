import { useState } from "react";
import ButtonBack from "../components/ButtonBack";
import Category from "../components/Category";
import MenuLanguage from "../components/MenuLanguage";

import imgLounge from "../../assets/categories/bars/lounge.jpg";
import imgItablian from "../../assets/categories/bars/italian.jpg";
import imgLobby from "../../assets/categories/bars/lobby.jpg";
import imgAsia from "../../assets/categories/bars/asian.jpg";
import { t } from "i18next";

function RestaurantsBars() {
  const [bars] = useState([
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
    {
      title: "Lobby Bar 2",
      subtitle: "",
      img: imgLobby,
      path: "/restaurants-bars/lobby-bar",
    },
    {
      title: "Asian Restaurant 2",
      subtitle: "10:00-23:30",
      img: imgAsia,
      path: "/restaurants-bars/asian-restaurant",
    },
  ]);
  return (
    <div className="page restaurants-bars-page">
      <Category title={t("Restaurants & Bars")} list={bars} />
      <MenuLanguage />
      <ButtonBack />
    </div>
  );
}

export default RestaurantsBars;
