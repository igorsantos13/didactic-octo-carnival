import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PokemonInfo() {
  const [pokemonStats, setPokemonStats] = useState([])

  const { pokemonName } = useParams();

  console.log(pokemonName)
  // const getPokemonData = (pokemonName) => {
  //   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  //   .then(res => res.json())
  //   .then(data => setPokemonStats(data))
  // }

  // useEffect(() => {
  //   getPokemonData()
  // }, [])
  return (
    <div className="card-container">
      <h1>TESTE</h1>
      {/* <div className="card">
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
      </div> */}
    </div>
  )
}

export default PokemonInfo