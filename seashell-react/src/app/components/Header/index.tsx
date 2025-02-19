import "./style.scss";
import logo from "../../../assets/logo_white.png";
import { t } from "i18next";
import dayjs from "dayjs";
import { useState } from "react";
import { IconClock } from "./icon-clock";

function Header() {
  const name = "Mr Tuấn Lê";
  const roomNumber = "101";
  const [today, setDate] = useState(dayjs());
  setInterval(() => {
    setDate(dayjs());
  }, 60000);

  return (
    <div className="header">
      <div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="generalInfo">
        <div className="guest">{t("header.Welcome", { name })}, </div>
        <div className="room-number">{t("header.Room", { roomNumber })}</div>
        <div className="wearther">
          +30<sup>o</sup>C
        </div>
        <div className="clock-area">
          <span className="icon">
            <IconClock />
          </span>
          <span>
            {today.format("HH")}
            <span className="separate">:</span>
            {today.format("mm")}
          </span>
        </div>
        <div className="date">{today.format("ll")}</div>
      </div>
    </div>
  );
}

export default Header;
