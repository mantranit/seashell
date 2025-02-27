import { useState } from "react";
import { useNavigate } from "react-router";
import CategoryList, { TCategoryItem } from "../CategoryList";

type TView = {
  id: number | string;
  title: string;
  parentId: null | number | string;
  startCursorX: number;
  startCursorY: number;
};

type TCategoryProps = {
  responseData: TCategoryItem[];
  initView: TView;
};

function Category({ responseData, initView }: TCategoryProps) {
  const navigate = useNavigate();
  const [viewed, setViewed] = useState([initView]);
  const [trackingViewed, setTrackingViewed] = useState([initView]);

  const cursorXYChanged = ({ cursorX, cursorY }: any) => {
    setViewed((currentViewed) => {
      currentViewed[currentViewed.length - 1].startCursorX = cursorX;
      currentViewed[currentViewed.length - 1].startCursorY = cursorY;
      const exist = trackingViewed.find(
        (tracking) =>
          tracking.parentId === currentViewed[currentViewed.length - 1].parentId
      );
      if (exist) {
        exist.startCursorX = cursorX;
        exist.startCursorY = cursorY;
      }
      return [...currentViewed];
    });
  };

  const goNext = (nextItem: TCategoryItem) => {
    const { id, title } = nextItem;
    setViewed((currentViewed: any) => {
      let nextViewItem;
      const exist = trackingViewed.find((tracking) => tracking.parentId === id);
      if (exist) {
        nextViewItem = {
          id,
          title,
          parentId: id,
          startCursorX: exist.startCursorX,
          startCursorY: exist.startCursorY,
        };
      } else {
        nextViewItem = {
          id,
          title,
          parentId: id,
          startCursorX: 0,
          startCursorY: 0,
        };
        setTrackingViewed([...trackingViewed, nextViewItem]);
      }
      return [...currentViewed, nextViewItem];
    });
  };

  const goBack = () => {
    setViewed((currentViewed) => {
      if (currentViewed.length > 1) {
        currentViewed.pop();
      } else {
        navigate(-1);
      }
      return [...currentViewed];
    });
  };

  const currentViewed = viewed[viewed.length - 1];
  const data = {
    list: responseData.filter((item: TCategoryItem) => {
      return item.parentId === currentViewed.parentId;
    }),
    title: currentViewed.title,
    startCursorX: currentViewed.startCursorX,
    startCursorY: currentViewed.startCursorY,
  };
  console.log(viewed, trackingViewed);
  return (
    <CategoryList
      key={data.title}
      data={data}
      cursorXYChanged={cursorXYChanged}
      goNext={goNext}
      goBack={goBack}
    />
  );
}

export default Category;
