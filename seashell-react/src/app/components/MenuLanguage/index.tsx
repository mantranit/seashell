import { Link } from "react-router";
import "./style.scss";
import { t } from "i18next";

function MenuLanguage() {
  return (
    <div
      className={`menu-item ${isActive ? "active" : ""}`}
      style={{ flexBasis: `${width}px`, height: `${width}px` }}
    >
      <Link to={path}>
        <div className="icon">{icon}</div>
        <div className="text">
          <span>{t(`menu.${text}`)}</span>
        </div>
      </Link>
    </div>
  );
}

export default MenuLanguage;
