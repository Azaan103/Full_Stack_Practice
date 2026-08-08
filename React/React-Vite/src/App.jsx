import Header from "./components/Header";
import AddGameForm from "./components/AddGameForm";
import GameList from "./components/Gamelist";
import { useEffect, useState } from "react";

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



  return (
    <>
      <Header totalGames={games.length} />

      <AddGameForm
        games={games}
        setGames={setGames}
      />

      <GameList
        games={games}
        onDelete={handleDeleteGame}
        onComplete={completeGame}
      />
    </>
  );
}

export default App;