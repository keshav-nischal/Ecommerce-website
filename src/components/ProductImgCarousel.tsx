import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../assets/CarouselImg1.webp";
import img2 from "../assets/CarouselImg2.webp";

const images = [img1, img2];

const ProductImgCarousel = () => {
  return (
    <div style={{ userSelect: "none" }}>
      <Carousel
        swipeable
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows
        stopOnHover
        emulateTouch
        autoPlay
      >
        <div key={images[0]}>
          <img src={images[0]} alt="carousel-img" />
        </div>
        <div key={images[1]}>
          <img src={images[1]} alt="carousel-img" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductImgCarousel;
