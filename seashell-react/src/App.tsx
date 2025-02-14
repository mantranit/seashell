import { HashRouter, Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./app/layouts/main";
import Home from "./app/pages/home";
import Settings from "./app/pages/settings";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
