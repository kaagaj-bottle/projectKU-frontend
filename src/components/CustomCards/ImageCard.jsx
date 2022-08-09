import React from "react";
import "./ImageCard.css";
import { useState } from "react";
const ImageCard = ({ title, imgSrc, handleCloseModal }) => {
  return (
    <div className="modal">
      <span className="close" onClick={handleCloseModal}>
        &times;
      </span>
      <img className="modal-content" src={imgSrc} />
      <div>{title}</div>
    </div>
  );
};

export default ImageCard;
