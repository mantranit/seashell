import "./style.scss";
import { TCategoryItem } from "../CategoryList";
import { IconClock } from "../Header/icon-clock";

type TProductTimeProps = {
  product: TCategoryItem;
};

function ProductTime({ product }: TProductTimeProps) {
  if (product.time || (product.tags && product.tags.length > 0)) {
    return (
      <div className="product-time">
        {product.tags && product.tags.length > 0 && (
          <div className="tags">
            {product.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
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
