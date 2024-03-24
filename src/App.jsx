import Videobackground from "./Components/Home/videobackground";
import SecondBackground from "./Components/SecondBackground/SecondBackground";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="container-fluid pad">
        <Videobackground />
        <SecondBackground />
      </div>
    </>
  );
}

export default App;
