import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Pokedex from "./pages/Pokedex";
import Gameplay from "./pages/Gameplay";
import Pokemon from "./pages/Pokemon";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/gameplay" element={<Gameplay />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
