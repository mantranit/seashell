import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TCategoryItem } from "../components/CategoryList";
import ProductDetails from "../components/ProductDetails";
import LeftBottomButtons from "../components/LeftBottomButtons";
import RightBottomButtons from "../components/RightBottomButtons";

import { responseDining } from "../../_mock/dining";
import { responseRestaurantsBars } from "../../_mock/restautantsBars";
import { responseSpaFitness } from "../../_mock/spaFitness";

type TProductPageProps = {
  identity: string;
};

function ProductPage({ identity }: TProductPageProps) {
  const { productId } = useParams();
  const [productList, setProductList] = useState<TCategoryItem[]>([]);

  useEffect(() => {
    if (identity === "dining") {
      setProductList(responseDining);
    } else if (identity === "restaurants-bars") {
      setProductList(responseRestaurantsBars);
    } else if (identity === "spa-fitness") {
      setProductList(responseSpaFitness);
    }
  }, []);

  const product = productList.find((item) => item.id === productId);
  if (product) {
    return (
      <div className="page product-page">
        <ProductDetails product={product} />
        <LeftBottomButtons showNavigation={true} />
        <RightBottomButtons />
      </div>
    );
  }
}

export default ProductPage;
