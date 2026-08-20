function GameCard(props) {

  return (
    <div className="game-card">

      <img
        src={props.image}
        alt={props.title}
      />

      <h3>{props.title}</h3>

      <p>
        <strong>Genre:</strong> {props.genre}
      </p>

      <div className="buttons">

        <button
          className="add-btn"
          onClick={() => props.onAddToLibrary(props)}
        >
          Add to Library
        </button>

      </div>

    </div>
  );
}

export default GameCard;