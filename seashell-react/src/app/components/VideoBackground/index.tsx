import "./style.scss";

export const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay={true} loop={true} muted={true} controls={false}>
        <source
          src="http://103.153.72.195:8080/video/HITEC_Scandic_Video_No_Sound.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
