import "../styles/Navbar.css";
import Fire from "../assets/fire.png";
import Star from "../assets/glowing-star.png";
import Party from "../assets/partying-face.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className="navbar_links">
        <a href="">
          Popular <img className="navbar_emoji" src={Fire} alt="fire emoji" />
        </a>
        <a href="">
          Top Rated <img className="navbar_emoji" src={Star} alt="star emoji" />
        </a>
        <a href="">
          Upcoming{" "}
          <img className="navbar_emoji" src={Party} alt="party face emoji" />
        </a>
      </div>
    </nav>
  );
}
