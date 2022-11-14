import React from "react";
import { useState } from "react";

import arrowLeft from "../assets/arrowLeft.svg";
import arrowRight from "../assets/arrowRight.svg";

const Slideshow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="slider">
      {slides.map((picture, index) => {
        return (
          <div key={index} className={index === current ? "slider__active-picture" : null}>
            {index === current && (<img src={picture} alt="sliderProduct" className="slider__picture" />)}
          </div>
        );
      })}
      {length > 1 ? (
        <div>
          <div className="slider__previous" onClick={prevSlide}>
            <img src={arrowLeft} alt="arrowleft" className="slider__previous-icon" />
          </div>
          <div className="slider__next" onClick={nextSlide}>
            <img src={arrowRight} alt="arrowright" className="slider__next-icon" />
          </div>
          <div className="slider__index">
            {current + 1} / {length}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Slideshow;