import React from 'react'

function PokemonInfo() {
  return (
    <div className="card-container">
      <div className="card">
      <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <b>N: {pokemon.id}</b>
        <h2>{pokemon.name}</h2>
        <span>Types:</span>
        <ul>
        {pokemon.types?.map(types => (
                  <>
                  <li>{types.type.name}</li>
                  </>
                ) )}
        </ul>
      </div>
    </div>
  )
}

export default PokemonInfo