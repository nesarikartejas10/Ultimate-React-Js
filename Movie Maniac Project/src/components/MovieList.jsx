import "../styles/MovieList.css";
import Fire from "../assets/fire.png";
import MovieCard from "./MovieCard";
import { useEffect, useState } from "react";
import MovieGroup from "./MovieGroup";

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [rating, setRating] = useState(0);
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
    setFilterMovies(data.results);
  };

  const handleFilter = (rate) => {
    if (rate === rating) {
      setRating(0);
      setFilterMovies(movies);
    } else {
      setRating(rate);
      const filteredMovies = movies.filter(
        (movie) => movie.vote_average >= rate
      );
      setFilterMovies(filteredMovies);
    }
  };

  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </h2>

        <div className="movie_list_fs">
          <MovieGroup
            rating={rating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

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
        {filterMovies.length === 0 ? (
          <h3 className="not_found_msg">Oops! No movies found...</h3>
        ) : (
          filterMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        )}
      </div>
    </section>
  );
}
