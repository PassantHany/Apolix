import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./AutoPlay.css";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    customStyle: {
      width: "20px",
    },
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="custom-carousel">
        <span>Flw trades</span>
        <span>MonoType</span>
        <span>vanOord</span>
        <span>Flw trades</span>
        <span>MonoType</span>
        <span>vanOord</span>
      </Slider>
    </div>
  );
}

export default AutoPlay;
