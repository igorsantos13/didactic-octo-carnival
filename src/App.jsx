import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./app.css";
import axios from "axios";

function App() {
  const [pokemons, setPokemons] = useState([])
  
  const getPokemons = () => {
    var endpoints = [];
    for (var i = 1; i < 200; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };
  

  useEffect(()=>{
    getPokemons()
  }, [])

  

  return (
    <div className="container">
      {/* {allPokemons?.map(pokemon => (<Card pokemon={pokemon}/>))} */}
    </div>
  );
}

export default App;
