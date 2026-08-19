import Header from "../components/Header";
import AddGameForm from "../components/AddGameForm";
import GameList from "../components/Gamelist";
import { useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import GameFilter from "../components/gameFilter";
import useLocalStorage from "../hooks/useLocalStorage";
import GameContext from "../context/GameContext";
import { getGames } from "../services/gameApi";

function Games() {

  const [games, setGames] = useState([]);
  const [library, setlibrary] = useState([]);


  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(() => {
    async function loadgames() {
      const data = await getGames();
      
try{
const formattedGames = data.map((game) => ({
        id: game.id,
        title: game.title,
        genre: game.genre,
        image: game.thumbnail
      }));

      setGames(formattedGames);
      return data;
}
      catch(error){
        setError(true)
      }
      finally{
        setLoading(false);
      }
    }
    loadgames()
  }, [])

  function completeGame(id) {
    const completedGame = games.map((game) => {
      if (game.id == id) {
        return {
          ...game,
          status: "Completed"
        };
      }

      return game;
    });

    setGames(completedGame);
  }

  function handleDeleteGame(id) {
    const updatedGameList = games.filter((game) => game.id != id);
    setGames(updatedGameList);
  }

  const filteredGame = useMemo(() => {
    return games.filter((game) =>
      game.title.toLowerCase().includes(search.toLowerCase()) &&
      (game.status === statusFilter || statusFilter === "All")
    );
  }, [games, search, statusFilter]);

  return (
    <GameContext.Provider
      value={{
        games,
        setGames,
        onDelete: handleDeleteGame,
        onComplete: completeGame,
        loading,
        setLoading,
        error,
        setError
      }}
    >
      <Header totalGames={games.length} />

      <AddGameForm />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <GameFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <GameList
        games={filteredGame}
      />
    </GameContext.Provider>
  );
}

export default Games;