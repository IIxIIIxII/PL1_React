import { Link } from "react-router-dom";
import games from "../data/games";

function Home() {
  return (
    <div className="container">
      <h1>Список игр</h1>

      {games.map((game) => (
        <div key={game.id} className="card">
          <h2>{game.title}</h2>
          <p>Жанр: {game.genre}</p>

          <Link to={`/game/${game.id}`}>
            <button>Подробнее</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
