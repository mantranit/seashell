import { ReactNode, useEffect, useState } from "react";
import "./style.scss";
import iconBack from "../../../assets/icons/btn_arrow_left.png";
import iconNext from "../../../assets/icons/btn_arrow_right.png";
import { Link, useNavigate } from "react-router";
import { t } from "i18next";
import { menu } from "./menu";
import { keyboard } from "../../keyboard";

type TMenuItemProps = {
  icon: ReactNode;
  path: string;
  text: string;
  isActive: boolean;
  width: number;
};

function MenuItem({ icon, path, text, isActive, width }: TMenuItemProps) {
  return (
    <div
      className={`menu-item ${isActive ? "active" : ""}`}
      style={{ flexBasis: `${width}px`, height: `${width}px` }}
    >
      <Link to={path}>
        <div className="icon">{icon}</div>
        <div className="text">
          <span>{t(`${text}`)}</span>
        </div>
      </Link>
    </div>
  );
}

const totalItemShowed = 5;
const itemWidth = (1280 - 100) / totalItemShowed;

function MenuVertical() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursor, setCursor] = useState(0);
  const navigate = useNavigate();

  const handleKeyDown = (event: any) => {
    let keycode;
    if (window.event) {
      keycode = event.keyCode;
    } else if (event.which) {
      keycode = event.which;
    }

    if (keycode === keyboard.RIGHT) {
      setCurrentIndex((currentIndex) => {
        let nextIndex = currentIndex + 1;
        if (nextIndex >= menu.length) {
          nextIndex = currentIndex;
        }
        return nextIndex;
      });
      setCursor((currentCursor) => {
        if (currentCursor + 1 > totalItemShowed - 1) {
          return totalItemShowed - 1;
        } else {
          return currentCursor + 1;
        }
      });
    } else if (keycode === keyboard.LEFT) {
      setCurrentIndex((currentIndex) => {
        let backIndex = currentIndex - 1;
        if (backIndex <= -1) {
          backIndex = currentIndex;
        }
        return backIndex;
      });
      setCursor((currentCursor) => {
        if (currentCursor - 1 < 0) {
          return 0;
        } else {
          return currentCursor - 1;
        }
      });
    } else if (keycode === keyboard.ENTER) {
      const currentItem = menu[currentIndex];
      navigate(currentItem.path);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  useEffect(() => {
    const key = "menu-vertical";
    const jsonString = localStorage.getItem(key) || "{}";
    const jsonData = JSON.parse(jsonString);
    if (jsonData.currentIndex) {
      setCurrentIndex(jsonData.currentIndex);
      setCursor(jsonData.cursor);
    }
  }, []);

  useEffect(() => {
    const key = "menu-vertical";
    localStorage.setItem(key, JSON.stringify({ currentIndex, cursor }));
  }, [currentIndex, cursor]);

  return (
    <div className="menu-container">
      <div
        className={`navigate back ${cursor === currentIndex ? "disabled" : ""}`}
      >
        <img src={iconBack} alt="<" />
      </div>
      <div
        className={`navigate next ${
          menu.length - currentIndex === totalItemShowed - cursor
            ? "disabled"
            : ""
        }`}
      >
        <img src={iconNext} alt="<" />
      </div>
      <div className="menu-wrapper">
        <div
          className="menu-cursor"
          style={{
            width: `${itemWidth}px`,
            height: `${itemWidth}px`,
            transform: `translate(${cursor * itemWidth}px, 0)`,
          }}
        >
          <div>&nbsp;</div>
        </div>
        <div
          className="menu-scroller"
          style={{
            transform: `translateX(${-(currentIndex - cursor) * itemWidth}px)`,
          }}
        >
          {menu.map((item, index) => {
            return (
              <MenuItem
                key={item.text}
                text={item.text}
                icon={item.icon}
                path={item.path}
                isActive={currentIndex === index}
                width={itemWidth}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuVertical;
