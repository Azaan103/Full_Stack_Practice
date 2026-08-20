import { useContext } from "react";
import GameContext from "../context/GameContext";

function GameCard(props) {

  const { library } = useContext(GameContext);
  const isInLibrary = library.some((game) => game.id === props.id);

  return (
    <div className="game-card">

      <div className="game-card-media">
        <img
          src={props.image}
          alt={props.title}
          loading="lazy"
        />
      </div>

      <div className="game-card-body">
        <h3>{props.title}</h3>

        <span className="game-card-genre">{props.genre}</span>

        <div className="buttons">
          <button
            className={isInLibrary ? "add-btn added" : "add-btn"}
            onClick={() => props.onAddToLibrary(props)}
            disabled={isInLibrary}
          >
            {isInLibrary ? "✓ Added to Library" : "Add to Library"}
          </button>
        </div>
      </div>

    </div>
  );
}

export default GameCard;