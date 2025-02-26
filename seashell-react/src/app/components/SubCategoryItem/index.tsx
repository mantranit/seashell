import { Link } from "react-router";
import { TCategoryItem } from "../Category";
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
      <Link to={item.path} style={{ width: itemWidth, height: itemHeight }}>
        <div className="img" style={{ width: 128, height: 128 }}>
          <img src={item.img} alt="" width={128} height={128} />
        </div>
        <div className="brief">
          <p className="title">{item.title}</p>
          <div className="subtitle">
            <p className="tags">
              {item.tags?.map((tag) => (
                <span>{tag}</span>
              ))}
            </p>
            <p className="price">{item.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SubCategoryItem;
