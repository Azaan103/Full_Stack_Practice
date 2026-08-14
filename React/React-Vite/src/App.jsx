import {BrowserRouter, Link, Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Games from "./pages/Games"
import GameDetails from "./pages/GameDetails"

// latest version
function App() {

  return (
    <BrowserRouter>
    <nav>
        <Link to="/">Home</Link> 
        <Link to="/about">About</Link> 
        <Link to="/games">Games</Link>
    </nav>
   
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/gamedetail/:id" element={<GameDetails />} />

      </Routes>

       </BrowserRouter>

  )
   
}
export default App