import { Link, useNavigate } from "react-router";
import "./style.scss";
import { useEffect, useState } from "react";
import { keyboard } from "../../keyboard";

type TCategory = {
  title: string;
  list: any[];
};

function Category({ title, list }: TCategory) {
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
    } else if (keycode === keyboard.LEFT) {
    } else if (keycode === keyboard.TOP) {
    } else if (keycode === keyboard.BOTTOM) {
    } else if (keycode === keyboard.ENTER) {
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="category-wrapper">
      <h2>{title}</h2>
      <div className="category-content">
        <div className="category-list">
          {list.map((item) => {
            return (
              <div className="category-item" key={item.title}>
                <Link to={item.path}>
                  <img src={item.img} alt="" />
                  <div className="brief">
                    <p className="title">{item.title}</p>
                    {item.subtitle && (
                      <p className="subtitle">{item.subtitle}</p>
                    )}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Category;
