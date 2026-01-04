import "../styles/MovieList.css";
import Fire from "../assets/fire.png";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    try {
      fetchMovies();
    } catch (error) {
      console.log("Error while fetching movies", error);
    }
  }, []);

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=8703db8f1a1004cbb64f73f5602af6e1"
    );

    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </h2>

        <div className="movie_list_fs">
          <ul className="movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

          <select name="" className="movie_sort">
            <option value="">Sort By</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>

          <select name="" className="movie_sort">
            <option value="">a-z</option>
            <option value="">z-a</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
