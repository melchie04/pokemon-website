import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { usePokemonContext } from "../context/ContextProvider";
import { types, statNames } from "../utils/Constants";
import {
  capitalizeFirstLetter,
  convertDecimetersToFeet,
  convertKilogramsToPounds,
} from "../utils/Functions";
import CustomBox from "../components/CustomBox";
import StatsBar from "../components/StatsBar";
import { Link } from "react-router-dom";

const Pokemon = () => {
  const { pokemon } = usePokemonContext();

  return (
    <CustomBox>
      <CustomBox
        sx={{
          backgroundColor: "#fff",
          margin: "2rem",
          boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.4)",
          borderRadius: "10px",
          width: { xs: "100%", sm: "75%", md: "50%" },
          position: "relative",
        }}
      >
        <Link to="/">
          <IconButton
            aria-label="back"
            sx={{
              color: "primary.main",
              position: "absolute",
              top: "10px",
              left: "10px",
            }}
          >
            <ArrowBack />
          </IconButton>
        </Link>
        <CustomBox
          sx={{ borderBottom: "2px solid", borderColor: "secondary.main" }}
        >
          {pokemon.sprites.front_default ? (
            <img src={pokemon.sprites.front_default} alt="" />
          ) : (
            <img src={empty} alt="" />
          )}
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontFamily="Fredoka"
          >
            {pokemon.name.toUpperCase()}
          </Typography>
          <Box display="flex" justifyContent="center">
            {pokemon.types.map((item, index) => (
              <Box
                key={index}
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                p="3px 20px"
                mx="1rem"
                backgroundColor={types[item.type.name.toLowerCase()]}
                borderRadius="5px"
              >
                <span style={{ color: "#fff", fontSize: "10px" }}>
                  {item.type.name.toUpperCase()}
                </span>
              </Box>
            ))}
          </Box>
        </CustomBox>
        <CustomBox
          sx={{
            borderBottom: "2px solid",
            borderColor: "secondary.main",
          }}
        >
          <Box textAlign="left" width="100%">
            <Typography gutterBottom variant="body1" component="div">
              Height: {convertDecimetersToFeet(pokemon.height)}
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              Weight: {convertKilogramsToPounds(pokemon.weight)}lbs
            </Typography>
            <Typography gutterBottom variant="body1" component="div">
              <span>Abilities: </span>
              {pokemon.abilities.map((item, index) => (
                <span key={index}>
                  {capitalizeFirstLetter(item.ability.name)}
                  {index < pokemon.abilities.length - 1 ? ", " : ""}
                </span>
              ))}
            </Typography>
          </Box>
        </CustomBox>
        <CustomBox>
          <Typography gutterBottom variant="h6" component="div">
            Stats:
          </Typography>
          <Box textAlign="left" width="100%">
            {pokemon.stats.map((item, index) => (
              <StatsBar
                label={statNames[item.stat.name]}
                value={item.base_stat}
                maxValue={255}
                key={index}
              />
            ))}
          </Box>
        </CustomBox>
      </CustomBox>
    </CustomBox>
  );
};

export default Pokemon;
