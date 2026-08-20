import GameCard from "./GameCard";
import { useContext } from "react";
import GameContext from "../context/GameContext";

function Gamelist({ games, loading, error }) {

  const { onAddToLibrary } = useContext(GameContext);

  if (loading) {
    return <p>Loading Games....</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <section className="games">

      {games.map((game) => (

        <GameCard
          key={game.id}
          {...game}
          onAddToLibrary={onAddToLibrary}
        />

      ))}

    </section>
  );
}

export default Gamelist;