import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { bgColour, cardInfo } from "../../components/consts/navbarItems";
import AboutCard from "../../components/CustomCards/AboutCard";
import { nanoid } from "nanoid";
import { minHeight } from "../../components/consts/navbarItems";
import { useEffect, useState } from "react";
import aboutPageCardsService from "../../services/aboutPageCards";
import { WindowTwoTone } from "@mui/icons-material";

const AboutUs = () => {
  const [aboutPageCards, setAboutPageCards] = useState([]);

  useEffect(() => {
    aboutPageCardsService
      .getAll()
      .then((response) => {
        setAboutPageCards(response);
      })
      .catch((err) => console.log(err));
  }, []);
  const myCards = () =>
    aboutPageCards.map((item) => {
      return (
        <AboutCard
          key={nanoid()}
          heading={item.heading}
          image={item.image}
          additionalText={item.additionalText}
          caption={item.caption}
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
