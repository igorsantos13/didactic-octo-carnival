import { useEffect, useState } from 'react'

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemon, setPokemon] = useState([])
  const [pokemonAbilities, setPokemonAbilities] = useState([])

  const handleSinglePokemon = (pokemon) => {
    
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res=>res.json())
      .then(data => {
        setPokemon(data);
        setPokemonAbilities(data.abilities)
      })
      
  }

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => setPokemonList(data.results))
  }, [])

  return (
    <>
      <h1>pokedex</h1>

      <ul>
        {pokemonList.map(pokemon => (
          <li key={pokemon.name} style={{cursor: 'pointer'}} onClick={()=> handleSinglePokemon(pokemon.name)}>{pokemon.name}</li>
        ))}
      </ul>

      
        {pokemon ? (
          <div>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
            <div>
              <h3>Abilities</h3>
              <ul>
                {pokemonAbilities?.map(ab => (
                  <li>{ab.ability.name}</li>
                ))}
              </ul>
              <h3>Stats</h3>
              <ul>
                <li>Weight {pokemon.weight}</li>
                <h3>Types:</h3>
                {pokemon.types.map(types => (
                  <>
                  <li>{types.type.name}</li>
                  </>
                ) )}
                
              </ul>
            </div>
          </div>
        ):
        (<h1> </h1>)
      }
      
    </>
  )
}

export default App
