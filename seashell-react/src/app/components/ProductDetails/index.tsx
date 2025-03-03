import { useEffect, useRef, useState } from "react";
import { keyboard } from "../../keyboard";
import "./style.scss";
import { t } from "i18next";
import { TCategoryItem } from "../CategoryList";
import Button from "../Button";
import Quantity from "../Quantity";
import ProductTime from "../ProductTime";

type TProductDetailsProps = {
  product: TCategoryItem;
  goBack: Function;
};

const stepScroll = 30;
const points = ["orderQuatity", "orderType"];

const ProductDetails = ({ product, goBack }: TProductDetailsProps) => {
  const [defaultCursor, setDefaultCursor] = useState(points.length - 1);
  const [translatePanelTime, setTranslatePanelTime] = useState(0);
  const [heightContent, setHeightContent] = useState(452);
  const [heightThumb, setHeightThumb] = useState(452);
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

    if (keycode === keyboard.RIGHT) {
    } else if (keycode === keyboard.LEFT) {
    } else if (keycode === keyboard.TOP) {
      setDefaultCursor((currentCursor) => Math.max(0, currentCursor - 1));
      setTranslatePanelTime((currentTranslateTime) => {
        if (0 > currentTranslateTime * stepScroll) {
          return currentTranslateTime + 1;
        }
        return currentTranslateTime;
      });
    } else if (keycode === keyboard.BOTTOM) {
      setDefaultCursor((currentCursor) =>
        Math.min(points.length - 1, currentCursor + 1)
      );
      setTranslatePanelTime((currentTranslateTime) => {
        if (heightThumb - heightContent < currentTranslateTime * stepScroll) {
          return currentTranslateTime - 1;
        }
        return currentTranslateTime;
      });
    } else if (keycode === keyboard.ENTER) {
      goBack();
    } else if (keycode === keyboard.BACK) {
      goBack();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [heightContent, heightThumb, defaultCursor]);

  // calculateScroller
  useEffect(() => {
    if (outerRef?.current && innerRef?.current) {
      const { height: outerHeight } = outerRef.current.getBoundingClientRect();
      const { height: innerHeight } = innerRef.current.getBoundingClientRect();
      setHeightThumb(outerHeight);
      setHeightContent(innerHeight);
      if (outerHeight < innerHeight) {
        setShowThumb(true);
        setHeightTrack((outerHeight / innerHeight) * outerHeight);
      }
    }
  }, []);

  const translateTrackY =
    translatePanelTime * (heightTrack / heightThumb) * stepScroll;
  const translatePanelY = translatePanelTime * stepScroll;
  return (
    <div className="product-details-wrapper">
      <h2>{t(product.title)}</h2>
      <div className="product-details-content">
        <div
          className="image"
          style={{ backgroundImage: `url(${product.imgDetails})` }}
        />
        <div className="content">
          <div className="product-description-content" ref={outerRef}>
            <div
              className="product-description-scroller"
              style={{ display: showThumb ? "block" : "none" }}
            >
              <div
                style={{
                  height: `${heightTrack}px`,
                  transform: `translate(0, ${Math.max(0, -translateTrackY)}px)`,
                }}
              />
            </div>
            <div
              className="product-description-inner"
              ref={innerRef}
              style={{
                transform: `translate(0, ${translatePanelY}px)`,
              }}
              dangerouslySetInnerHTML={{ __html: product.description ?? "" }}
            />
          </div>
          <div className="product-actions">
            <ProductTime product={product} />
            {product.orderQuantity && (
              <Quantity
                isActive={points[defaultCursor] === "orderQuatity"}
                initValue={product.orderQuantity}
              >
                {t(product.orderUnit ?? "")}
              </Quantity>
            )}
            {product.orderType && (
              <Button isActive={points[defaultCursor] === "orderType"}>
                {t(product.orderType)}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
