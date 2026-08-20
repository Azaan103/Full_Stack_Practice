function Header({ totalGames }) {

  return (
    <header className="page-hero">
      <span className="page-hero-eyebrow">Game Discovery</span>
      <h1>Discover games, build your library</h1>
      <p>Browse the full catalog, search or filter by status, and save what you want to play.</p>

      <div className="page-hero-stats">
        <div className="stat-pill">
          <strong>{totalGames}</strong>
          <span>Games available</span>
        </div>
      </div>
    </header>
  );
}

export default Header;