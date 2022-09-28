import React from "react";
import "./AboutPageCardForm.css";
const AboutPageCardForm = ({
  handleCardData,
  handleCardCreation,
  heading,
  caption,
  additionalText,
  aboutPageCardImage,
  handleImage,
}) => {
  return (
    <>
      <h4>Create new About Page Card</h4>
      <form
        onSubmit={handleCardCreation}
        className="card--form"
        encType="multipart/form-data"
      >
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
        <label htmlFor="aboutPageCardImage">image-link: </label>

        <input
          id="aboutPageCardImage"
          type="file"
          name="aboutPageCardImage"
          accept="image/*"
          onChange={handleImage}
        />
        <br />
        <button type="submit">post</button>
      </form>
    </>
  );
};

export default AboutPageCardForm;
