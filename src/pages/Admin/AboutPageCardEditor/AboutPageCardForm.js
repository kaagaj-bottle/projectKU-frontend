import React from "react";
import "./AboutPageCardForm.css";
const AboutPageCardForm = ({
  handleCardData,
  handleCardCreation,
  heading,
  caption,
  additionalText,
  imageLink,
}) => {
  return (
    <>
      <h4>Create new About Page Card</h4>
      <form onSubmit={handleCardCreation} className="card--form">
        <label htmlFor="heading">heading: </label>
        <input
          id="heading"
          type="text"
          name="heading"
          value={heading}
          onChange={handleCardData}
        />
        <br />
        <label htmlFor="caption">caption: </label>

        <input
          id="caption"
          type="text"
          name="caption"
          value={caption}
          onChange={handleCardData}
        />
        <br />
        <label htmlFor="additionalText">additional-text: </label>

        <input
          id="additionalText"
          type="text"
          name="additionalText"
          value={additionalText}
          onChange={handleCardData}
          rows="5"
          column="5"
        />
        <br />
        <label htmlFor="imageLink">image-link: </label>

        <input
          id="imageLink"
          type="text"
          name="imageLink"
          value={imageLink}
          onChange={handleCardData}
        />
        <br />
        <button type="submit">post</button>
      </form>
    </>
  );
};

export default AboutPageCardForm;
