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

    if (keycode === keyboard.RIGHT) {
    } else if (keycode === keyboard.LEFT) {
    } else if (keycode === keyboard.TOP) {
    } else if (keycode === keyboard.BOTTOM) {
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
                  transform: `translate(0, ${Math.max(0, translateTrackY)}px)`,
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
              <Quantity>{t(product.orderUnit ?? "")}</Quantity>
            )}
            {product.orderType && <Button>{t(product.orderType)}</Button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
