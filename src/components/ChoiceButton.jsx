import React, { useState } from "react";
import { Button } from "@mui/material";

const ChoiceButton = ({
  randomPokemon,
  choice,
  result,
  setResult,
  score,
  setScore,
}) => {
  const [answer, setAnswer] = useState("");

  const handleClickAnswer = (name) => {
    setAnswer(name);
    if (name === randomPokemon.correct.name) {
      setResult("correct");
      setScore(score + 1);
    } else {
      setResult("incorrect");
      if (score !== 0) {
        setScore(score + 1);
      }
    }
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
    return "#fff";
  };

  const getColor = (name) => {
    if (answer === name) {
      if (result !== "") {
        return "#fff";
      }
    }
    return "primary.main";
  };

  return (
    <Button
      variant="contained"
      size="small"
      onClick={() => handleClickAnswer(choice.name)}
      sx={{
        backgroundColor: getBackgroundColor(choice.name),
        color: getColor(choice.name),
        marginTop: "1rem",
        width: "45%",
        fontFamily: "Fredoka",
        boxShadow: "0px 0px 5px #0077FF",
        "&:hover": {
          backgroundColor: getBackgroundColor(choice.name),
          boxShadow: "0px 0px 10px #0077FF",
        },
      }}
    >
      {choice.name}
    </Button>
  );
};

export default ChoiceButton;
