import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Pokedex from "./pages/Pokedex";
import Gameplay from "./pages/Gameplay";
import Pokemon from "./pages/Pokemon";
import Footer from "./layouts/Footer";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/gameplay" element={<Gameplay />} />
            <Route path="/pokemon/:id" element={<Pokemon />} />
          </Routes>
        </>
      )}
      <Footer />
    </>
  );
};

export default App;
