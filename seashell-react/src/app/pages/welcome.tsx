import MenuLanguage from "../components/MenuLanguage";
import { VideoBackground } from "../components/VideoBackground";
import Welcome from "../components/Welcome";

function WelcomeScreen() {
  return (
    <div className="page welcome-page">
      <VideoBackground />
      <Welcome />
      <MenuLanguage />
    </div>
  );
}

export default WelcomeScreen;
