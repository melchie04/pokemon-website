import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import pokeweb from "../assets/icons/pokeweb.png";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontFamily: "Fredoka" }}>
        <Link to="/">
          <img
            src={pokeweb}
            alt="eatwell"
            width="30px"
            height="30px"
            style={{ marginBottom: "-6px", marginRight: "5px" }}
          />
          <span style={{ color: "#000" }}>PokeWeb</span>
        </Link>
      </Typography>
      <Divider />
      <List>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="POKEDEX" sx={{ color: "#000" }} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/gameplay">
          <ListItem disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary="GAMEPLAY" sx={{ color: "#000" }} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" position="static">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: "Fredoka",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            <Link to="/">
              <img
                src={pokeweb}
                alt="eatwell"
                width="30px"
                style={{ marginBottom: "-6px", marginRight: "5px" }}
              />
              <span style={{ color: "#fff" }}>PokeWeb</span>
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <Button sx={{ color: "#fff", fontFamily: "Fredoka" }}>
                Pokedex
              </Button>
            </Link>
            <Link to="/gameplay">
              <Button sx={{ color: "#fff", fontFamily: "Fredoka" }}>
                Gameplay
              </Button>
            </Link>
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
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
