import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent } from "@mui/material";
import { usePokemonContext } from "../context/ContextProvider";
import empty from "../assets/images/empty.png";

const PokemonCard = ({ pokemon }) => {
  const { setPokemon } = usePokemonContext();

  const handleCardClick = () => {
    setPokemon(pokemon);
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        margin: "10px",
        width: "200px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: "2px solid",
        borderBottom: "2px solid",
        borderColor: "secondary.main",
        cursor: "pointer",
        boxShadow: "0px 3px 5px 0px rgba(0,0,0,0.4)",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 4px 6px 0px rgba(0,0,0,0.6)",
          transform: "scale(1.05)",
        },
      }}
    >
      <Link to={`/pokemon/${pokemon.id}`}>
        <CardContent sx={{ textAlign: "center" }}>
          {pokemon.sprites.front_default ? (
            <img src={pokemon.sprites.front_default} alt="" />
          ) : (
            <img src={empty} alt="" />
          )}
          <Typography gutterBottom variant="body2" component="div" color="#000">
            {pokemon.name.toUpperCase()}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PokemonCard;
