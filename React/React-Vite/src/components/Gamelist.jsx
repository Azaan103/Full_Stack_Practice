import GameCard from "./GameCard";
import { useContext, useState } from "react";
import GameContext from "../context/GameContext";

function Gamelist({games}) {
    const {onDelete,onComplete,loading,error} = useContext(GameContext)
      if(loading){
                    return(
                        <p>Laoding Games....</p>
                    )
                }
    if(error){
        return(
            <p>Error.{error}</p>
        )
    }
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
             
