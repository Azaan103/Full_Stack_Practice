import Header from "./components/Header";
import AddGameForm from "./components/AddGameForm";
import GameList from "./components/Gamelist";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {

  const [games, setGames] = useState(()=>{
     // Load games when app starts
    const savedGames = localStorage.getItem("games");

    if (savedGames) {
      return (JSON.parse(savedGames));
    }
    [
    {
      id: 1,
      title: "Cyberpunk 2075",
      genre: "RPG",
      status: "Playing"
    },
    {
      id: 2,
      title: "GTA V",
      genre: "Action",
      status: "Completed"
    },
    {
      id: 3,
      title: "Minecraft",
      genre: "Sandbox",
      status: "Wishlist"
    }
    
  ]
  })
    // Save games whenever games changes
  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(games));
  }, [games]);

  const [search, setSearch] = useState("");
  console.log(search)
 

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
  
   const filteredGame = games.filter((game)=> game.title.toLowerCase().includes(search.toLowerCase()) )

  return (
    <>
      <Header totalGames={games.length} />
    
      <AddGameForm
        games={games}
        setGames={setGames}
      />
      <SearchBar
      search={search}
      setSearch={setSearch}/>
      <GameList
        games={filteredGame}
        onDelete={handleDeleteGame}
        onComplete={completeGame}
      />
    </>
  );
}

export default App;