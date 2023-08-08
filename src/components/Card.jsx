import React from "react";
import './card.css'

function Card(props) {
  const pokemon = props.pokemon
  let pokemonColor = []

  const pokemonTypes = pokemon?.map(pokemon => pokemon.data.types)

  pokemonTypes.map(pokemon => {
    pokemonColor.push(pokemon[0].type.name)
  })

  const pokemonColorByType = pokemonColor.map(type => type)

  // pokemonTypes.map(types => {
    
  //   types.map(type => {
  //     console.log(type)
  //   })    
  // })

  const backgroundImageColor = (types) => {
    const typeCase = types.map(type => console.log(type))
    switch (typeCase[0]) {
      case 'grass':
        return '#2d6a4f';
      case 'fire':
        return '#e63946';
      case 'water':
        return '#0077b6';
      case 'fly':
        return '#dda15e';
      case 'bug':
        return '#06d6a0';
      case 'poison':
        return '#8338ec';
      case 'normal':
        return '#dda15e';
      default:
        return '#444'; // Cor padrão, caso não haja correspondência
    }
  };

  
  return (
    <>
      <div className="card-container">
        {pokemon?.map(pokemon => (
      <div className="card">
        {/* {
          pokemonTypes.map(pokemon => {
            pokemonColor.push(pokemon[0].type.name)
          })
        } */}
      <img src={pokemon.data?.sprites?.front_default} alt={pokemon.data.name} style={{backgroundColor: backgroundImageColor(pokemonColorByType)}}/>
        <b>N: {pokemon.data.id}</b>
        <h2>{pokemon.data.name}</h2>
        <span>Types:</span>
        <ul>
        {pokemon.data.types?.map(types => (
                  <>
                  <li>{types.type.name}</li>
                  </>
                ) )}
        </ul>
      </div>

        ))}
    </div>
    </>
  );
}

export default Card;
