import { Link } from "react-router-dom";

function EmptyState() {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">🎮</div>
      <h3>Your library is empty</h3>
      <p>Games you add from the catalog will show up here so you can track what you're playing, completed, or want to play next.</p>
      <Link to="/games" className="empty-state-link">
        Browse Games
      </Link>
    </div>
  );
}

export default EmptyState;