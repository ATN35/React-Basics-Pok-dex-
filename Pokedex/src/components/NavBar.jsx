const NavBar = ({ pokemonList, onPokemonSelection }) => {
    return (
      <nav className="navbar">
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>
              <button onClick={() => onPokemonSelection(pokemon.name)}>
                {pokemon.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default NavBar;
  