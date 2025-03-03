import { formatCurrency } from "../../utils";
import { TCategoryItem } from "../CategoryList";
import "./style.scss";

type TSubCategoryItemProps = {
  item: TCategoryItem;
  itemWidth: number;
  itemHeight: number;
};

function SubCategoryItem({
  item,
  itemWidth,
  itemHeight,
}: TSubCategoryItemProps) {
  return (
    <div className="sub-category-item">
      <div
        className="item-content"
        style={{ width: itemWidth, height: itemHeight }}
      >
        <div className="img" style={{ width: 128, height: 128 }}>
          <img src={item.img} alt="" width={128} height={128} />
        </div>
        <div className="brief">
          <p className="title">{item.title}</p>
          <div className="subtitle">
            <p className="tags">
              {item.tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </p>
            <p className="price">{item.price && formatCurrency(item.price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategoryItem;
