import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { bgColour, cardInfo } from "../../components/consts/navbarItems";
import AboutCard from "../../components/CustomCards/AboutCard";
import { nanoid } from "nanoid";
import { minHeight } from "../../components/consts/navbarItems";
const AboutUs = () => {
  const myCards = () =>
    cardInfo.cardTitles.map((title, index) => {
      return (
        <AboutCard
          key={nanoid()}
          cardTitle={title}
          cardImageLink={cardInfo.imageLinks[index]}
          additionalCardText={cardInfo.additionalTexts[index]}
          cardText={cardInfo.cardText[index]}
        />
      );
    });
  return (
    <>
      <Grid
        container
        columnGap={7}
        rowGap={2}
        sx={{
          minHeight: `${minHeight}`,
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          pt: 1,
          bgcolor: `${bgColour}`,
        }}
      >
        {myCards()}
      </Grid>
    </>
  );
};

export default AboutUs;
