import "./style.scss";
import { TCategoryItem } from "../CategoryList";
import { IconClock } from "../Header/icon-clock";
import { t } from "i18next";

type TProductTimeProps = {
  product: TCategoryItem;
};

function ProductTime({ product }: TProductTimeProps) {
  if (
    product.time ||
    product.duration ||
    (product.tags && product.tags.length > 0)
  ) {
    return (
      <div className="product-time">
        {product.tags && product.tags.length > 0 && (
          <div className="tags">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        )}
        {product.duration && (
          <div>
            {t("DURATION")}: {product.duration}
          </div>
        )}
        {product.time && (
          <div className="time">
            <IconClock /> {product.time}
          </div>
        )}
      </div>
    );
  } else {
    return <></>;
  }
}
export default ProductTime;
