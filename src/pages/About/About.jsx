import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { cardInfo } from "../../components/consts/navbarItems";
import AboutCard from "../../components/CustomCards/AboutCard";
import { nanoid } from "nanoid";
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
          minHeight: "90vh",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          pt: 1,
        }}
      >
        {myCards()}
      </Grid>
    </>
  );
};

export default AboutUs;
