import React from "react";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/styled-engine";
import pokeball from "../assets/images/pokeball.png";

const Pokeball = ({ style }) => {
  return (
    <AnimatedImage
      src={pokeball}
      alt="pokeball"
      width="10%"
      height="auto"
      style={style}
    />
  );
};

const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  80% { transform: rotate(0deg); }
  85% { transform: rotate(6deg); }
  95% { transform: rotate(-6deg); }
  100% { transform: rotate(0deg); }
`;

const AnimatedImage = styled("img")({
  animation: `${wiggle} 1.35s infinite`,
});

export default Pokeball;
