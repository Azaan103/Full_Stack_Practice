import GameCard from "./GameCard";
import { useState } from "react";


function Gamelist({games}) {
  return (
    <section className="games">

        {games.map((game) => {
            return (
               <GameCard
               key =  { game.title } 
               { ...game} />
            );
        })}

    </section>
);
}

export default Gamelist  
             