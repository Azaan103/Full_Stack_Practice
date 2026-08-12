import GameCard from "./GameCard";
import { useContext, useState } from "react";
import GameContext from "../context/GameContext";

function Gamelist({games}) {
    const {onDelete,onComplete} = useContext(GameContext)
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
             
