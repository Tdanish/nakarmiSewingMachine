import React, { useEffect, useState } from "react";
import image1 from "/11zon_IMG_1079-scaled.jpg";
import image2 from "/11zon_IMG_6147-scaled.jpg";
import image3 from "/2people_IMG_1014-2-scaled.jpg";

const images = [
  {
    image: image1,
    title: "Tech",
  },
  {
    image: image2,
    title: "store",
  },
  {
    image: image3,
    title: "machine",
  },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[500px] border-4 border-gray-200 rounded-4xl shadow-2xl overflow-hidden">
      {images.map((photo, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
