import { Grid, Divider, Typography, Box } from "@mui/material";
import { borderBottom } from "@mui/system";
import React from "react";

import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
import QueriesOrMessageForm from "../../components/QueriesOrMessageForm";
import LetsConnect from "../../components/LetsConnect";
const Contact = () => {
  const myMinHeight = "100vh";
  return (
    <Grid
      container
      justifyContent={"center"}
      sx={{ bgcolor: grey[400] }}
      minHeight="90vh"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        md={4}
        justifyContent="center"
        p={2}
        minHeight={myMinHeight}
      >
        <QueriesOrMessageForm />
      </Grid>

      <Grid item xs={12} md={4} sx={{ p: 2, mb: 20 }}>
        <LetsConnect />
      </Grid>

      <Grid item xs={12} md={4}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia quas
        sunt pariatur a amet! Earum nam quia iure nihil dicta natus delectus
        corrupti, magni, fuga facilis odit aliquid nesciunt neque.
      </Grid>
    </Grid>
  );
};

export default Contact;
