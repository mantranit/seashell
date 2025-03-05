import { useEffect, useState } from "react";
import Category from "../components/Category";
import { TCategoryItem } from "../components/CategoryList";
import LeftBottomButtons from "../components/LeftBottomButtons";
import RightBottomButtons from "../components/RightBottomButtons";

import { responseDining } from "../../_mock/dining";
import { responseRestaurantsBars } from "../../_mock/restautantsBars";
import { menu } from "../../_mock/menu";

type TCategoryPageProps = {
  identity: string;
};

function CategoryPage({ identity }: TCategoryPageProps) {
  const [productList, setProductList] = useState<TCategoryItem[]>([]);
  const [initView, setInitView] = useState({
    id: identity,
    path: "/dining",
    title: "Dining",
    parentId: null,
    startCursorX: 0,
    startCursorY: 0,
  });

  useEffect(() => {
    const currentMenu = menu.find((item) => item.id === identity);
    if (currentMenu) {
      setInitView({
        ...initView,
        path: currentMenu.path,
        title: currentMenu.text,
      });
    }
    if (identity === "dining") {
      setProductList(responseDining);
    } else if (identity === "restaurants-bars") {
      setProductList(responseRestaurantsBars);
    }
  }, []);

  return (
    <div className="page category-page">
      <Category responseData={productList} initView={initView} />
      <LeftBottomButtons showNavigation={true} />
      <RightBottomButtons />
    </div>
  );
}

export default CategoryPage;
