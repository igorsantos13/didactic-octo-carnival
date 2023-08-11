import { useEffect, useState } from "react";
import Card from "../components/Card";
import "../app.css";
import axios from "axios";
import PokemonInfo from "./PokemonInfo";
import { Route, Routes } from "react-router-dom";

function App() {
  const [pokemons, setPokemons] = useState([]);

  const getPokemons = () => {
    let endpoints = [];
    for (let i = 1; i < 21; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Routes>
      <Route path="/" element={pokemons && <Card pokemon={pokemons} />} />
      <Route path="/pokedex:pokemonName" element={<PokemonInfo />} />
    </Routes>
  );
}

export default App;
