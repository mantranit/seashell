import { useEffect, useRef, useState } from "react";
import { keyboard } from "../../keyboard";
import "./style.scss";
import { t } from "i18next";
import { TCategoryItem } from "../CategoryList";

type TProductDetailsProps = {
  product: TCategoryItem;
  goBack: Function;
};

const heightThumb = 452;

const ProductDetails = ({ product, goBack }: TProductDetailsProps) => {
  const [heightTrack, setHeightTrack] = useState(100);
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

    if (keycode === keyboard.TOP) {
    } else if (keycode === keyboard.BOTTOM) {
    } else if (keycode === keyboard.BACK) {
      goBack();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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

  const translateTrackY = heightThumb - heightTrack;
  const translatePanelY = 0;

  return (
    <div className="product-details-wrapper">
      <h2>{t(product.title)}</h2>
      <div className="product-details-content" ref={outerRef}>
        <div
          className="product-details-scroller"
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
          className="product-details-inner"
          ref={innerRef}
          style={{
            transform: `translate(0, ${translatePanelY}px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProductDetails;
