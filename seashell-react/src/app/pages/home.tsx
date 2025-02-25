import MenuVertical from "../components/MenuVertical";
import RightBottomButtons from "../components/RightBottomButtons";
import { VideoBackground } from "../components/VideoBackground";

function Home() {
  return (
    <div className="page home-page">
      <VideoBackground enabledCover={true} />
      <RightBottomButtons />
      <MenuVertical />
    </div>
  );
}

export default Home;
