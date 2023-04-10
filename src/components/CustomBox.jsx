import React from "react";
import { Box } from "@mui/material";

const CustomBox = ({ sx, children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      p="1rem"
      sx={sx}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
