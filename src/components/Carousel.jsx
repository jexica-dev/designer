import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImageSlider from "./ImageSlider";

function CarouselCard(props) {
  const slides = [
    { url: "/images/Jayran_Samplework.png", title: "image-01" },
    { url: "/images/Jayran_Samplework2.png", title: "image-02" },
    { url: "/images/Jayran_Samplework3.png", title: "image-03" },
    { url: "/images/Jayran_Samplework4.png", title: "image-04" },
    { url: "/images/Jayran_Samplework5.png", title: "image-05" },
    { url: "/images/Jayran_Samplework6.png", title: "image-06" },
    { url: "/images/Jayran_Samplework7.png", title: "image-07" },
    { url: "/images/Jayran_Samplework8.png", title: "image-08" },
  ];

  const containerStyles = {
    width: "900px",
    height: "600px",
    margin: "0 auto",
  };

  return (
    <div className="w-[80%] p-10">
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default CarouselCard;
