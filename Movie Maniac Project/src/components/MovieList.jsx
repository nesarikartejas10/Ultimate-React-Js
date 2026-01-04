import "../styles/MovieList.css";
import Fire from "../assets/fire.png";

export default function MovieList() {
  return (
    <section className="movie_list">
      <header className="movie_list_header">
        <h2 className="movie_list_heading">
          Popular <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </h2>
      </header>
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
    </section>
  );
}
