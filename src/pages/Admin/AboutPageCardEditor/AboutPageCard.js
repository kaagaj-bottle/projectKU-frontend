import React, { useEffect, useState } from "react";
import Togglable from "../../../components/Togglable";
import "./AboutPageCard.css";
const AboutPageCard = ({ card, cardDeleteBtnClicked }) => {
  return (
    <div className="card">
      <div>
        heading: {card.heading}
        <button onClick={(event) => cardDeleteBtnClicked(event, card.id)}>
          delete
        </button>
        <Togglable buttonLabel0="more" buttonLabel1="less">
          <p>caption: {card.caption}</p>
          <p>additionalText: {card.additionalText}</p>
          <p>
            image link:{" "}
            <a target="_blank" href={card.imageLink}>
              open
            </a>
          </p>
        </Togglable>
      </div>
    </div>
  );
};

export default AboutPageCard;
