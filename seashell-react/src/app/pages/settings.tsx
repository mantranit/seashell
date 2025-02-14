import { useNavigate } from "react-router";

export default function Settings() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Settings</h1>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}
