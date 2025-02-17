import { Outlet, useNavigate } from "react-router";
import Header from "../components/Header";
import "./style.scss";
import { useEffect } from "react";

export default function MainLayout() {
  const navigate = useNavigate();

  const handleKeyDown = (event: any) => {
    let keycode;
    if (window.event) {
      keycode = event.keyCode;
    } else if (event.which) {
      keycode = event.which;
    }

    if (keycode === 8) {
      navigate(-1);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="site-wrapper">
      <Header />
      <Outlet />
    </div>
  );
}
