import Header from "./components/Header"
import AddGameForm from "./components/AddGameForm"
import GameList from "./components/Gamelist"
import { useState } from "react";

function App() {

  const [games,setGames] = useState ([
  {
    id:1,
    title: "Cyberpunk 2075",
    genre: "RPG",
    status: "Playing"
  },
  {
    id:2,
    title: "GTA V",
    genre: "Action",
    status: "Completed"
  },
  {
    id:3,
    title: "Minecraft",
    genre: "Sandbox",
    status: "Wishlist"
  }
]
);
function handleDeleteGame(id) {
 const updatedgamelist = games.filter((game)=> game.id != id)
 setGames(updatedgamelist)
}
  return (
     <>
      <Header />
      <AddGameForm 
      games = {games} 
      setGames = {setGames}
      />

      <GameList   
      games = {games}
      onDelete = {handleDeleteGame} />
    </>
  )
}

export default App
