import React from "react";
import { Grid, Typography, Paper, Divider } from "@mui/material";
import { useState } from "react";
const Address = () => {
  const paddingBottom = 2;
  const myStyle = {
    fontSize: { xs: "1rem", md: "1.2rem" },
    fontWeight: "bold",
  };

  const [clubEmail, setClubEmail] = useState("demo@ku.edu.np");
  return (
    <>
      <Grid container justifyContent="center">
        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.8rem" },
            fontStyle: "italic",
          }}
        >
          Visit Us Here!
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
        <Grid item xs={12}>
          <Typography paragraph textAlign="center">
            <Typography sx={myStyle} variant="string">
              Address:
            </Typography>
            <Typography component="span">Kathmandu University</Typography>
            <br />
            <Typography component="span">Dhulikhel, Kavre</Typography>
            <br />
            <Typography component="span">Bagmati Pradesh, Nepal</Typography>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography paragraph textAlign="center">
            <Typography sx={myStyle} component="span">
              Email:
            </Typography>
            <br />
            <Typography component="span">{clubEmail}</Typography>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Address;
