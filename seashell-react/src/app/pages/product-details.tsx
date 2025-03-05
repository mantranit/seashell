import { ECategoryItemType, EOrderType } from "../components/CategoryList";
import ProductDetails from "../components/ProductDetails";

import imgAsia from "../../assets/categories/bars/asian.jpg";
import imgAsiaDetails from "../../assets/categories/bars/asian-details.jpg";

function ProductDetailsPage() {
  return (
    <div className="page restaurants-bars-page">
      <ProductDetails
        product={{
          id: "bars004",
          title: "Asian Restaurant",
          time: "10:00-23:30",
          img: imgAsia,
          imgDetails: imgAsiaDetails,
          type: ECategoryItemType.category,
          parentId: "bars",
          description:
            "<p>The restaurant was voted Best Asian restaurant and 37th best in the world. Celebrity guests include Steve Jobs and Elon Musk visited the restaurant.</p>",
          orderQuantity: 2,
          orderUnit: "pers",
          orderType: EOrderType.selectTime,
        }}
        goBack={console.log}
      />
    </div>
  );
}

export default ProductDetailsPage;
