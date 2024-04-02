const NavBar = ({ pokemonList, onPokemonClick }) => {
  return (
    <div className="nav-bar">
      {pokemonList.map((pokemon, index) => (
        <button key={index} onClick={() => onPokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
};

export default NavBar;
