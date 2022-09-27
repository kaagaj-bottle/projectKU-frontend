import React from "react";
import AboutPageCardForm from "./AboutPageCardForm";
import AboutPageCard from "./AboutPageCard";
import aboutPageCardService from "../../../services/aboutPageCards";
import { useState, useEffect } from "react";
import "./Editor.css";
import { nanoid } from "nanoid";
const Editor = () => {
  const [aboutPageCards, setAboutPageCards] = useState([]);
  const [cardObj, setCardObj] = useState({
    heading: "",
    caption: "",
    additionalText: "",
    imageLink: "",
  });

  useEffect(() => {
    aboutPageCardService
      .getAll()
      .then((returnedObj) => {
        setAboutPageCards(returnedObj);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCardData = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setCardObj((prevCardObj) => {
      return { ...prevCardObj, [name]: value };
    });
  };

  const handleCardCreation = async (event) => {
    event.preventDefault();
    if (
      cardObj.heading &&
      cardObj.caption &&
      cardObj.additionalText &&
      cardObj.imageLink
    ) {
      try {
        const returnedCard = await aboutPageCardService.create(cardObj);
        setAboutPageCards((prevCards) => prevCards.concat(returnedCard));
        setCardObj({
          heading: "",
          caption: "",
          additionalText: "",
          imageLink: "",
        });
      } catch (exception) {
        console.log(exception);
      }
    }
  };

  const cardDeleteBtnClicked = async (event, id) => {
    event.preventDefault();
    try {
      await aboutPageCardService.remove(id);
      setAboutPageCards((prevCards) =>
        prevCards.filter((item) => {
          return item.id !== id;
        })
      );
    } catch (exception) {
      console.log(exception);
    }
  };

  return (
    <div className="about--page--cards--block">
      <AboutPageCardForm
        handleCardData={handleCardData}
        handleCardCreation={handleCardCreation}
        heading={cardObj.heading}
        caption={cardObj.caption}
        additionalText={cardObj.additionalText}
        imageLink={cardObj.imageLink}
      />
      {aboutPageCards.map((card) => (
        <AboutPageCard
          card={card}
          cardDeleteBtnClicked={cardDeleteBtnClicked}
          key={nanoid()}
        />
      ))}
    </div>
  );
};

export default Editor;
