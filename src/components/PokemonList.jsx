import React from "react";
import { Box } from "@mui/material";
import { usePokemonContext } from "../context/ContextProvider";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  const { pokemonList } = usePokemonContext();

  return (
    <Box
      mx={{ xs: "2%", sm: "10%" }}
      mt="3rem"
      mb="2rem"
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
    >
      {pokemonList.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </Box>
  );
};

export default PokemonList;
