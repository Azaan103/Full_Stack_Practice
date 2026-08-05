function GameCard(props) {
  console.log(props);
  return (
    <div className="game-card">
      <h3>{props.title}</h3>

      <p><strong>Genre:</strong> {props.genre}</p>

      <span className="status playing">
        {props.status}
      </span>

      <div className="buttons">
        <button className="complete-btn">
          Mark Completed
        </button>

        <button 
          className="delete-btn"
          onClick={() => props.onDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default GameCard;