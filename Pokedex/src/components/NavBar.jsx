const NavBar = ({ onPreviousClick, onNextClick }) => {
  return (
    <div className="navbar">
      <button onClick={onPreviousClick}>Précédent</button>
      <button onClick={onNextClick}>Suivant</button>
    </div>
  );
}

export default NavBar;
