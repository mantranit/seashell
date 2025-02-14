import { useEffect, useState } from "react";
import MenuItem from "../MenuItem";
import iconTv from "../../../assets/icons/icon-tv.svg?inline";

const menu = [
  {
    id: "tv",
    icon: iconTv,
    text: "Television",
    path: "/television",
  },
  {
    id: "tv",
    icon: iconTv,
    text: "Television",
    path: "/television",
  },
];

function MenuVertical() {
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
        {menu.map((item) => {
          return (
            <MenuItem
              key={item.id}
              id={item.id}
              icon={item.icon}
              text={item.text}
              path={item.path}
              isActive={currentMenuItem === item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MenuVertical;
