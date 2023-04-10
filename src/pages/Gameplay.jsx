import React from "react";
import { Box, Button } from "@mui/material";
import CustomBox from "../components/CustomBox";
import pokemonBG from "../assets/images/pokemon-bg.jpg";
import Pokeball from "../components/Pokeball";

const Gameplay = () => {
  return (
    <CustomBox>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor="#000"
        width={{ xs: "100%", sm: "75%", md: "50%" }}
        position="relative"
        p="10px"
        borderRadius="5px"
        mt="2rem"
      >
        <img
          src={pokemonBG}
          alt="gameplay_background"
          width="100%"
          height="100%"
        />
        <Pokeball
          style={{
            position: "absolute",
            top: "45%",
            left: "25%",
          }}
        />
        <Button
          variant="contained"
          sx={{ marginTop: "1rem", width: "200px", fontFamily: "Fredoka" }}
        >
          PLAY
        </Button>
      </Box>
    </CustomBox>
  );
};

export default Gameplay;
