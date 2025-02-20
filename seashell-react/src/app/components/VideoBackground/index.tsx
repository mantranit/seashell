import "./style.scss";
import background from "../../../assets/icons/shadow.png";

type TVideoBackgroundProps = {
  enabledCover?: boolean;
};

export const VideoBackground = ({
  enabledCover = false,
}: TVideoBackgroundProps) => {
  return (
    <div className="video-background">
      <video autoPlay={true} loop={true} muted={true} controls={false}>
        <source
          src="http://103.153.72.195:8080/video/HITEC_Scandic_Video_No_Sound.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {enabledCover && (
        <div className="overlay" style={{ background: `url(${background})` }} />
      )}
    </div>
  );
};
