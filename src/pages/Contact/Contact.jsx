import { Grid, Divider, Typography, Box } from "@mui/material";
import { borderBottom } from "@mui/system";
import React from "react";
import SayHiForm from "../../components/SayHiForm";
import { Paper } from "@mui/material";
import { grey } from "@mui/material/colors";
const Contact = () => {
  return (
    <Grid container justifyContent={"center"} sx={{ bgcolor: grey[400] }}>
      <Grid item xs={12} md={4} justifyContent="center" p={2}>
        <Grid container justifyContent="center">
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              fontStyle: "italic",
            }}
          >
            Any Queries or Message!
          </Typography>
        </Grid>
        <SayHiForm />
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        sx={{ borderRight: { xs: 1 }, borderBottom: { xs: 1, sm: 1, md: 0 } }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, odit
        impedit? Magni mollitia hic nemo atque! Labore ducimus, non fugiat
        mollitia repudiandae sapiente eligendi voluptas cum saepe earum, nam
        eaque!
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
