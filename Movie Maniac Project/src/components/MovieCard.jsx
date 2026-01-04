import "../styles/MovieCard.css";
import Star from "../assets/glowing-star.png";

export default function MovieCard() {
  return (
    <a href="" className="movie_card">
      <img
        className="movie_poster"
        src="https://i.etsystatic.com/37166133/r/il/60f034/4087791906/il_794xN.4087791906_jcbj.jpg"
        alt="movie poster"
      />

      <div className="movie_details">
        <h3 className="movie_title">Movie Name</h3>
        <div className="movie_date_rate">
          <p>10-20-2020</p>
          <p className="movie_rating">
            8.0 <img className="card_emoji" src={Star} alt="rating-icon" />
          </p>
        </div>
        <p className="movie_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          praesentium nam illo totam velit blanditiis?
        </p>
      </div>
    </a>
  );
}
