import React from "react";

const Banner = ({ image, title }) => {
  return (
    <div className="thumb">
      <img src={image} alt="banner" className="thumb__img" />
      <div className="thumb__overlay"></div>
      <h2 className="banner__text">{title}</h2>
    </div>
  );
};

export default Banner;