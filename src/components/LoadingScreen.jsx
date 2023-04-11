import React from "react";
import { Box } from "@mui/material";
import loader1 from "../assets/images/loader-1.gif";
import loader2 from "../assets/images/loader-2.gif";
import loader3 from "../assets/images/loader-3.gif";
import loader4 from "../assets/images/loader-4.gif";
import loader5 from "../assets/images/loader-5.gif";

const LoadingScreen = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      position="relative"
    >
      <img src={loader1} alt="loader-1" width="13%" height="auto" />
      <img src={loader2} alt="loader-2" width="13%" height="auto" />
      <img src={loader3} alt="loader-3" width="13%" height="auto" />
      <img src={loader4} alt="loader-4" width="13%" height="auto" />
      <img src={loader5} alt="loader-5" width="13%" height="auto" />
    </Box>
  );
};

export default LoadingScreen;
