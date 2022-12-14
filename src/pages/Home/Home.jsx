import {
  Box,
  Divider,
  Grid,
  Typography,
  Skeleton,
  Button,
} from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/roboto";
import { bgColour, minHeight } from "../../components/consts/navbarItems";
const Home = () => {
  return (
    <>
      <Box>
        <Grid
          container
          sx={{
            minHeight: `${minHeight}`,
            alignItems: "center",
            backgroundColor: `${bgColour}`,
            pl: { xs: 0, md: 10 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "2rem", sm: "3rem" },
                p: 0,
                width: { xs: "100%", sm: "100%", md: "60%", ld: "60%" },
                lineHeight: 1.2,
              }}
            >
              DESIGNED FOR LITERATURE AND INDOORS
            </Typography>

            <Skeleton animation="wave" />
            <Typography
              sx={{
                fontsize: {
                  xs: "1rem",
                  sm: "1.5rem",
                  width: "50%",
                },
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ut
              neque debitis qui delectus? Dolorem?
            </Typography>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
