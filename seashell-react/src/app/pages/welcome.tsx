import MenuLanguage from "../components/MenuLanguage";
import Welcome from "../components/Welcome";

function WelcomeScreen() {
  return (
    <div className="page welcome-page">
      <div className="header"></div>
      <Welcome />
      <MenuLanguage />
    </div>
  );
}

export default WelcomeScreen;
