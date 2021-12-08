// import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./home.css";
import Navbar from "../Navbar";

const Home = () => (
  <div className="home">
    <Navbar />
    <div className="body-container">
      <div className="body-text">
        <h1 className="name-home">
          <span className="span-iam">I am, </span>Baddam Arun Kumar
        </h1>
        <p>
          I am an exciting employee in the new environment.
          <br /> I believe enjoying a daily job is directly proportional to
          career growth.
        </p>
        <Link to="/about">
          <button type="button" className="more-btn">
            More
          </button>
        </Link>
        <button className="more-btn">
          <a href="/arun.pdf" download>
            Download CV
          </a>
        </button>
      </div>
      <div className="home-pic">
        <img
          alt="my"
          src="https://res.cloudinary.com/imagelinks/image/upload/v1637499169/arun_nrljpt.jpg"
        />
      </div>
    </div>
  </div>
);
export default Home;
