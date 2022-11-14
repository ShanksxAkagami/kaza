import React from "react";

const Card = ({ image, title }) => {
  return (
    <div className="thumb">
      <img src={image} alt="thumb" className="thumb__img" />
      <div className="thumb__overlay"></div>
      <h2 className="thumb__title">{title}</h2>
    </div>
  );
};

export default Card;