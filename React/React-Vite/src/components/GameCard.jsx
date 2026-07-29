function GameCard() {
  return (
    <div className="game-card">
      <h3>Cyberpunk 2077</h3>

      <p><strong>Genre:</strong> RPG</p>

      <span className="status playing">
        Playing
      </span>

      <div className="buttons">
        <button className="complete-btn">
          Mark Completed
        </button>

        <button className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default GameCard;