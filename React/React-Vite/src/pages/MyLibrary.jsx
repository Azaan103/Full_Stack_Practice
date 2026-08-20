import { useContext } from "react";
import GameContext from "../context/GameContext";

function MyLibrary() {

  // Get the user's library and library actions.
  const {
    library,
    onComplete,
    onDelete
  } = useContext(GameContext);


  // If the library has no games.
  if (library.length === 0) {
    return (
      <div>
        <h1>My Library</h1>
        <p>Your library is empty.</p>
      </div>
    );
  }


  return (

    <section className="games">

      <h1>My Library</h1>

      {library.map((game) => (

        <div className="game-card" key={game.id}>

          <img
            src={game.image}
            alt={game.title}
          />

          <h3>{game.title}</h3>

          <p>
            <strong>Genre:</strong> {game.genre}
          </p>

          <span className="status wishlist">
            {game.status}
          </span>

          <div className="buttons">

            <button
              className="complete-btn"
              onClick={() => onComplete(game.id)}
            >
              Mark Completed
            </button>

            <button
              className="delete-btn"
              onClick={() => onDelete(game.id)}
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </section>
  );
}

export default MyLibrary;