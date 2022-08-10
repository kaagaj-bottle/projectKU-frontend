import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
const LetsConnect = () => {
  const [socialMediaUrls, setSocialMediaUrls] = useState({
    facebookUrl: "",
    twitterUrl: "",
    instagram: "",
  });
  const paddingBottom = 2;
  const iconSize = "3rem";
  const handleIconButtons = (event, url) => {
    event.preventDefault();
    window.open(url);
  };
  return (
    <>
      <Grid container justifyContent="center">
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.8rem" },
            fontStyle: "italic",
          }}
        >
          Let's Connect
        </Typography>
      </Grid>
      <Grid
        container
        sx={{
          pt: paddingBottom,
        }}
        justifyContent="center"
        component={Paper}
      >
        <Grid container justifyContent="center">
          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.4rem" },
            }}
          >
            Connect With Us On:
          </Typography>
        </Grid>
        <Grid container justifyContent="center" p={5}>
          <button
            target="_blank"
            onClick={(event) => {
              handleIconButtons(event, socialMediaUrls.facebookUrl);
            }}
          >
            <FacebookIcon sx={{ fontSize: `${iconSize}` }} />
          </button>
          <button
            target="_blank"
            onClick={(event) => {
              handleIconButtons(event, socialMediaUrls.twitterUrl);
            }}
          >
            <TwitterIcon sx={{ fontSize: `${iconSize}` }} />
          </button>
          <button
            target="_blank"
            onClick={(event) => {
              handleIconButtons(event, socialMediaUrls.instagramUrl);
            }}
          >
            <InstagramIcon sx={{ fontSize: `${iconSize}` }} />
          </button>
        </Grid>
      </Grid>
    </>
  );
};

export default LetsConnect;
