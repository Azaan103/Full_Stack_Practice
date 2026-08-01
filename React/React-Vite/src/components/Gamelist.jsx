import GameCard from "./GameCard";
import { useState } from "react";

function Gamelist(){
  const [games,setgames] = useState ([
  {
    title: "Cyberpunk 2077",
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
    <section className="games">

        {games.map((game) => {
            return (
               <GameCard {...game} />
            );
        })}

    </section>
);

}

export default Gamelist  
             