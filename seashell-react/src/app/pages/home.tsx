import { useState } from "react";
import reactLogo from "../../assets/react.svg?inline";
import viteLogo from "../../assets/vite.svg?inline";
import MenuVertical from "../components/MenuVertical";
import MenuLanguage from "../components/MenuLanguage";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="page home-page">
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => navigate("/settings")}>Settings</button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <MenuLanguage />
      <MenuVertical />
    </div>
  );
}

export default Home;
