import { Grid, Divider, Typography, Box } from "@mui/material";
import React from "react";

import { grey } from "@mui/material/colors";
import QueriesOrMessageForm from "../../components/QueriesOrMessageForm";
import LetsConnect from "../../components/LetsConnect";
import Address from "../../components/Address";
import { bgColour, minHeight } from "../../components/consts/navbarItems";

const Contact = () => {
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ bgcolor: `${bgColour}`, minHeight: `${minHeight}` }}
    >
      <Grid item xs={12} md={4} sx={{ p: 2 }}>
        <LetsConnect />
      </Grid>

      <Grid item xs={12} md={4} justifyContent="center" p={2}>
        <QueriesOrMessageForm />
      </Grid>

      <Grid item xs={12} md={4} sx={{ p: 2 }}>
        <Address />
      </Grid>
    </Grid>
  );
};

export default Contact;
