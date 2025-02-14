import { Link } from "react-router";
import "./style.scss";

type TMenuItemProps = {
  icon: string;
  path: string;
  text: string;
  isActive: boolean;
};

function MenuItem({ icon, path, text, isActive }: TMenuItemProps) {
  return (
    <div className="menu-item">
      <Link to={path} className={isActive ? "active" : ""}>
        {icon}
        <p>{text}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
