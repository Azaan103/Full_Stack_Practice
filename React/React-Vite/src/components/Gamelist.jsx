import GameCard from "./GameCard";
import { useState } from "react";

function Gamelist({games, onDelete, onComplete}) {
  return (
    <section className="games">

        {games.map((game) => {
            return (
               <GameCard
               key =  { game.id } 
               { ...game}
               onDelete={onDelete} 
               onComplete={onComplete}
               />
            );
        })}

    </section>
);
}


export default Gamelist  
             
