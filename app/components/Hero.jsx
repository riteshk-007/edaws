import React from "react";
import CarouselScroll from "./CarouselScroll";

const images = [
  { src: "/poster/1.png" },
  { src: "/poster/1.png" },
  { src: "/poster/1.png" },
];
const Hero = () => {
  return (
    <div className="flex flex-col">
      <CarouselScroll images={images} />
    </div>
  );
};

export default Hero;
