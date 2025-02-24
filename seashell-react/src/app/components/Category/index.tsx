import { Link, useNavigate } from "react-router";
import "./style.scss";
import { useEffect, useRef, useState } from "react";
import { keyboard } from "../../keyboard";

type TCategory = {
  title: string;
  list: any[];
};

const itemWidth = 400;
const itemHeight = 163;

function Category({ title, list }: TCategory) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlider, setCurrentSlider] = useState(0);
  const [cursor, setCursor] = useState(0);
  const navigate = useNavigate();
  const trackRef = useRef<HTMLDivElement>(null);
  const [heightTrack, setHeightTrack] = useState(100);
  const [translateWidth, setTranslateWidth] = useState(0);
  const [translateHeight, setTranslateHeight] = useState(0);
  const [showThumb, setShowThumb] = useState(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (event: any) => {
    let keycode;
    if (window.event) {
      keycode = event.keyCode;
    } else if (event.which) {
      keycode = event.which;
    }

    if (keycode === keyboard.RIGHT) {
      if (translateWidth < itemWidth + 20) {
        setTranslateWidth(translateWidth + (itemWidth + 20));
      }
    } else if (keycode === keyboard.LEFT) {
      if (translateWidth > 0) {
        setTranslateWidth(translateWidth - (itemWidth + 20));
      }
    } else if (keycode === keyboard.TOP) {
      if (translateHeight > 0) {
        setTranslateHeight(translateHeight - (itemHeight + 20));
      }
    } else if (keycode === keyboard.BOTTOM) {
      if (translateHeight < 452 - itemHeight - 20) {
        setTranslateHeight(translateHeight + (itemHeight + 20));
      }
    } else if (keycode === keyboard.ENTER) {
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const calculateScroller = () => {
    if (outerRef.current && innerRef.current) {
      const { height: outerHeight } = outerRef.current.getBoundingClientRect();
      const { height: innerHeight } = innerRef.current.getBoundingClientRect();
      if (outerHeight < innerHeight) {
        setShowThumb(true);
        setHeightTrack((outerHeight / innerHeight) * 100);
      }
      console.log("outerRef.current", outerRef.current.getBoundingClientRect());
      console.log("innerRef.current", innerRef.current.getBoundingClientRect());
    }
  };

  useEffect(() => {
    calculateScroller();
  }, []);

  return (
    <div className="category-wrapper">
      <h2>{title}</h2>
      <div className="category-content" ref={outerRef}>
        <div
          className="category-scroller"
          style={{ display: showThumb ? "block" : "none" }}
        >
          <div style={{ height: `${heightTrack}%` }} />
        </div>
        <div
          className="category-cursor"
          style={{
            transform: `translate(${translateWidth}px, ${translateHeight}px)`,
          }}
        />
        <div className="category-list" ref={innerRef}>
          {list.map((item) => {
            return (
              <div className="category-item" key={item.title}>
                <Link
                  to={item.path}
                  style={{ width: itemWidth, height: itemHeight }}
                >
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
