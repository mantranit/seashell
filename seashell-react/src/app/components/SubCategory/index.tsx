import { Link, useNavigate } from "react-router";
import "./style.scss";
import { useEffect, useRef, useState } from "react";
import { keyboard } from "../../keyboard";

type TSubCategoryProps = {
  title: string;
  list: any[];
};

const itemWidth = 390;
const itemHeight = 158;
const itemInARow = 2;
const heightThumb = 452;
const borderCursorWith = 3;
const gap = 20;

function SubCategory({ title, list }: TSubCategoryProps) {
  const navigate = useNavigate();
  const [heightTrack, setHeightTrack] = useState(100);
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);
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
      setCursorX((currenValue) => {
        return Math.min(currenValue + 1, itemInARow - 1);
      });
    } else if (keycode === keyboard.LEFT) {
      setCursorX((currenValue) => {
        return Math.max(0, currenValue - 1);
      });
    } else if (keycode === keyboard.TOP) {
      setCursorY((currenValue) => {
        return Math.max(0, currenValue - 1);
      });
    } else if (keycode === keyboard.BOTTOM) {
      setCursorY((currenValue) => {
        return Math.min(
          currenValue + 1,
          Math.ceil(list.length / itemInARow) - 1
        );
      });
    } else if (keycode === keyboard.ENTER) {
      const currentItem = list[cursorX + cursorY * itemInARow];
      navigate(currentItem.path);
    }
  };

  useEffect(() => {
    if (!list[cursorX + cursorY * itemInARow]) {
      setCursorX(cursorX - 1);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cursorX, cursorY]);

  // calculateScroller
  useEffect(() => {
    if (outerRef?.current && innerRef?.current) {
      const { height: outerHeight } = outerRef.current.getBoundingClientRect();
      const { height: innerHeight } = innerRef.current.getBoundingClientRect();
      if (outerHeight < innerHeight) {
        setShowThumb(true);
        setHeightTrack((outerHeight / innerHeight) * heightThumb);
      }
    }
  }, []);

  const translateCursorX = cursorX * (itemWidth + gap) + gap / 2;
  const translateCursorY = Math.min(
    heightThumb - itemHeight - borderCursorWith * 2,
    cursorY * (itemHeight + gap)
  );
  let translateTrackY =
    (cursorY / (Math.ceil(list.length / itemInARow) - 1)) * heightThumb -
    heightTrack;
  const translatePanelY =
    -((cursorY - 1) * (itemHeight + gap)) +
    (heightThumb - 2 * (itemHeight + gap)) +
    (borderCursorWith + 1);

  return (
    <div className="sub-category-wrapper">
      <h2>{title}</h2>
      <div className="sub-category-content" ref={outerRef}>
        <div
          className="sub-category-scroller"
          style={{ display: showThumb ? "block" : "none" }}
        >
          <div
            style={{
              height: `${heightTrack}px`,
              transform: `translate(0, ${Math.max(0, translateTrackY)}px)`,
            }}
          />
        </div>
        <div
          className="sub-category-cursor"
          style={{
            width: itemWidth + borderCursorWith * 2,
            height: itemHeight + borderCursorWith * 2,
            transform: `translate(${translateCursorX}px, ${translateCursorY}px)`,
          }}
        />
        <div
          className="sub-category-list"
          ref={innerRef}
          style={{
            transform: `translate(0, ${Math.min(
              -(gap / 2),
              translatePanelY
            )}px)`,
          }}
        >
          {list.map((item) => {
            return (
              <div className="sub-category-item" key={item.title}>
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

export default SubCategory;
