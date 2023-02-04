import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carrousel.css";
export function Carrousel() {
  return (
    <Carousel className="car">
      <Carousel.Item>
        <img
          className="carrousel-imgs"
          src="https://malibu-bar.com.co/wp-content/uploads/2018/06/promocion-slide-malibu-bar-en-cali.jpg"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrousel-imgs"
          src="https://res.cloudinary.com/amecar/image/fetch/w_1140,f_auto/https://res.cloudinary.com/amecar/image/upload/f_auto/v1594924580/CarlsJr-OfertaCarlBurgers-WebsiteSlide-1140x474_1_fd3mou.jpg"
          alt="Second slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrousel-imgs"
          src="https://media.slidesgo.com/storage/21467884/conversions/0-fast-food-digital-menu-board-thumb.jpg"
          alt="Third slide"
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
