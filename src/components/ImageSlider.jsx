import React, { useState } from "react";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentUser] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transoform: "translate(0, -50)",
    left: "32px",
    fontSize: "50px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transoform: "translate(0, -50)",
    right: "32px",
    fontSize: "50px",
    color: "#fff",
    zIndex: 1,
    cursor: "pointer",
  };

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}>
        ⟨
      </div>
      <div style={rightArrowStyles} onClick={goToNext}>
        ⟩
      </div>
      <div style={slideStyles}>Imageslider Here</div>
    </div>
  );
}

export default ImageSlider;
