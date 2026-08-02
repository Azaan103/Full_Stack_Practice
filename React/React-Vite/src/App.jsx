import Header from "./components/Header"
import AddGameForm from "./components/AddGameForm"
import GameList from "./components/Gamelist"


function App() {
  function Gamelist(){
  const [games,setgames] = useState ([
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
      <AddGameForm />
      <GameList />
    </>
  )
}

export default App
