import Image from "next/image";
import React from "react";

const Gallery = () => {
  const images = [
    "/img/1.png",
    "/img/2.png",
    "/img/3.png",
    "/img/4.png",
    "/img/5.png",
    "/img/6.png",
    "/img/7.png",
  ];

  return (
    <>
      <h1 className="text-3xl font-semibold text-gray-800 my-6 text-center">
        OUR GALLERY
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              width={400}
              height={400}
              className="h-full object-cover max-w-full rounded-lg"
              src={image}
              alt="gallery"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
