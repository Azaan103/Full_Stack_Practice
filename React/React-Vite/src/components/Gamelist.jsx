import GameCard from "./GameCard";
const games = [
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
];

function Gamelist(){
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
             