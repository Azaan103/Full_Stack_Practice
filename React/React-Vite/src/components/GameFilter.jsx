
function GameFilter({ statusFilter, setStatusFilter }) {
  return (
    <div className="game-filter">
      <label htmlFor="game-status-filter">
        Filter by status:
      </label>

      <select
        id="game-status-filter"
        className="game-status-select"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All Games</option>
        <option value="Playing">Playing</option>
        <option value="Completed">Completed</option>
        <option value="Wishlist">Wishlist</option>
      </select>
    </div>
  );
}

export default GameFilter;
