import Header from "./components/Header"
import AddGameForm from "./components/AddGameForm"
import GameList from "./components/Gamelist"
import { useState } from "react";

function App() {

  const [games,setGames] = useState ([
  {
    title: "Cyberpunk 2075",
    genre: "RPG",
    status: "Playing"
  },
  {
    title: "GTA V",
    genre: "Action",
    status: "Completed"
  },
  {
    title: "Minecraft",
    genre: "Sandbox",
    status: "Wishlist"
  }
]);
  return (
     <>
      <Header />
      <AddGameForm 
      games = {games} 
      setGames = {setGames}/>

      <GameList   games = {games} />
    </>
  )
}

export default App
