import { Link, useNavigate } from "react-router";
import "./style.scss";
import { t } from "i18next";
import { useEffect } from "react";
import { keyboard } from "../../keyboard";

const menu = [
  {
    text: "Television",
    path: "/television",
    color: "#FF0000",
  },
  {
    text: "Language",
    path: "/language",
    color: "#143F7B",
  },
];

function MenuLanguage() {
  const nagivate = useNavigate();
  const handleKeyDown = (event: any) => {
    let keycode;
    if (window.event) {
      keycode = event.keyCode;
    } else if (event.which) {
      keycode = event.which;
    }

    if (keycode === keyboard.BUTTON_BLUE) {
      nagivate("/settings/language");
    } else if (keycode === keyboard.BUTTON_RED) {
      nagivate("/television");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="menu-language-wrapper">
      <div className="menu-language">
        {menu.map((item) => {
          return (
            <Link to={item.path} key={item.path}>
              <div className="icon" style={{ backgroundColor: item.color }} />
              <div className="text">
                <span>{t(`menu.${item.text}`)}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default MenuLanguage;
