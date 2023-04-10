import React from "react";
import pokeapi from "../assets/icons/pokeapi.png";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        fontWeight: "light",
        padding: "2rem",
      }}
    >
      <p style={{ paddingBottom: "10px" }}>
        © 2023 PokeWeb. All Rights Reserved.
      </p>
      <p style={{ paddingBottom: "10px" }}>
        <span>Data provided by </span>
        <a href="https://pokeapi.co/" target="_blank">
          <img
            src={pokeapi}
            alt="pokeAPI"
            height="20px"
            style={{ marginBottom: "-4px" }}
          />
        </a>
      </p>
      <p style={{ color: "#999999" }}>Developed by Melchor Bendanillo Callos</p>
    </footer>
  );
};

export default Footer;
