import React from "react";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";
import poketext from "../assets/images/poketext.png";

const PokeText = ({ style }) => {
  return (
    <AnimatedText
      src={poketext}
      alt="poketext"
      width="40%"
      height="auto"
      style={style}
    />
  );
};

const beat = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const AnimatedText = styled("img")({
  animation: `${beat} 1s ease-in-out infinite`,
});

export default PokeText;
