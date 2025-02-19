import { Outlet } from "react-router";
import Header from "../components/Header";
import "./style.scss";

export default function MainLayout() {
  return (
    <div className="site-wrapper">
      <Header />
      <Outlet />
    </div>
  );
}
