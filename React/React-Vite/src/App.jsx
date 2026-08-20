import { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Games from "./pages/Games";
import GameDetails from "./pages/GameDetails";
import MyLibrary from "./pages/MyLibrary";

import GameContext from "./context/GameContext";

function App() {

  // Stores only the games the user has added to their library.
  const [library, setLibrary] = useState([]);


  // Adds a game to the user's library.
  function addToLibrary(game) {

    // Check whether the game is already in the library.
    const alreadyExists = library.some(
      (libraryGame) => libraryGame.id === game.id
    );

    // Don't add duplicates.
    if (alreadyExists) {
      return;
    }

    // Add the game to the library.
    setLibrary([
      ...library,
      {
        id: game.id,
        title: game.title,
        genre: game.genre,
        image: game.image,
        status: "Wishlist"
      }
    ]);
  }


  // Changes a library game's status to Completed.
  function completeGame(id) {

    const completedLibrary = library.map((game) => {

      if (game.id === id) {
        return {
          ...game,
          status: "Completed"
        };
      }

      return game;
    });

    setLibrary(completedLibrary);
  }


  // Removes a game from the user's library.
  function handleDeleteGame(id) {

    const updatedLibrary = library.filter(
      (game) => game.id !== id
    );

    setLibrary(updatedLibrary);
  }


  return (

    <GameContext.Provider
      value={{
        // User's personal library.
        library,
        setLibrary,

        // Library actions.
        onAddToLibrary: addToLibrary,
        onDelete: handleDeleteGame,
        onComplete: completeGame
      }}
    >

      <BrowserRouter>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/games">Games</Link>
          <Link to="/library">My Library</Link>
        </nav>


        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/games" element={<Games />} />

          <Route path="/library" element={<MyLibrary />} />

          <Route
            path="/gamedetail/:id"
            element={<GameDetails />}
          />

        </Routes>

      </BrowserRouter>

    </GameContext.Provider>
  );
}

export default App;