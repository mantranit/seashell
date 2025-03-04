import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CategoryList, { TCategoryItem } from "../CategoryList";

export type TView = {
  id: number | string;
  path?: string;
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
      const currentItem = currentViewed[currentViewed.length - 1];
      currentItem.startCursorX = cursorX;
      currentItem.startCursorY = cursorY;
      const exist = trackingViewed.find(
        (tracking) => tracking.id === currentItem.id
      );
      if (exist) {
        exist.startCursorX = cursorX;
        exist.startCursorY = cursorY;
      }
      setTrackingViewed([...trackingViewed]);
      return [...currentViewed];
    });
  };

  const goNext = (nextItem: TCategoryItem) => {
    const hasCategory = responseData.filter(
      (item) => item.parentId === nextItem.id
    );
    if (hasCategory.length === 0) {
      navigate(`${initView.path}/${nextItem.id}`);
    } else {
      const { id, title, parentId } = nextItem;
      setViewed((currentViewed: any) => {
        let nextViewItem;
        const exist = trackingViewed.find((tracking) => tracking.id === id);
        if (exist) {
          nextViewItem = {
            id,
            title,
            parentId,
            startCursorX: exist.startCursorX,
            startCursorY: exist.startCursorY,
          };
        } else {
          nextViewItem = {
            id,
            title,
            parentId,
            startCursorX: 0,
            startCursorY: 0,
          };
          setTrackingViewed([...trackingViewed, nextViewItem]);
        }
        return [...currentViewed, nextViewItem];
      });
    }
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

  useEffect(() => {
    const key = initView.id.toString();
    const jsonString = localStorage.getItem(key) || "{}";
    const jsonData = JSON.parse(jsonString);
    if (jsonData.trackingViewed) {
      setTrackingViewed([...jsonData.trackingViewed]);
      setViewed([...jsonData.viewed]);
    }
  }, []);

  useEffect(() => {
    const key = initView.id.toString();
    localStorage.setItem(key, JSON.stringify({ viewed, trackingViewed }));
  }, [viewed, trackingViewed]);

  const currentViewed = viewed[viewed.length - 1];
  const data = {
    list: responseData.filter((item: TCategoryItem) => {
      return item.parentId === currentViewed.id;
    }),
    title: currentViewed.title,
    startCursorX: currentViewed.startCursorX,
    startCursorY: currentViewed.startCursorY,
  };

  return (
    <CategoryList
      data={data}
      cursorXYChanged={cursorXYChanged}
      goNext={goNext}
      goBack={goBack}
    />
  );
}

export default Category;
