import React from "react";
import { Button } from "@mui/material";

const PlayButton = ({ onClick, label }) => {
  return (
    <Button
      variant="contained"
      size="small"
      onClick={onClick}
      sx={{
        backgroundColor: "#fff",
        color: "primary.main",
        marginTop: "1rem",
        marginBottom: "1rem",
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
      {label}
    </Button>
  );
};

export default PlayButton;
