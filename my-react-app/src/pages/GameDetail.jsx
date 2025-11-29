import { useParams, Link } from "react-router-dom";
import games from "../data/games";

function GameDetail() {
  const { id } = useParams();
  const game = games.find((g) => g.id === Number(id));

  if (!game) {
    return <h2>Игра не найдена</h2>;
  }

  return (
    <div className="container">
      <h1>{game.title}</h1>
      <p><b>Жанр:</b> {game.genre}</p>
      <p><b>Разработчик:</b> {game.developer}</p>
      <p><b>Описание:</b> {game.description}</p>

      <Link to="/">
        <button>Назад</button>
      </Link>
    </div>
  );
}

export default GameDetail;
