import GameCard from "./GameCard";
import { useState } from "react";

function Gamelist({games, onDelete}) {
  return (
    <section className="games">

        {games.map((game) => {
            return (
               <GameCard
               key =  { game.id } 
               { ...game}
               onDelete={onDelete} />
            );
        })}

    </section>
);
}


export default Gamelist  
             
