import { ReactNode, useEffect, useState } from "react";
import "./style.scss";
import { keyboard } from "../../keyboard";

type TQuantityProps = {
  children: ReactNode;
  initValue?: number;
  isActive?: boolean;
  quantityChange?: Function;
  price?: number;
};

function Quantity({
  children,
  initValue = 1,
  isActive = false,
  quantityChange,
  price,
}: TQuantityProps) {
  const [count, setCount] = useState(initValue);

  const handleKeyDown = (event: any) => {
    if (isActive) {
      let keycode;
      if (window.event) {
        keycode = event.keyCode;
      } else if (event.which) {
        keycode = event.which;
      }

      if (keycode === keyboard.RIGHT) {
        setCount((currentCount) => currentCount + 1);
      } else if (keycode === keyboard.LEFT) {
        setCount((currentCount) => Math.max(1, currentCount - 1));
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    if (typeof quantityChange === "function") {
      quantityChange();
    }
  }, [count]);

  return (
    <>
      <div className={`quantity ${isActive ? "quantity--active" : ""}`}>
        <button className="minus">
          <svg id="minus" viewBox="0 0 32 2" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fillRule="evenodd">
              <g
                id="15-Extra-Room-Control"
                transform="translate(-843.000000, -359.000000)"
                fillRule="nonzero"
              >
                <g
                  id="Temperature"
                  transform="translate(795.000000, 182.000000)"
                >
                  <g transform="translate(48.000000, 177.000000)">
                    <polygon id="Shape" points="0 0 0 2 32 2 32 0"></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <div className="count">
          {count}&nbsp;
          {children}
        </div>
        <button className="plus">
          <svg id="plus" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none" strokeWidth="1" fillRule="evenodd">
              <g
                id="15-Extra-Room-Control"
                transform="translate(-975.000000, -344.000000)"
                fillRule="nonzero"
              >
                <g
                  id="Temperature"
                  transform="translate(795.000000, 182.000000)"
                >
                  <g transform="translate(180.000000, 162.000000)">
                    <polygon
                      id="Shape"
                      points="15 0 15 15 0 15 0 17 15 17 15 32 17 32 17 17 32 17 32 15 17 15 17 0"
                    ></polygon>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}
export default Quantity;
