import { Link } from "react-router";
import { TCategoryItem } from "../CategoryList";
import "./style.scss";

type TCategoryItemProps = {
  item: TCategoryItem;
  itemWidth: number;
  itemHeight: number;
};

function CategoryItem({ item, itemWidth, itemHeight }: TCategoryItemProps) {
  return (
    <div className="category-item">
      <Link to={item.path} style={{ width: itemWidth, height: itemHeight }}>
        <img src={item.img} alt="" width={itemWidth} height={itemHeight} />
        <div className="brief">
          <p className="title">{item.title}</p>
          {item.time && <p className="time">{item.time}</p>}
        </div>
      </Link>
    </div>
  );
}

export default CategoryItem;
