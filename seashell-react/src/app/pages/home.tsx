import MenuVertical from "../components/MenuVertical";
import MenuLanguage from "../components/MenuLanguage";
import { VideoBackground } from "../components/VideoBackground";

function Home() {
  return (
    <div className="page home-page">
      <VideoBackground enabledCover={true} />
      <MenuLanguage />
      <MenuVertical />
    </div>
  );
}

export default Home;
