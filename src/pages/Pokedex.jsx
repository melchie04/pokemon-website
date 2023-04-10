import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { usePokemonContext } from "../context/ContextProvider";
import CustomBox from "../components/CustomBox";
import SearchBox from "../components/SearchBox";
import PokemonList from "../components/PokemonList";
import pokemon from "../assets/icons/pokemon.png";
import pikachu from "../assets/images/pikachu.gif";

const Pokedex = () => {
  const [searchValue, setSearchValue] = useState("");
  const {
    loading,
    initializePokemonList,
    nextUrl,
    nextPokemonList,
    prevUrl,
    prevPokemonList,
    searchPokemon,
  } = usePokemonContext();

  const handleImgClick = () => {
    initializePokemonList();
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleSearchClick = () => {
    if (searchValue) {
      searchPokemon(searchValue);
    }
  };

  const handleNextButton = () => {
    setSearchValue("");
    nextPokemonList();
  };

  const handlePrevButton = () => {
    setSearchValue("");
    prevPokemonList();
  };

  return (
    <CustomBox>
      <img
        src={pokemon}
        width="200px"
        style={{ marginTop: "1rem", cursor: "pointer" }}
        onClick={handleImgClick}
      />
      <SearchBox
        value={searchValue}
        onChange={handleSearchChange}
        onKeyDown={handleSearchKeyDown}
        onClick={handleSearchClick}
      />
      {loading ? (
        <img
          src={pikachu}
          alt="loader"
          width="100px"
          style={{ margin: "2rem auto" }}
        />
      ) : (
        <PokemonList />
      )}
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosNew />}
          onClick={handlePrevButton}
          disabled={prevUrl ? false : true}
        >
          Prev
        </Button>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIos />}
          onClick={handleNextButton}
          disabled={nextUrl ? false : true}
        >
          Next
        </Button>
      </Box>
    </CustomBox>
  );
};

export default Pokedex;
