import { useEffect } from "react";
import { keyboard } from "../../keyboard";

type TProductDetailsProps = {
  goBack: Function;
};

const ProductDetails = ({ goBack }: TProductDetailsProps) => {
  const handleKeyDown = (event: any) => {
    let keycode;
    if (window.event) {
      keycode = event.keyCode;
    } else if (event.which) {
      keycode = event.which;
    }

    if (keycode === keyboard.TOP) {
    } else if (keycode === keyboard.BOTTOM) {
    } else if (keycode === keyboard.BACK) {
      goBack();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
