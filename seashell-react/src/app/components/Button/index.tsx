import { ReactNode } from "react";
import "./style.scss";

type TButtonProps = {
  children: ReactNode;
  isActive?: boolean;
};

function Button({ children, isActive = false }: TButtonProps) {
  return (
    <button
      type="button"
      className={`site-button ${isActive ? "site-button--active" : ""}`}
    >
      {children}
    </button>
  );
}
export default Button;
