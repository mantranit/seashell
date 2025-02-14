import { useNavigate } from "react-router";

export default function Settings() {
  const navigate = useNavigate();
  return (
    <div className="page settings-page">
      <h1>Settings</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
