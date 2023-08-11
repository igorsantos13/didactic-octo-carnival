import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "../components/pokemonInfo.css";

function PokemonInfo() {
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const { pokemonName } = useParams();
  let location = useLocation();
  console.log(location);

  const getPokemonData = (pokemonName) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((res) => res.json())
      .then((data) => setPokemonDetails(data));
  };

  useEffect(() => {
    getPokemonData(pokemonName);
  }, []);

  return (
    <div className="pokemon-info-container">
      <div className="main">
        <b>
          N:{" "}
          {`${
            pokemonDetails.id < 10
              ? `#00${pokemonDetails.id}`
              : `#0${pokemonDetails.id}`
          }`}
        </b>
        <img
          src={pokemonDetails.sprites?.front_default}
          alt={pokemonDetails.name}
        />
        <h2>{pokemonDetails.name}</h2>
      </div>
      <div className="info">
        <div className="stats">
          <span>Stats:</span>
          <ul>
            {pokemonDetails.stats?.map((stat) => (
              <>
                <li>
                  {stat.stat.name.charAt(0).toUpperCase() +
                    stat.stat.name.slice(1)}
                </li>
                <b>{stat.base_stat}</b>
              </>
            ))}
          </ul>
        </div>

        <div className="ability">
          <span>Abilities:</span>
          <ul>
            {pokemonDetails.abilities?.map((abilitiy) => (
              <>
                <li>{abilitiy.ability.name}</li>
              </>
            ))}
          </ul>
        </div>

        <div className="other">
          <span>
            Weight: <b>{pokemonDetails.weight / 10}Kg</b>
          </span>
          <br />
          <span>
            Height: <b>{pokemonDetails.height / 10}M</b>
          </span>
        </div>
      </div>
    </div>
  );
}
export default PokemonInfo;
