import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="simple-page-hero">
      <span className="page-hero-eyebrow">Welcome</span>
      <h1>Your games, organized.</h1>
      <p>Browse a full game catalog, search and filter what fits your mood, and build a personal library of what you're playing, completed, or want to try next.</p>
      <Link to="/games" className="cta-btn">
        Browse Games →
      </Link>
    </section>
  );
}

export default Home;