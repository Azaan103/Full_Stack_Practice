import { useContext, useMemo } from "react";
import GameContext from "../context/GameContext";
import EmptyState from "../components/EmptyState";

function MyLibrary() {

  // Get the user's library and library actions.
  const {
    library,
    onComplete,
    onDelete
  } = useContext(GameContext);

  const completedCount = useMemo(
    () => library.filter((game) => game.status === "Completed").length,
    [library]
  );

  // If the library has no games.
  if (library.length === 0) {
    return (
      <>
        <header className="page-hero">
          <span className="page-hero-eyebrow">Your Collection</span>
          <h1>My Library</h1>
          <p>Games you've saved from the catalog live here.</p>
        </header>

        <EmptyState />
      </>
    );
  }


  return (
    <>
      <header className="page-hero">
        <span className="page-hero-eyebrow">Your Collection</span>
        <h1>My Library</h1>
        <p>Track what you're playing, what's done, and what's still on your list.</p>

        <div className="library-stats">
          <div className="stat-pill">
            <strong>{library.length}</strong>
            <span>Total games</span>
          </div>
          <div className="stat-pill">
            <strong>{completedCount}</strong>
            <span>Completed</span>
          </div>
        </div>
      </header>

      <section className="games">

        {library.map((game) => (

          <div className="game-card" key={game.id}>

            <div className="game-card-media">
              <img
                src={game.image}
                alt={game.title}
                loading="lazy"
              />
            </div>

            <div className="game-card-body">
              <h3>{game.title}</h3>

              <span className="game-card-genre">{game.genre}</span>

              <span
                className={
                  "status " +
                  (game.status === "Completed"
                    ? "complete"
                    : game.status === "Playing"
                    ? "playing"
                    : "wishlist")
                }
              >
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
                  Remove
                </button>
              </div>
            </div>

          </div>

        ))}

      </section>
    </>
  );
}

export default MyLibrary;