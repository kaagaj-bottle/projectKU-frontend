import * as React from "react";
import logo from "../../images/logo.png";
import "./Navbar.css";
import { Avatar, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import navbarItems, { drawerColor } from "../consts/navbarItems";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { clubName, clubLogoLink } from "../consts/navbarItems";
import { Image } from "@mui/icons-material";
const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: `${drawerColor}`,
        minHeight: "100%",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        I<img src={logo} />
      </Typography>
      <Divider />
      <List>
        {navbarItems.map((item) => (
          <ListItem key={nanoid()} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={Link}
              to={item.route}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="static">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Box component={Link} to="/">
              <Box
                component="img"
                sx={{
                  maxHeight: { xs: "2rem", sm: "2rem", md: "3rem" },
                  pt: 1,
                }}
                alt="KU Indoors Logo"
                src={logo}
              />
            </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navbarItems.map((item) => (
              <Button
                key={nanoid()}
                component={Link}
                to={item.route}
                sx={{ color: "#fff" }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

export default Navbar;
