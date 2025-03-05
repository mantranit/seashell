import { useEffect, useState } from "react";
import Category, { TView } from "../components/Category";
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
  const [initView, setInitView] = useState<TView | null>(null);

  useEffect(() => {
    const currentMenu = menu.find((item) => item.id === identity);
    if (currentMenu) {
      setInitView({
        id: identity,
        path: currentMenu.path,
        title: currentMenu.text,
        parentId: null,
        startCursorX: 0,
        startCursorY: 0,
      });
    }
    if (identity === "dining") {
      setProductList(responseDining);
    } else if (identity === "restaurants-bars") {
      setProductList(responseRestaurantsBars);
    }
  }, [identity]);

  return (
    <div className="page category-page">
      {initView && <Category responseData={productList} initView={initView} />}
      <LeftBottomButtons showNavigation={true} />
      <RightBottomButtons />
    </div>
  );
}

export default CategoryPage;
