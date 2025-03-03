import "./style.scss";
import { useEffect, useRef, useState } from "react";
import { keyboard } from "../../keyboard";
import { t } from "i18next";
import CategoryItem from "../CategoryItem";
import SubCategoryItem from "../SubCategoryItem";

export enum EOrderType {
  selectTime = "Select time",
  continue = "Continue",
  addToCart = "Add to cart",
  chooseOptions = "Choose options",
}

export enum ECategoryItemType {
  category,
  subcategory,
}
export type TCategoryItem = {
  id: number | string;
  category?: string[];
  title: string;
  time: string;
  img: any;
  imgDetails?: any;
  type: ECategoryItemType;
  description?: string;
  tags?: string[];
  price?: number;
  parentId: null | number | string;
  orderQuantity?: number;
  orderUnit?: string;
  orderType?: EOrderType;
  orderOptions?: any[];
  duration?: string;
};

type TCategoryListProps = {
  data: {
    title: string;
    list: TCategoryItem[];
    startCursorX: number;
    startCursorY: number;
  };
  cursorXYChanged: Function;
  goNext: Function;
  goBack: Function;
};

const itemWidth = 390;
const itemHeight = 158;
const itemInARow = 2;
const borderCursorWith = 3;
const gap = 20;

function CategoryList({
  data,
  cursorXYChanged,
  goNext,
  goBack,
}: TCategoryListProps) {
  const { title, list } = data;
  const [heightContent, setHeightContent] = useState(452);
  const [heightThumb, setHeightThumb] = useState(452);
  const [cursorX, setCursorX] = useState(data.startCursorX);
  const [cursorY, setCursorY] = useState(data.startCursorY);
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
        const nextCursorX = Math.min(currenValue + 1, itemInARow - 1);
        if (!data.list[nextCursorX + cursorY * itemInARow]) {
          return currenValue;
        } else {
          return nextCursorX;
        }
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
        const nextCursorY = Math.min(
          currenValue + 1,
          Math.ceil(list.length / itemInARow) - 1
        );
        if (!data.list[cursorX + nextCursorY * itemInARow] && cursorX > 0) {
          setCursorX(cursorX - 1);
        }
        return nextCursorY;
      });
    } else if (keycode === keyboard.ENTER) {
      const nextItem = list[cursorX + cursorY * itemInARow];
      goNext(nextItem);
    } else if (keycode === keyboard.BACK) {
      goBack();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    setCursorX(data.startCursorX);
    setCursorY(data.startCursorY);
  }, [data.startCursorX, data.startCursorY]);

  // calculateScroller
  useEffect(() => {
    if (outerRef?.current && innerRef?.current) {
      const { height: outerHeight } = outerRef.current.getBoundingClientRect();
      const { height: innerHeight } = innerRef.current.getBoundingClientRect();
      setHeightThumb(outerHeight);
      setHeightContent(innerHeight);
    }
  }, [data.list]);

  useEffect(() => {
    cursorXYChanged({ cursorX, cursorY });
  }, [cursorX, cursorY]);

  const heightTrack = (heightThumb / heightContent) * heightThumb;
  const translateCursorX = cursorX * (itemWidth + gap) + gap / 2;
  const translateCursorY = Math.min(
    heightThumb - itemHeight - borderCursorWith * 2,
    cursorY * (itemHeight + gap)
  );
  const translateTrackY =
    (cursorY / (Math.ceil(list.length / itemInARow) - 1)) * heightThumb -
    heightTrack;
  const translatePanelY =
    -((cursorY - 1) * (itemHeight + gap)) +
    (heightThumb - 2 * (itemHeight + gap)) +
    (borderCursorWith + 1);

  return (
    <div className="category-wrapper">
      <h2>{t(title)}</h2>
      <div className="category-content" ref={outerRef}>
        <div
          className="category-scroller"
          style={{ display: heightThumb < heightContent ? "block" : "none" }}
        >
          <div
            style={{
              height: `${heightTrack}px`,
              transform: `translate(0, ${Math.max(0, translateTrackY)}px)`,
            }}
          />
        </div>
        <div
          className="category-cursor"
          style={{
            width: itemWidth + borderCursorWith * 2,
            height: itemHeight + borderCursorWith * 2,
            transform: `translate(${translateCursorX}px, ${translateCursorY}px)`,
            borderRadius: `${
              list[0]?.type === ECategoryItemType.category ? 3 : 10
            }px`,
          }}
        />
        <div
          className="category-list"
          ref={innerRef}
          style={{
            transform: `translate(0, ${Math.min(
              -(gap / 2),
              translatePanelY
            )}px)`,
          }}
        >
          {list.map((item) => {
            if (item.type === ECategoryItemType.category) {
              return (
                <CategoryItem
                  key={item.id}
                  item={item}
                  itemWidth={itemWidth}
                  itemHeight={itemHeight}
                />
              );
            } else {
              return (
                <SubCategoryItem
                  key={item.id}
                  item={item}
                  itemWidth={itemWidth}
                  itemHeight={itemHeight}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
