import { Link } from "react-router";
import "./style.scss";

type TMenuItemProps = {
  id: string;
  icon: string;
  path: string;
  text: string;
  isActive: boolean;
};

function MenuItem({ id, icon, path, text, isActive }: TMenuItemProps) {
  return (
    <div className="menu-item">
      <Link to={path} className={isActive ? "active" : ""}>
        <img src={icon} alt={id} />
        <p>{text}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
