import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { usePokemonContext } from "../context/ContextProvider";
import CustomBox from "../components/CustomBox";
import Pokeball from "../components/Pokeball";
import PokeText from "../components/PokeText";
import RandomPokemon from "../components/RandomPokemon";
import pokemonBG from "../assets/images/pokemon-bg.jpg";
import sound from "../assets/audio/whos-that-pokemon.mp3";

const Gameplay = () => {
  const { randomPokemon, getRandomPokemon } = usePokemonContext();
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
  const [game, setGame] = useState({ play: false, label: "PLAY" });
  const [imgLoading, setImgLoading] = useState(true);

  const handleImageLoad = () => {
    setImgLoading(false);
  };

  const playMusic = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  const handleClickPlay = () => {
    if (game.play && game.label === "STOP") {
      setGame({ play: false, label: "PLAY" });
      setLoading(true);
      setAnswer("");
      setResult("");
    } else {
      setGame({ play: true, label: "STOP" });
      startGame();
    }
  };

  const startGame = () => {
    setLoading(true);
    setAnswer("");
    setResult("");
    getRandomPokemon();
    setTimeout(() => {
      playMusic();
      setLoading(false);
    }, 2000);
  };

  const handleClickAnswer = (name) => {
    setAnswer(name);
    if (name === randomPokemon.correct.name) {
      setResult("correct");
    } else {
      setResult("incorrect");
    }
    setTimeout(() => {
      startGame();
    }, 2000);
  };

  const getBackgroundColor = (name) => {
    if (answer === name) {
      if (result === "correct") {
        return "#00c853";
      }
      if (result === "incorrect") {
        return "#f44336";
      }
    }
    if (result === "incorrect" && randomPokemon.correct.name === name) {
      return "#00c853";
    }
    return "#fff";
  };

  const getColor = (name) => {
    if (answer === name) {
      if (result !== "") {
        return "#fff";
      }
    }
    if (result === "incorrect" && randomPokemon.correct.name === name) {
      return "#fff";
    }
    return "primary.main";
  };

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
        p="15px"
        borderRadius="5px"
        mt="1rem"
      >
        <img
          src={pokemonBG}
          alt="gameplay_background"
          width="100%"
          height="100%"
          onLoad={handleImageLoad}
          style={{
            visibility: imgLoading ? "hidden" : "visible",
          }}
        />
        {imgLoading ? null : (
          <PokeText
            style={{
              position: "absolute",
              top: "22%",
              right: "15%",
            }}
          />
        )}
        {loading || game.play === false ? (
          <>
            {imgLoading ? null : (
              <Pokeball
                style={{
                  position: "absolute",
                  top: "40%",
                  left: "22%",
                }}
              />
            )}
          </>
        ) : null}
        {game.play ? (
          <>
            {loading ? null : (
              <RandomPokemon
                randomImage={randomPokemon?.correct?.image}
                style={{
                  filter: result === "" ? "brightness(0)" : null,
                  transition: "filter .5s ease-out",
                  position: "absolute",
                  top: "28%",
                  left: "14%",
                }}
              />
            )}
          </>
        ) : null}
        {imgLoading ? null : (
          <Button
            variant="contained"
            size="small"
            onClick={handleClickPlay}
            sx={{
              backgroundColor: "#fff",
              color: "primary.main",
              marginTop: "1rem",
              width: "200px",
              fontFamily: "Fredoka",
              borderRadius: "9999px",
              boxShadow: "0px 0px 5px #0077FF",
              "&:hover": {
                backgroundColor: "#fff",
                boxShadow: "0px 0px 10px #0077FF",
              },
            }}
          >
            {game.label}
          </Button>
        )}
      </Box>
      {game.play ? (
        <>
          {loading ? null : (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
              }}
            >
              {randomPokemon?.pokemonChoices?.map((choice) => (
                <Button
                  key={choice.name}
                  variant="contained"
                  size="small"
                  onClick={() => handleClickAnswer(choice.name)}
                  sx={{
                    backgroundColor: getBackgroundColor(choice.name),
                    color: getColor(choice.name),
                    marginTop: "1rem",
                    width: "45%",
                    fontFamily: "Fredoka",
                    boxShadow: "0px 0px 5px #000",
                    "&:hover": {
                      backgroundColor: getBackgroundColor(choice.name),
                      boxShadow: "0px 0px 5px #000",
                    },
                  }}
                >
                  {choice.name}
                </Button>
              ))}
            </Box>
          )}
        </>
      ) : null}
    </CustomBox>
  );
};

export default Gameplay;
