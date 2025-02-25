import RightBottomButtons from "../components/RightBottomButtons";
import { VideoBackground } from "../components/VideoBackground";
import Welcome from "../components/Welcome";

function WelcomeScreen() {
  return (
    <div className="page welcome-page">
      <VideoBackground />
      <Welcome />
      <RightBottomButtons />
      <div className="cover" />
    </div>
  );
}

export default WelcomeScreen;
