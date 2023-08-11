import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./card.css";
import PokemonInfo from "../routes/PokemonInfo";

function Card(props) {
  const [hasInfo, setHasInfo] = useState(false);
  const pokemonList = props.pokemon;

  const cardClassName = (type) => {
    switch (type) {
      case "grass":
        return "grass";
      case "fire":
        return "fire";
      case "poison":
        return "poison";
      case "bug":
        return "bug";
      case "water":
        return "water";
      case "normal":
        return "normal";
      case "flying":
        return "flying";
      default:
        return ""; // Nenhuma classe para tipos não listados
    }
  };

  return (
    <div className="container">
      <div className="card-container">
        {pokemonList?.map((pokemon) => (
          <Link
            to={`/pokedex/${pokemon.data.name}`}
            onClick={() => setHasInfo(true)}
            key={pokemon.data.id}
          >
            <div className="card" key={pokemon.data.id}>
              <img
                key={pokemon.data.id}
                src={pokemon.data?.sprites?.front_default}
                className={`${cardClassName(pokemon.data.types[0].type.name)}`}
                alt={pokemon.data.name}
              />
              <b>
                N:{" "}
                {`${
                  pokemon.data.id < 10
                    ? `#00${pokemon.data.id}`
                    : `#0${pokemon.data.id}`
                }`}
              </b>
              <h2>
                {pokemon.data.name.charAt(0).toUpperCase() +
                  pokemon.data.name.slice(1)}
              </h2>
              <ul>
                {pokemon.data.types?.map((types) => (
                  <>
                    <li className={`${cardClassName(types.type.name)}`}>
                      <b>{types.type.name}</b>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </Link>
        ))}
      </div>
      {/* <PokemonInfo/> */}
    </div>
  );
}

export default Card;
