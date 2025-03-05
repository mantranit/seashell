import { TCategoryItem } from "../components/CategoryList";
import ProductDetails from "../components/ProductDetails";

import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { responseDining } from "../../_mock/dining";
import { responseRestaurantsBars } from "../../_mock/restautantsBars";

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
    }
  }, []);

  const product = productList.find((item) => item.id === productId);
  if (product) {
    return (
      <div className="page product-page">
        <ProductDetails product={product} />
      </div>
    );
  }
}

export default ProductPage;
