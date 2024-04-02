import { useEffect } from 'react';
import NavBar from './components/NavBar';

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

const App = () => {
  useEffect(() => {
    alert("hello pokemon trainer :)");
  }, []);


  const handlePokemonSelection = (pokemonName) => {
    if (pokemonName === "pikachu") {
      alert("pika pikachu !!!");
    }
  };

  return (
    <div className="app">
      <NavBar 
        pokemonList={pokemonList}
        onPokemonSelection={handlePokemonSelection}
      />
    </div>
  );
};

export default App;
