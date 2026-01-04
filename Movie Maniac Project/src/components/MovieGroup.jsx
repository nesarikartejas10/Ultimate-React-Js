export default function MovieGroup({ rating, onRatingClick, ratings }) {
  return (
    <ul className="movie_filter">
      {ratings.map((rate) => (
        <li
          key={rate}
          className={
            rating === rate ? "movie_filter_item active" : "movie_filter_item"
          }
          onClick={() => onRatingClick(rate)}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
}
