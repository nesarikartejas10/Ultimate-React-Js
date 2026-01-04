import "../styles/MovieCard.css";
import Star from "../assets/glowing-star.png";

export default function MovieCard({ movie }) {
  const { id, title, release_date, vote_average, overview, poster_path } =
    movie;
  return (
    <a
      href={`https://www.themoviedb.org/movie/${id}`}
      target="_blank"
      className="movie_card"
    >
      <img
        className="movie_poster"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt="movie poster"
      />

      <div className="movie_details">
        <h3 className="movie_title">{title}</h3>
        <div className="movie_date_rate">
          <p>{release_date}</p>
          <p className="movie_rating">
            {vote_average.toFixed(1)}{" "}
            <img className="card_emoji" src={Star} alt="rating-icon" />
          </p>
        </div>
        <p className="movie_description">{overview.slice(0, 100) + "..."}</p>
      </div>
    </a>
  );
}
