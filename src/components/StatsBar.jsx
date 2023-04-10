import React from "react";
import { Box, LinearProgress, Typography } from "@mui/material";

const StatsBar = ({ label, value, maxValue }) => {
  const progress = Math.round((value / maxValue) * 100);
  let color;
  if (progress < 50) {
    color = "warning";
  } else {
    color = "success";
  }

  return (
    <Box mb="1rem">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography gutterBottom variant="body1" component="div">
          {label}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {value}
        </Typography>
      </Box>
      <LinearProgress color={color} variant="determinate" value={progress} />
    </Box>
  );
};

export default StatsBar;
