import React from "react";
import { styled } from "@mui/material/styles";

const RandomPokemon = ({ style, randomImage }) => {
  return (
    <AnimetedImage
      src={randomImage}
      alt="random"
      width="25%"
      height="auto"
      style={style}
    />
  );
};

const AnimetedImage = styled("img")({});

export default RandomPokemon;
