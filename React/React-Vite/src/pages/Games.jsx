import Header from "../components/Header";
import GameList from "../components/Gamelist";

import { useEffect, useMemo, useState } from "react";

import SearchBar from "../components/SearchBar";
import GameFilter from "../components/gameFilter";

import { getGames } from "../services/gameApi";

function Games() {

  const [games, setGames] = useState([]);

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  useEffect(() => {

    async function loadGames() {

      try {

        const data = await getGames();

        const formattedGames = data.map((game) => ({
          id: game.id,
          title: game.title,
          genre: game.genre,
          image: game.thumbnail
        }));

        setGames(formattedGames);

      } catch (error) {

        setError(error);

      } finally {

        setLoading(false);

      }
    }

    loadGames();

  }, []);


  const filteredGame = useMemo(() => {

    return games.filter((game) =>
      game.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  }, [games, search]);


  return (
    <>
      <Header totalGames={games.length} />

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
        loading={loading}
        error={error}
      />
    </>
  );
}

export default Games;