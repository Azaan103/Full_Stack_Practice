import GameCard from "./GameCard";
import { useContext } from "react";
import GameContext from "../context/GameContext";

const SKELETON_COUNT = 8;

function Gamelist({ games, loading, error }) {

  const { onAddToLibrary } = useContext(GameContext);

  if (loading) {
    return (
      <section className="games">
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <div className="skeleton-card" key={i}>
            <div className="skeleton-media" />
            <div className="skeleton-body">
              <div className="skeleton-line w-70" />
              <div className="skeleton-line w-40" />
              <div className="skeleton-line w-100" />
            </div>
          </div>
        ))}
      </section>
    );
  }

  if (error) {
    return (
      <section className="games">
        <div className="error-state">
          <div className="error-state-icon">⚠</div>
          <h3>Couldn't load games</h3>
          <p>{error.message || "Something went wrong while fetching the catalog."}</p>
          <button
            type="button"
            className="error-retry-btn"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="games">

      {games.map((game, index) => (

        <div
          key={game.id}
          style={{ animationDelay: `${Math.min(index, 10) * 30}ms` }}
        >
          <GameCard
            {...game}
            onAddToLibrary={onAddToLibrary}
          />
        </div>

      ))}

    </section>
  );
}

export default Gamelist;