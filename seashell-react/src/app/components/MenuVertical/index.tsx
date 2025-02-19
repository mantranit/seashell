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
          <span>{t(`menu.${text}`)}</span>
        </div>
      </Link>
    </div>
  );
}

const totalItemShowed = 5;
const itemWidth = (1280 - 100) / totalItemShowed;

function MenuVertical() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlider, setCurrentSlider] = useState(0);
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
      let nextIndex = currentIndex + 1;
      if (nextIndex >= menu.length) {
        nextIndex = currentIndex;
      }
      setCurrentIndex(() => nextIndex);
      setCursor(() => {
        if (cursor + 1 > totalItemShowed - 1) {
          setCurrentSlider(
            Math.max(
              currentSlider - itemWidth,
              -(menu.length - totalItemShowed) * itemWidth
            )
          );
          return totalItemShowed - 1;
        } else {
          return cursor + 1;
        }
      });
    } else if (keycode === keyboard.LEFT) {
      let backIndex = currentIndex - 1;
      if (backIndex <= -1) {
        backIndex = currentIndex;
      }
      setCurrentIndex(() => backIndex);
      setCursor(() => {
        if (cursor - 1 < 0) {
          setCurrentSlider(Math.min(currentSlider + itemWidth, 0));
          return 0;
        } else {
          return cursor - 1;
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
  });

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
            transform: `translateX(${cursor * itemWidth}px)`,
          }}
        >
          <div>&nbsp;</div>
        </div>
        <div
          className="menu-scroller"
          style={{
            transform: `translateX(${currentSlider}px)`,
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
