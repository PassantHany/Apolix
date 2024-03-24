import Header from "../Header/Header";
import "./videobackground.css";
import Text from "../Text/Text";
function videobackground() {
  return (
    <div className="video-container">
      <video
        id="video"
        src="/src/assets/Apolix-background.mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className="overlay-text">
        <Header />
        <Text />
      </div>
    </div>
  );
}

export default videobackground;
