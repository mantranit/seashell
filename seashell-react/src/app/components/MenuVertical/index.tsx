import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import MenuItem from "../MenuItem";

function MenuVertical() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const [currentMenuItem, setCurrentMenuItem] = useState("application");

  const handleKeyDown = (event: any) => {
    let keycode;
    if (window.event) {
      keycode = event.keyCode;
    } else if (event.which) {
      keycode = event.which;
    }
    console.log(keycode);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="menu-container">
      <div className="menu-wrapper">
        <MenuItem
          icon="application"
          text="Application"
          path="/application"
          isActive={currentMenuItem === "application"}
        />
      </div>
    </div>
  );
}

export default MenuVertical;
