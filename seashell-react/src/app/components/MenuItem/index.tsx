import { Link } from "react-router";
import "./style.scss";
import { ReactNode } from "react";

type TMenuItemProps = {
  icon: ReactNode;
  path: string;
  text: string;
  isActive: boolean;
  width: number;
};

function MenuItem({ icon, path, text, isActive, width }: TMenuItemProps) {
  return (
    <div
      className={`menu-item ${isActive ? "active" : ""}`}
      style={{ flexBasis: `${width}px`, height: `${width}px` }}
    >
      <Link to={path}>
        <div className="icon">{icon}</div>
        <div className="text">
          <span>{text}</span>
        </div>
      </Link>
    </div>
  );
}

export default MenuItem;
