import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./card.css";

function Card(props) {
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
    <>
      <div className="card-container" >
        {pokemonList?.map((pokemon) => (
          <Link to={`/${pokemon.data.name}`}  key={pokemon.data.id}>
          <div className="card" key={pokemon.data.id} >
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
    </>
  );
}

export default Card;
